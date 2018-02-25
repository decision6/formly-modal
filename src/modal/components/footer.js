import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar-framework'

const TitleWrapper = (h, context) => {
  const toolbarProps = {
    slot: 'footer'
  }
  const saveBtnProps = {
    props: {
      color: 'negative',
      disable: true
    },
    style: {
      padding: '0 16px'
    }
  }
  const closeBtnProps = {
    props: {
      color: 'faded'
    },
    style: {
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
    h(QBtn, closeBtnProps, 'Cancel'),
  ])
}

export default TitleWrapper
