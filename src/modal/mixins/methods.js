/**
 * @type Vue Mixin
 */
export default {
  methods: {
    open () {
      this.$refs.modal.open()
      this.$refs.modal.active = true
      document.body.classList.add('with-modal')
      this.$emit('open')
    },
    close () {
      this.$refs.modal.close()
      this.$refs.modal.active = false
      document.body.style.paddingRight = '0px'
      document.body.classList.remove('with-modal')
      this.$emit('close')
    },
    save () {
      this.loading = true
      this.$emit('save', () => {
        this.loading = false
      })
    },
    updateModel (value) {
      this.$emit('update:model', Object.assign({}, value))
    }
  }
}
