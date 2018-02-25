import { QModal } from 'quasar-framework'
import LayoutWrapper from './layout'

const WrapperModal = (h, dataProps, context) => {
  return h(QModal, dataProps, [
    LayoutWrapper(h, context)
  ])
}

export default WrapperModal
