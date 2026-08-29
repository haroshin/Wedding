import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  attending: {
    type: Boolean,
    required: true,
  },
  guestsCount: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  dietaryRestrictions: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Rsvp', rsvpSchema);
