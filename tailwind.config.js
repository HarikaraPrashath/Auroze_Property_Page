/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        momo: ['var(--font-momo)'],
        'noto-serif': ['var(--font-noto-serif)'],
        'momo-signature': ['var(--font-momo-signature)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}