const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    '../lib/**/*.ex',
    '../lib/**/*.leex',
    '../lib/**/*.heex',
    '../lib/**/*.eex',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        zcash: {
          gold:         '#F3B724',  // --e-global-color-accent
          'gold-hover': '#FDC63E',  // z.cash link hover
          'gold-dim':   '#C8941A',
          navy:         '#271219',  // --e-global-color-secondary (dark nav/surfaces)
          dark:         '#271219',  // dark mode page bg
          light:        '#F3F1EF',  // --e-global-color-97d28a6 (warm cream bg)
          text:         '#141529',  // --e-global-color-text
          muted:        '#797576',  // --e-global-color-a466fad
          beige:        '#E3DED7',  // --e-global-color-822683b
        },
      },
      fontFamily: {
        // Inter: body font on z.cash (all weights 300–800)
        sans:    ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        // DM Serif Display: h1 / display headings on z.cash
        display: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
