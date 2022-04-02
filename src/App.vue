<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import LoadingComponent from "@/components/Loading.vue"
import NotifyComponent from "@/components/Notify.vue"
import Navbar from "@/components/Navbar.vue"

import { useLoadingStore } from "@/stores/loading"

const loadingState = useLoadingStore()

</script>

<template>
  <header>
      <Navbar/>
      <NotifyComponent/>
      <LoadingComponent v-if="loadingState.loading"/>
  </header>

  <!-- PÁGINAS -->
  <RouterView /> 
</template>

<style>
/* CSS GLOBAL */

/* html, body, #app {
  height: 100%;
  margin: 0;
} */

</style>
