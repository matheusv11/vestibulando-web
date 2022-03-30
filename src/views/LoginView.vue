<script setup lang="ts">
import { ref } from "vue"
import axios from "@/utils/axios"

const formObject = {
    email: "",
    password: "",
}

const form = ref({...formObject})

const request = async () => {
    const { email, password } = form.value
    
    await axios.post("/auth", {
        email,
        password
    }).then(({ data }) => {
        localStorage.setItem("acessToken", data.acessToken); // USAR NO PINIA
    });

    form.value = { ...formObject }
}

</script>

<template>
    <div>
        <form @submit.prevent="request" method="POST">
            <input class="form-control" v-model="form.email" type="email" name="email" placeholder="Email" >
            <input class="form-control" v-model="form.password" type="password" name="password" placeholder="Senha" >
            <button class="btn btn-primary" type="submit"> Login </button>
        </form>
    </div>
</template>

<style>

</style>