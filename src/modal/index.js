import { QModalLayout, QContextMenu } from 'quasar-framework'
import { isFunction } from 'lodash'
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
    internalModel: {},
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
  mounted () {
    this.internalModel = Object.assign({}, this.model)
  },
  render(h) {
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
