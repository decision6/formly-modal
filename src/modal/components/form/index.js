import { QInnerLoading, QSpinnerDots } from 'quasar'
import Formly from './support/formly'
import MulticolumnWrapper from './multicolumn'

const FormlyWrapper = (h, context) => {
  const loadingProps = {
    props: {
      visible: context.isLoading
    }
  }

  const formProps = {
    style: {
      border: 0,
      padding: 0,
      margin: 0
    },
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
