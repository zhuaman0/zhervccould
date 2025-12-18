import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    components: {
      ...components,
    },
    directives: {
      ...directives,
    },
    defaults: {
      VForm: {
        validateOn: 'lazy',
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
