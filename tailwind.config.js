/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        s: ['10px', '1.5'],
        big: ['22px', '1.5'],
        mid: ['14px', '1.5'],
        pl: ['12px', '1.5'],
        mini: ['12px', '1'],
        min: ['10px', '1'],
      },

      boxShadow: {
        custom: '0px 10px 60px rgba(226, 236, 249, 0.5)',
      },
      gridTemplateColumns: {
        page: '306px 1fr ',
      },
      screens: {
        l: { min: '1024px' },
        md: { min: '768px' },
        sm: { min: '639px' },
        mini: { max: '380px' },
      },
    },
  },
  plugins: [],
};
