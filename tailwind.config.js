/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,html}", // Include all JS and HTML files in the src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern":
          // "url('./dist/cyber-tech.png')",
          "url('http://127.0.0.1:5500/dist/cyber-tech.png')",
      },
    },
  },
  plugins: [],
};
