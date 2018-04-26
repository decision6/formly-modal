/**
 * @type Vue Mixin
 */
export default {
  methods: {
    open (fn) {
      this.$refs.modal.show(fn)
      this.$emit('open')
    },
    close (fn) {
      this.$refs.modal.hide(fn)
      this.reset()
      this.$emit('close')
    },
    onEscapeKey (event) {
      this.$refs.modal.active = false
      document.body.style.paddingRight = '0px'
      document.body.classList.remove('with-modal')
      this.reset()
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
    },
    reset () {
      this.internalModel = Object.assign({}, this.internalModelBkp)
    },
    setModel (model, isUpdateBkp = false) {
      this.internalModel = Object.assign({}, model)
      if (isUpdateBkp) {
        this.internalModelBkp = Object.assign({}, model)
      }
    }
  }
}
