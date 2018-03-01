import { WrapperModal } from './components'
import {
  ModalProps,
  ModalMethods,
  ModalComputeds
} from './mixins'

export default {
  name: 'formly-modal',
  mixins: [ ModalProps, ModalComputeds, ModalMethods ],
  data: () => ({
    form: {},
    formGroups: [],
    internalModel: {},
    internalModelBkp: {},
    loading: false
  }),
  watch: {
    internalModel: {
      handler (value) {
        this.updateModel(value)
      },
      deep: true
    }
  },
  created () {
    this.internalModel = Object.assign({}, this.model)
    this.internalModelBkp = Object.assign({}, this.model)
  },
  render (h) {
    const dataProps = {
      ref: 'modal',
      attrs: {
        class: `modal fullscreen row flex-center formly-modal ${this.classModal}`
      },
      props: {
        contentCss: this.contentCss
      }
    }

    return WrapperModal(h, dataProps, this)
  }
}
