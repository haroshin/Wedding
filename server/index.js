import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Schema imports
import Rsvp from './models/Rsvp.js';
import Guestbook from './models/Guestbook.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FALLBACK_DB_PATH = path.join(__dirname, 'db_fallback.json');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize fallback JSON file database if needed
const initFallbackDb = () => {
  if (!fs.existsSync(FALLBACK_DB_PATH)) {
    fs.writeFileSync(FALLBACK_DB_PATH, JSON.stringify({ rsvps: [], guestbook: [] }, null, 2));
  }
};
initFallbackDb();

// Helper to read fallback DB
const readFallbackDb = () => {
  try {
    const data = fs.readFileSync(FALLBACK_DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return { rsvps: [], guestbook: [] };
  }
};

// Helper to write fallback DB
const writeFallbackDb = (data) => {
  try {
    fs.writeFileSync(FALLBACK_DB_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing to fallback DB:', err);
  }
};

// MongoDB Connection State
let useFallback = false;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wedding_sharun_niveditha';

console.log('Connecting to MongoDB...');
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 3000, // Timeout after 3 seconds
})
.then(() => {
  console.log('Successfully connected to MongoDB.');
})
.catch((err) => {
  console.warn('\n================================================================');
  console.warn('WARNING: Could not connect to MongoDB.');
  console.warn('Reason:', err.message);
  console.warn(`Falling back to Local JSON File Database: ${FALLBACK_DB_PATH}`);
  console.warn('================================================================\n');
  useFallback = true;
});

// API Routes

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: useFallback ? 'local-json-fallback' : 'mongodb',
    timestamp: new Date()
  });
});

// RSVPs Routes

// Get all RSVPs (useful for admin or overview)
app.get('/api/rsvps', async (req, res) => {
  try {
    if (useFallback) {
      const db = readFallbackDb();
      return res.json(db.rsvps);
    } else {
      const rsvps = await Rsvp.find().sort({ createdAt: -1 });
      return res.json(rsvps);
    }
  } catch (err) {
    console.error('Error fetching RSVPs:', err);
    res.status(500).json({ error: 'Failed to fetch RSVPs' });
  }
});

// Post a new RSVP
app.post('/api/rsvps', async (req, res) => {
  try {
    const { name, email, attending, guestsCount, dietaryRestrictions, message } = req.body;
    
    if (!name || attending === undefined) {
      return res.status(400).json({ error: 'Name and attendance status are required.' });
    }

    const rsvpData = {
      name,
      email,
      attending: Boolean(attending),
      guestsCount: attending ? Number(guestsCount || 1) : 0,
      dietaryRestrictions: attending ? dietaryRestrictions : '',
      message,
      createdAt: new Date(),
    };

    if (useFallback) {
      const db = readFallbackDb();
      rsvpData._id = new Date().getTime().toString();
      db.rsvps.push(rsvpData);
      writeFallbackDb(db);
      return res.status(201).json(rsvpData);
    } else {
      const newRsvp = new Rsvp(rsvpData);
      await newRsvp.save();
      return res.status(201).json(newRsvp);
    }
  } catch (err) {
    console.error('Error saving RSVP:', err);
    res.status(500).json({ error: 'Failed to save RSVP' });
  }
});

// Guestbook Routes

// Get all guestbook entries
app.get('/api/guestbook', async (req, res) => {
  try {
    if (useFallback) {
      const db = readFallbackDb();
      // Sort by date descending
      const wishes = [...db.guestbook].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(wishes);
    } else {
      const wishes = await Guestbook.find().sort({ createdAt: -1 });
      return res.json(wishes);
    }
  } catch (err) {
    console.error('Error fetching guestbook:', err);
    res.status(500).json({ error: 'Failed to fetch guestbook wishes' });
  }
});

// Post a new guestbook entry
app.post('/api/guestbook', async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required.' });
    }

    const wishData = {
      name,
      message,
      createdAt: new Date(),
    };

    if (useFallback) {
      const db = readFallbackDb();
      wishData._id = new Date().getTime().toString();
      db.guestbook.push(wishData);
      writeFallbackDb(db);
      return res.status(201).json(wishData);
    } else {
      const newWish = new Guestbook(wishData);
      await newWish.save();
      return res.status(201).json(newWish);
    }
  } catch (err) {
    console.error('Error saving wish:', err);
    res.status(500).json({ error: 'Failed to save wish' });
  }
});

// Start Server (only listen when not running in Vercel serverless environment)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
