/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'button': {
          DEFAULT:'var(--button)'
        },
        'text': {
          DEFAULT: 'var(--text)'
        },
        'background': {
          DEFAULT: 'var(--background)',
          50: 'var(--background-50)',
          100: 'var(--background-100)',
          200: 'var(--background-200)',
          300: 'var(--background-300)',
          400: 'var(--background-400)',
          500: 'var(--background-500)',
          600: 'var(--background-600)',
          700: 'var(--background-700)',
          800: 'var(--background-800)',
        },
        'primary': {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
        },
        // 'secondary': {
        //   DEFAULT: 'var(--secondary)',
        //   50: 'var(--secondary-50)',
        //   100: 'var(--secondary-100)',
        //   200: 'var(--secondary-200)',
        //   300: 'var(--secondary-300)',
        //   400: 'var(--secondary-400)',
        //   500: 'var(--secondary-500)',
        //   600: 'var(--secondary-600)',
        //   700: 'var(--secondary-700)',
        //   800: 'var(--secondary-800)',
        //   900: 'var(--secondary-900)',
        //   950: 'var(--secondary-950)',
        // },
        // 'accent': {
        //   DEFAULT: 'var(--accent)',
        //   50: 'var(--accent-50)',
        //   100: 'var(--accent-100)',
        //   200: 'var(--accent-200)',
        //   300: 'var(--accent-300)',
        //   400: 'var(--accent-400)',
        //   500: 'var(--accent-500)',
        //   600: 'var(--accent-600)',
        //   700: 'var(--accent-700)',
        //   800: 'var(--accent-800)',
        //   900: 'var(--accent-900)',
        //   950: 'var(--accent-950)',
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}