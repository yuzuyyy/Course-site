/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1 : "#E173FF",
        color2 : "#814FFF",
        color3 : "#814FFF",
        color4 : "#814FFF",
        color5 : "#E9EDF8",
        color6 : "#F1F5F9"
      },
      fontFamily: {
        inter: "Inter"
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Specific themes used
    darkTheme: "dark", // Default dark theme
    base: true, // Applies base background and foreground colors
    styled: true, // Enables DaisyUI design for components
    utils: true, // Adds responsive and utility classes
    prefix: "daisy-", // Prefix for DaisyUI classnames
    logs: false, // Disable log messages
    themeRoot: ":root", // Default root for theme variables
  },
  
}

