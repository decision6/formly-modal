import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar-framework'

const TitleWrapper = (h, context) => {
  const toolbarProps = {
    slot: 'header'
  }

  const buttonProps = {
    props: {
      flat: true
    },
    on: {
      click() {
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
    h(QBtn, buttonProps, [
      h(QIcon, iconProps)
    ]),
    h(QToolbarTitle, context.title)
  ])
}

export default TitleWrapper
