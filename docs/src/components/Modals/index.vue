<script>
  import { QBtn, Dialog } from 'quasar-framework'
  import FormlyModal from 'formly-modal'
  import multicolumnFormly from './config/multicolumns-formly'

  export default {
    name: 'modals',
    components: { FormlyModal, QBtn },
    data: () => ({
      model: {
        name: '',
        age: null,
        genre: false
      },
      fields: [
        {
          key: 'name',
          required: true,
          type: 'input',
          templateOptions: {
            input: {
              'stack-label': 'Type your name'
            }
          }
        },
        {
          key: 'age',
          required: true,
          type: 'input',
          templateOptions: {
            input: {
              'stack-label': 'Type your age',
              type: 'number'
            }
          }
        },
        {
          key: 'genre',
          required: true,
          type: 'option-group',
          templateOptions: {
            option_group: {
              options: [
                { label: 'Male', value: true },
                { label: 'Female', value: false }
              ]
            }
          }
        }
      ],
      multicolumn: {
        ...multicolumnFormly
      }
    }),
    methods: {
      onSave (fn) {
        setTimeout(() => {
          Dialog.create({
            title: 'Saved'
          })
          fn()
        }, 1000)
      }
    }
  }
</script>

<template>
  <div>
    <FormlyModal
      ref="modal"
      title="Example form"
      size="lg"
      toolbarColor="indigo-10"
      :height="400"
      :model.sync="model"
      :fields="fields"
      @save="onSave" />

      <FormlyModal
        ref="mulcolumnModal"
        title="Multicolumn example form"
        size="xlg"
        toolbarColor="indigo-10"
        :model.sync="multicolumn.model"
        :fieldsGroup="multicolumn.fieldsGroups"
        @save="onSave" />

    <QBtn @click="$refs.modal.open()"> Open modal </QBtn>

    <QBtn @click="$refs.mulcolumnModal.open()"> Open multicolumn modal </QBtn>
  </div>
</template>

<style>

</style>
