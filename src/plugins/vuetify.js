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
