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
      default: 'primary'
    },
    fields: {
      type: Array,
      default: () => []
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    form: {}
  }),
  watch: {
    form: {
      handler (value) {
        this.emitForm(value)
      },
      deep: true
    }
  },
  methods: {
    emitForm (value) {
      this.$emit('update-form', Object.assign({}, value))
    }
  },
  mounted () {
    this.emitForm(this.form)
  },
  render (h) {
    const dataProps = {
      attrs: {
        class: 'formly-modal-box'
      }
    }

    const formProps = {
      props: {
        model: this.model,
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
