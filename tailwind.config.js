/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "interested-in-vesting": "url('/img/interest-ypredict-img.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
};
