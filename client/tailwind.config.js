/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          50: '#fdfbeb',
          100: '#fbf7c3',
          200: '#f6ee85',
          300: '#efdf48',
          400: '#e5c91b',
          500: '#d4af37', // Custom metallic gold
          600: '#b8902c',
          700: '#946f23',
          800: '#755420',
          900: '#61441e',
          950: '#38240f',
        },
        wedding: {
          primary: '#093A27',      // Deep Imperial Emerald Green
          secondary: '#1b4d3e',    // Medium Emerald Green
          lightGreen: '#eef7f3',   // Light soft green
          accent: '#d4af37',       // Wedding Gold
          goldMuted: '#c5a059',    // Soft Antique Gold
          cream: '#faf6f0',        // Warm Linen Cream
          ivory: '#fdfbf7',        // Rich Ivory
          charcoal: '#2d3748',     // Dark slate for text readability
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
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
