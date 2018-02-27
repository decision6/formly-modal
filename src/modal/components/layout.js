import { QModalLayout } from 'quasar-framework'
import TitleWrapper from './title'
import FooterWrapper from './footer'
import FormlyWrapper from './form'

const LayoutWrapper = (h, context) => {
  const classColor = `bg-${context.toolbarColor}`
  const layoutProps = {
    props: {
      'header-class': classColor,
      'footer-class': classColor
    }
  }

  return h(QModalLayout, layoutProps, [
    TitleWrapper(h, context),
    FormlyWrapper(h, context),
    FooterWrapper(h, context)
  ])
}

export default LayoutWrapper
