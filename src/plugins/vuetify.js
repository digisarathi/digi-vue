import { createVuetify } from 'vuetify'
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import 'vuetify/styles'

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'original',
    options: { customProperties: true },
    themes: {
      fruits: {
        dark: false,
        colors: {
          primary: '#0D4949',
          secondary: 'rgb(164,194,79)',
          info: '#FBC948',
          background: '#F6F6E3',
          accent: '#DB611D',
        },
      },
      shades_of_teal: {
        dark: true,
        colors: {
          primary: '#ACC8DA',
          secondary: '#007373',
          accent: '#748996',
          background: '#232A2F',
          info: '#3B474E',
        },
      },
      original: {
        dark: false,
        colors: {
          primary: '#325ea4',
          secondary: '#54595f',
          accent: '#748996',
          background: '#ffffff',
          info: '#2196F3',
          text: '#858585',
          error: '#FF0000',
          warning: '#FFC107',
          success: '#4caf50',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
    },
  },
})
