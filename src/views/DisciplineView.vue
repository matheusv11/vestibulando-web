<script setup lang="ts">
import { ref } from "vue"
import axios from "@/utils/axios"

const formObject = {
    name: ""
}

const form = ref({...formObject})

const request = async () => {
    const { name } = form.value
    
    await axios.post("/discipline", {
        name
    });

    form.value = { ...formObject }
}

</script>

<template>
    <div>
        <form class="d-flex justify-content-center" @submit.prevent="request" method="POST">
            <input class="form-control me-2 w-25" v-model="form.name" type="text" name="name" placeholder="Nome" >
            <button class="btn btn-primary" type="submit"> Cadastrar </button>
        </form>
    </div>
</template>

<style>

</style>