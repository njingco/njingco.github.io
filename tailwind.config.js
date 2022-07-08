/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      title: ['Norwester', 'sans-serif'],
      subtitle:['Garet', 'sans-serif'],
      body: ['TT Norms Pro', 'sans-serif'],
    },
    fontSize:{
      nav_size: '26px',
      title_size: '',
      subtitle_size: '',
      header_size: '',
      body_size: '',
      title_spacing: '1px'
    },
    extend: {
      colors: {
        bg_light:"#fff",
        light_blue:"#d0e2ff",
        light_purple:"#cdc9df",
        dark_purple:"#5d5682",
        text_dark:"#211e32",
        nav_active:"#ffffff"
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
