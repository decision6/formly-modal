<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="indigo-10">
        <q-toolbar-title>
          ModalFormly Example
          <span slot="subtitle">Quasar version: {{ $q.version }} - FormlyModal version: {{ libVersion }} </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <div>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>

    <q-layout-footer>
      <q-toolbar color="indigo-10">
        <p class="no-margin">
          Developed by <a href="https://github.com/decision6" class="text-white"> Decision6 </a>
        </p>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import pkg from '../../../package.json'

export default {
  name: 'LayoutDefault',
  data: () => ({
    libVersion: pkg.version
  })
}
</script>

<style>
</style>
