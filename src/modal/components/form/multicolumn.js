import Box from './support/box'
import { curry, defaultsDeep, map, pick } from 'lodash'

const loadModel = (fields, model) => {
  const keys = map(fields, 'key')
  const _model = pick(model, keys)
  return _model
}

const factoryChildren = curry((h, context, acc, child, index) => {
  const { title, color, fields } = child
  const model = loadModel(fields, context.model)

  const boxProps = {
    props: {
      color,
      title,
      child,
      fields,
      model
    },
    on: {
      'update-form' (value) {
        context.formGroups.splice(index, 1, value)
      },
      'update-model' (value) {
        context.internalModel = defaultsDeep({}, value, context.internalModel)
      }
    }
  }

  const dataProps = {
    attrs: {
      class: 'col-md-6'
    }
  }

  acc.push(h('div', dataProps, [ h(Box, boxProps) ]))

  return acc
})

const MulticolumnWrapper = (h, context) => {
  const children = context.fieldsGroup.reduce(factoryChildren(h, context), [])
  const dataProps = {
    attrs: {
      class: 'row xs-gutter'
    }
  }

  return h('div', dataProps, children)
}

export default MulticolumnWrapper
