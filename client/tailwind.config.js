/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbeb',
          100: '#fbf7c3',
          200: '#f6ee85',
          300: '#efdf48',
          400: '#e5c91b',
          500: '#d4af37', // Royal Gold
          600: '#c59b27', // Antique Brass Gold (Main Brand Highlight)
          700: '#946f23',
          800: '#755420',
          900: '#61441e',
          950: '#38240f',
        },
        wedding: {
          primary: '#C59B27',      // Main Antique Brass Gold (Nilavilakku & Monogram)
          secondary: '#D4AF37',    // Main Warm Royal Gold
          cream: '#F5EFE6',        // Main Warm Linen Sand (Page Background)
          ivory: '#F9F5EE',        // Main Light Sand Ivory (Card & Section Background)
          accent: '#4A151B',       // Deep Sandalwood Maroon Accent
          maroon: '#671A21',       // Rich Crimson Maroon
          olive: '#3F532B',        // Garland Olive Green (Subtle Leaf & Botanical Accents)
          leafGreen: '#3F532B',    // Garland Olive Green
          goldMuted: '#B88E28',    // Muted Brass Gold
          charcoal: '#2C1B1D',     // Dark Sandalwood Mahogany for text readability
          maroonDark: '#350E13',   // Dark Maroon
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
