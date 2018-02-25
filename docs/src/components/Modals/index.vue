<script>
  import { QBtn } from 'quasar-framework'
  import FormlyModal from 'formly-modal'

  export default {
    name: 'modals',
    components: { FormlyModal, QBtn },
    data: () => ({
      model: {},
      fields: []
    })
  }
</script>

<template>
  <div>
    <FormlyModal
      ref="modal"
      title="Example form"
      size="lg"
      :height="400"
      :model="model"
      :fields="fields" />

    <QBtn @click="$refs.modal.open()"> Abrir modal </QBtn>
  </div>
</template>

<style>

</style>
