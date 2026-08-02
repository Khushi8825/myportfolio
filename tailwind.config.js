/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(130,69,236,0.08), transparent 70%)',
      },
    },
  },
  plugins: [],
}

