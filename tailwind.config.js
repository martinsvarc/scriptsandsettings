/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes matching our global.css
        'headline': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        'subheadline': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        'title': ['1.5rem', { lineHeight: '2rem' }],
        'subtitle': ['1.25rem', { lineHeight: '1.75rem' }],
        'body-large': ['1.125rem', { lineHeight: '1.75rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
        'body-small': ['0.875rem', { lineHeight: '1.25rem' }],
        'caption': ['0.75rem', { lineHeight: '1rem' }],
      },
      colors: {
        // Adding your scrollbar colors as theme colors
        'primary': {
          DEFAULT: '#5b06be',
          'hover': '#4a05a0',
        },
        'scroll-track': '#f2f3f8',
      },
    },
  },
  plugins: [],
}
