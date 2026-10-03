/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf4f4',
          100: '#fbe7e7',
          200: '#f7d3d4',
          300: '#f0b2b4',
          400: '#e4868a',
          500: '#d35a60',
          600: '#bd3d44',
          700: '#9e2d33',
          800: '#83282c',
          900: '#6d2629',
          950: '#4a151b', // Sandalwood Maroon from Physical Invitation Card
        },
        gold: {
          50: '#fdfbeb',
          100: '#fbf7c3',
          200: '#f6ee85',
          300: '#efdf48',
          400: '#e5c91b',
          500: '#d4af37', // Custom metallic gold
          600: '#c59b27', // Brass Gold from Invitation Card Monogram & Diya
          700: '#946f23',
          800: '#755420',
          900: '#61441e',
          950: '#38240f',
        },
        wedding: {
          primary: '#4A151B',      // Deep Royal Sandalwood Maroon (Physical Card Headings & Monogram)
          secondary: '#671A21',    // Rich Crimson Mahogany
          lightGreen: '#f4f7f2',   // Soft Garland Light Green
          accent: '#C59B27',       // Antique Brass Gold (Card Diya Lamp & SN Monogram)
          goldMuted: '#D4AF37',    // Warm Royal Gold
          cream: '#F5EFE6',        // Soft Invitation Card Sand / Linen (Card Background)
          ivory: '#F9F5EE',        // Light Cream (Card Inner Glow)
          charcoal: '#2C1B1D',     // Dark Sandalwood Charcoal for text readability
          maroonDark: '#350E13',   // Deep Dark Maroon for Navbars & Footers
          leafGreen: '#3F532B',    // Traditional Banana Leaf Garland Green
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
