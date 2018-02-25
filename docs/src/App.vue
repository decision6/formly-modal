<script>
import { QLayout, QToolbar, QToolbarTitle } from 'quasar-framework'

export default {
  name: 'App',
  components: { QLayout, QToolbar, QToolbarTitle }
}
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout
      ref="layout"
      :left-class="{'bg-grey-2': true}"
    >
      <q-toolbar slot="header" color="indigo-10">
        <q-toolbar-title>
          ModalFormly Example
        </q-toolbar-title>
      </q-toolbar>

      <div class="generic-margin">
        <router-view />
      </div>

      <q-toolbar slot="footer" color="indigo-10">
        <p class="no-margin">
          Developed by <a href="https://github.com/decision6"> Decision6 </a>
        </p>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<style scoped>
  .generic-margin {
    padding: 10px;
  }
</style>
