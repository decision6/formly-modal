import { QModalLayout } from 'quasar-framework'
import TitleWrapper from './title'
import FooterWrapper from './footer'
import FormWrapper from './form'
import FormlyWrapper from './form';

const LayoutWrapper = (h, context) => {
  return h(QModalLayout, [
    TitleWrapper(h, context),
    FormlyWrapper(h, context),
    FooterWrapper(h, context)
  ])
}

export default LayoutWrapper
