import { isEmpty, isEqual } from 'lodash'

/**
 * @type Object
*/
const widthObjs = {
  'sm': '500px',
  'lg': '700px',
  'xlg': '900px',
  '2xlg': '1100px'
}

/**
 * @type Vue Mixin
 */
export default {
  computed: {
    contentCss () {
      return {
        'max-width': widthObjs[this.size],
        'width': '100%',
        'min-height': `${this.height}px`
      }
    },
    classModal () {
      return `modal-${this.size}`
    },
    isLoading () {
      return this.loading || this.forceLoading
    },
    isFormValid () {
      if (this.isMulticolumns) {
        return this.formGroups.every(item => item.$valid === true)
      }
      return this.form.$valid
    },
    isDisable () {
      return !this.isFormValid || this.isLoading || this.isNotChange
    },
    isMulticolumns () {
      return !isEmpty(this.fieldsGroup)
    },
    isNotChange () {
      return isEqual(this.internalModel, this.internalModelBkp)
    }
  }
}
