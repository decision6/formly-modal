import { QToolbar, QBtn } from 'quasar'

const TitleWrapper = (h, context) => {
  const toolbarProps = {
    slot: 'footer',
    color: context.toolbarColor
  }
  const saveBtnProps = {
    props: {
      color: 'negative',
      disable: context.isDisable
    },
    style: {
      'margin-right': '4px',
      padding: '0 16px'
    },
    on: {
      click () {
        context.save()
      }
    }
  }
  const closeBtnProps = {
    props: {
      color: 'faded'
    },
    style: {
      'margin-left': '4px',
      padding: '0 16px'
    },
    on: {
      click () {
        context.close()
      }
    }
  }

  return h(QToolbar, toolbarProps, [
    h(QBtn, saveBtnProps, 'Save'),
    h(QBtn, closeBtnProps, 'Cancel')
  ])
}

export default TitleWrapper
