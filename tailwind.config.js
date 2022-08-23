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
        "danger": "#f50000",
      },
      backgroundImage: {
        'banner': "url('/img/blue_bus_2.jpg')"
      }
    },
  },
  plugins: [],
}
