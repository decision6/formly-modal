import VueFormly from 'vue-formly'
import VueFormlyQuasar from '@decision6/vue-formly-quasar'
import 'formly-modal/dist/formly-modal.css'

export default ({ app, router, store, Vue }) => {
  Vue.use(VueFormly)
  Vue.use(VueFormlyQuasar)
}
