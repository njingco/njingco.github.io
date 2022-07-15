/** @type {import('tailwindcss').Config} */
module.exports = {
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
      section_title:'40px',
      title_size: '24px',
      body_size: '18px',
      title_spacing: '1px',
      tab_size:'52px',
    },
    extend: {
      colors: {
        bg_light:"#fff",
        light_blue:"#d0e2ff",
        light_purple:"#cdc9df",
        dark_purple:"#5d5682",
        text_dark:"#211e32",
        text_light:"#fff",
        nav_active:"#ffffff"
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
