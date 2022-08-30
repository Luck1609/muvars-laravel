/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#007bff",
        "success": "#27ae60",
        "default": "#6d8494",
        "default-grey": "#282F37",
        "default-gold": "#FFCC88",
        "danger": "#f50000",
      },
      backgroundImage: {
        'banner': "url('/img/blue_bus_2.jpg')",
        'coach': "url('/img/coach.jpg')",
        'empty-seat': "url('/img/svg/empty.svg')",
        'empty-seat-v': "url('/img/svg/empty_vertical.svg')",
        'occupied-seat': "url('/img/svg/occupied_seat.svg')",
        'occupied-seat-v': "url('/img/svg/occupied_vertical.svg')",
      }
    },
  },
  plugins: [],
}
