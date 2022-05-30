<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { useTokenStore } from "@/stores/token";

const tokenState = useTokenStore();

// defineProps<{
//   msg: string
// }>()

const logout = () => {
  tokenState.setToken("");
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-style">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" aria-current="page" to="/">
        <img src="@/assets/vue.png" width="32" height="32"/>
      </RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link text-link" v-if="!tokenState.token" active-class="active active-link" aria-current="page" to="/cadastro"> Registrar-se </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" v-if="!tokenState.token" active-class="active active-link" to="/login"> Login </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/disciplina"> Cadastrar Disciplina </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/assunto"> Cadastrar Assunto </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/vestibular"> Cadastrar Vestibular </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/questao"> Cadastrar Questão </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/questoes"> Questões </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" active-class="active active-link" to="/vestibular-proprio"> Próprio vestibular </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-link" v-if="tokenState.token" active-class="active active-link" to="/perfil"> Perfil </RouterLink>
          </li>
        </ul>

        <div class="d-flex">
          <button v-if="tokenState.token" @click="logout" class="btn btn-danger" > Logout </button>
        </div>

      </div>
    </div>
  </nav>
<!-- <RouterLink active-class="classe de quando clicar" to="/">Home</RouterLink> -->
</template>

<style scoped>

/* SOBRESCREVER O NAV-LINK */
.text-link { 
  font-family: Georgia, 'Times New Roman', Times, serif;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  opacity: 82%;
  /* color: black; */;
  /* text-decoration: none; */
  /* font-size: 17px; */
  /* font-weight: bold; */
}

.active-link {
  opacity: 100%;
  font-weight: bold;
}

.nav-style{
  /* background-color: #53a2d4; */
  background-color: #5b91b3;
}
</style>
