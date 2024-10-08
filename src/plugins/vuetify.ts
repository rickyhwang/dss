import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {
  DefaultTheme
} from '@/theme/LightTheme';
import {
  DarkDefaultTheme,
  DarkTheme1,
  DarkTheme6,
  DarkTheme7,
  DarkTheme8,
  DarkTheme5,
  DarkTheme2,
  DarkTheme3,
  DarkTheme4
} from '@/theme/DarkTheme';

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'DefaultTheme',
    themes: {
      DefaultTheme,
      DarkDefaultTheme,
      DarkTheme1,
      DarkTheme8,
      DarkTheme7,
      DarkTheme6,
      DarkTheme5,
      DarkTheme2,
      DarkTheme3,
      DarkTheme4
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
