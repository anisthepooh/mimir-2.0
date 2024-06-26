/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", ""],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      maxWidth: {
        'half': '50%',
      }
    },
  },
  plugins: [require("daisyui")],
}

