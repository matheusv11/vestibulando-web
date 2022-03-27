<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoadingComponent from "@/components/Loading.vue"
import { useLoadingStore } from "@/stores/loading"

const loadingState = useLoadingStore()

</script>

<template>
  <header>
      <LoadingComponent v-if="loadingState.loading"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cadastro"> Registrar-se </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>

</style>
