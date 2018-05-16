import Formly from './formly'

const TitleWrapper = (h, title, color = 'primary') => {
  const dataProps = {
    attrs: {
      class: `caption bg-${color}`
    }
  }

  return h('p', dataProps, title)
}

export default {
  name: 'formly-box',
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'faded'
    },
    fields: {
      type: Array,
      default: () => []
    },
    col: {
      type: Number,
      default: 6
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    form: {},
    internalModel: {}
  }),
  watch: {
    form: {
      handler (value) {
        this.emitForm(value)
      },
      deep: true
    },
    internalModel: {
      handler (value) {
        this.emitModel(value)
      },
      deep: true
    }
  },
  methods: {
    emitForm (form) {
      this.$emit('update-form', Object.assign({}, form))
    },
    emitModel (model) {
      this.$emit('update-model', Object.assign({}, model))
    }
  },
  created () {
    this.emitForm(this.form)
    this.internalModel = Object.assign({}, this.model)
    this.$nextTick(() => {
      this.emitModel(this.internalModel)
    })
  },
  render (h) {
    const dataProps = {
      attrs: {
        class: 'formly-modal-box'
      }
    }

    const formProps = {
      style: {
        border: 0,
        padding: 0,
        margin: 0
      },
      props: {
        model: this.internalModel,
        fields: this.fields,
        form: this.form
      }
    }

    return h('div', dataProps, [
      TitleWrapper(h, this.title, this.color),
      h('div', { attrs: { class: 'content' } }, [ Formly(h, formProps) ])
    ])
  }
}
