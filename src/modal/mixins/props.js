import { includes } from 'lodash'

/**
 * @type Vue Mixin
 */
export default {
  props: {
    forceLoading: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object,
      default: () => ({}),
      required: true
    },
    fields: {
      type: Array,
      default: () => []
    },
    fieldsGroup: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: String,
      default: 'sm',
      validator (value) {
        return includes(['sm', 'lg', 'xlg', '2xlg'], value)
      }
    },
    height: {
      type: Number,
      default: 550
    },
    toolbarColor: {
      type: String,
      default: 'primary'
    }
  }
}
