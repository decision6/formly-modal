import { QInnerLoading, QSpinnerDots } from 'quasar-framework'
import Formly from './support/formly'
import MulticolumnWrapper from './multicolumn'

const FormlyWrapper = (h, context) => {
  const loadingProps = {
    props: {
      visible: context.isLoading
    }
  }

  const formProps = {
    props: {
      model: context.internalModel,
      fields: context.fields,
      form: context.form
    }
  }

  const spinnerProps = {
    props: {
      size: '50px',
      color: 'primary'
    }
  }

  if (context.isMulticolumns) {
    return h('div', [
      MulticolumnWrapper(h, context),
      h(QInnerLoading, loadingProps, [
        h(QSpinnerDots, spinnerProps)
      ])
    ])
  }

  return h('div', [
    Formly(h, formProps),
    h(QInnerLoading, loadingProps, [
      h(QSpinnerDots, spinnerProps)
    ])
  ])
}

export default FormlyWrapper
