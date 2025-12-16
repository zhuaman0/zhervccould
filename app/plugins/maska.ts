import { vMaska } from "maska/vue";
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('maska', vMaska)
})