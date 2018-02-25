import { QModalLayout, QContextMenu } from 'quasar-framework'
import { includes } from 'lodash'
import { WrapperModal } from './components'

const widthObjs = {
  'sm': '500px',
  'lg': '700px',
  'xlg': '900px',
  '2xlg': '1100px'
}

export default {
  name: 'formly-modal',
  props: {
    model: {
      type: Object,
      default: () => ({}),
      required: true
    },
    fields: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return includes(['sm', 'lg', 'xlg', '2xlg'], value)
      }
    },
    height: {
      type: Number,
      default: 550
    }
  },
  data: () => ({
    form: {}
  }),
  computed: {
    contentCss() {
      return {
        'max-width': widthObjs[this.size],
        'min-height': `${this.height}px`
      }
    },
    classModal() {
      return `modal-${this.size}`
    }
  },
  methods: {
    open () {
      this.$refs.modal.open()
      this.$refs.modal.active = true
      document.body.classList.add('with-modal')
      this.$emit('app:open-modal')
    },
    close () {
      this.$refs.modal.close()
      this.$refs.modal.active = false
      document.body.style.paddingRight = '0px'
      document.body.classList.remove('with-modal')
      this.$emit('app:close-modal')
    }
  },
  render(h) {
    const dataProps = {
      ref: 'modal',
      attrs: {
        class: `modal fullscreen row flex-center formly-modal ${this.classModal}`
      },
      props: {
        contentCss: this.contentCss
      }
    }

    return WrapperModal(h, dataProps, this)
  }
}
