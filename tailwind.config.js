/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Asegúrate de incluir todos los archivos donde usarás Tailwind
  ],
  theme: {
    extend: {
      colors: {
        fondoMain: "#D1DCFF",
      },
    },
  },
  plugins: [],
};
