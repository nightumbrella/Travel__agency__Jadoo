/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': {'max': '1440px'},
        'xl': {'max': '1200px'},
        'lg': {'max': '991px'},
        'md': {'max': '767px'},
        'sm': {'max': '550px'},
        'xsm': {'max': '425px'},
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'OpenSans': ["Open Sans"],
        'Roboto': ["Roboto"],
        'Poppins' : ["Poppins"],
        'volkhov' : ["Volkhov"],

      }
    },
  },
  plugins: [],
}