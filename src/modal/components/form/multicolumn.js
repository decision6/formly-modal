import Box from './support/box'
import { curry } from 'lodash'

const factoryChildren = curry((h, context, acc, child, index) => {
  const { title, color, fields } = child

  const boxProps = {
    props: {
      color,
      title,
      child,
      fields,
      model: context.model
    },
    on: {
      'update-form' (value) {
        context.formGroups.splice(index, 1, value)
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
