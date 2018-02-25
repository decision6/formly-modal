import { QModalLayout } from 'quasar-framework'
import TitleWrapper from './title'
import FooterWrapper from './footer'

const LayoutWrapper = (h, context) => {
  return h(QModalLayout, [
    TitleWrapper(h, context),
    FooterWrapper(h, context)
  ])
}

export default LayoutWrapper
