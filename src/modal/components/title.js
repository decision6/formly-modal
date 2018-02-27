import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar-framework'

const TitleWrapper = (h, context) => {
  const toolbarProps = {
    slot: 'header',
    color: context.toolbarColor
  }

  const buttonProps = {
    props: {
      flat: true
    },
    on: {
      click () {
        context.close()
      }
    }
  }

  const iconProps = {
    props: {
      name: 'close'
    }
  }

  return h(QToolbar, toolbarProps, [
    h(QToolbarTitle, context.title),
    h(QBtn, buttonProps, [
      h(QIcon, iconProps)
    ])
  ])
}

export default TitleWrapper
