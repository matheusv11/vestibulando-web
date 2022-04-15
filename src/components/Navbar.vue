<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'

// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" aria-current="page" to="/">Home</RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" aria-current="page" to="/cadastro"> Registrar-se </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/login"> Login </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/disciplina"> Cadastrar Disciplina </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/assunto"> Cadastrar Assunto </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/vestibular"> Cadastrar Vestibular </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/questao"> Cadastrar Questão </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/questoes"> Questões </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/vestibular-proprio"> Próprio vestibular </RouterLink>
          </li>
        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

      </div>
    </div>
  </nav>
<!-- <RouterLink active-class="classe de quando clicar" to="/">Home</RouterLink> -->
</template>

<style scoped>
</style>
