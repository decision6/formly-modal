# formly modal

A wrapper for Quasar QModal by using QFormly

## Requirements

This package has as a dependencies:

- Vue 2.5.x
- Quasar 14.x
- VueFormlyQuasar 2.x

## Install

```sh
yarn add @decision6/formly-modal
```

## Usage

This package exports a single component, `FormlyModal`. An example of use:

```vue
import FormlyModal from '@decision6/formly-modal'

export default {
  components: {
    FormlyModal
  }
}

<template>
  <FormlyModal />
</template>
```

## FormlyModal component

### Properties

|   Property   |   Type  | Required | Default |                                         Description                                        |
|:------------:|:-------:|:--------:|---------|:------------------------------------------------------------------------------------------:|
|     model    |  Object |    yes   |         |                                         Form model                                         |
|    fields    |  Array  |    no    |         |                      An array of objects with each field on your form.                     |
|  fieldsGroup |  Array  |    no    |         | An array of objects to multicolumn form. See the section Multicolumns Form to more details |
|     title    |  String |    yes   |         |                                         Modal title                                        |
|     size     |  String |    no    |    sm   |              A size to modal. Accepts the following values: sm, lg, xlg, 2xlg              |
|    height    |  Number |    no    |   550   |                                 An specific height to modal                                |
| toolbarColor |  String |    no    | primary |                          A color option from Quasar Collor Pallete                         |
| forceLoading | Boolean |    no    |  false  |   Force loading state inside modal. This is useful when await async data to inside modal   |

### Vue Events

| Vue Event |             Description             |                                Payload                               |
|:---------:|:-----------------------------------:|:--------------------------------------------------------------------:|
|   @save   | Emitted when save button is clicked | A function that should be called when the save execution is finished |
|   @open   |  Emitted when open method is called |                                                                      |
|   @close  | Emitted when close method is called |                                                                      |

## Multicolumns Form

If only field property is setted, the component will understand that there are only form component. But, there are cases that use multiple forms in one. For this, use `fieldsGroup`,that is a array of objects with the following properties:

```js
{
  title: 'Box title',
  color: 'Background color for caption box',
  fields: [] // an array of objects for formly
}
```

## Examples

[See the example of the two uses](./docs/src/components/Modals/index.vue)

[See the demo](http://labs.decision6.com/formly-modal)

## Component Methods

|  Method  |                 Signature                 |                      Description                      |
|:--------:|:-----------------------------------------:|:-----------------------------------------------------:|
|   open   |                 open () {}                | open modal and emit event                             |
|   close  |                close () {}                | close modal and emit event                            |
| setModel | setMethod (model, isUpdateBkp = false) {} | update internalModel and optionally, the model backup |
