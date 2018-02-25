import { QInnerLoading, QSpinnerDots } from 'quasar-framework'

const FormlyWrapper = (h, context) => {
  const loadingProps = {
    props: {
      visible: context.isLoading
    }
  }

  const spinnerProps = {
    props: {
      size: '50px',
      color: 'primary'
    }
  }

  const formProps = {
    props: {
      model: context.internalModel,
      fields: context.fields,
      form: context.form
    }
  }

  const divProps = {
    style: {
      padding: '8px'
    }
  }

  return h('div', divProps, [
    h('formly-form', formProps),
    h(QInnerLoading, loadingProps, [
      h(QSpinnerDots, spinnerProps)
    ])
  ])
}

export default FormlyWrapper
