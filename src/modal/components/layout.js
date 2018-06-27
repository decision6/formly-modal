import { QModalLayout } from 'quasar'
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
  const divProps = {
    style: { padding: '8px' }
  }

  return h(QModalLayout, layoutProps, [
    TitleWrapper(h, context),
    h('div', divProps, [
      context.$slots['before-form'],
      FormlyWrapper(h, context),
      context.$slots.default
    ]),
    FooterWrapper(h, context)
  ])
}

export default LayoutWrapper
