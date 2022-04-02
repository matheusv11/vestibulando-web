<script setup lang="ts">
import { ref } from "vue"
import axios from "@/utils/axios"
import { useTokenStore } from "@/stores/token"

const tokenState = useTokenStore();

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
        tokenState.setToken(data.acessToken)
        // localStorage.setItem("acessToken", data.acessToken); // USAR NO PINIA
    });

    form.value = { ...formObject }
}

</script>

<template>
    <div>
        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <input class="form-control mt-2 w-25" v-model="form.email" type="email" name="email" placeholder="Email" >
            <input class="form-control mt-2 w-25" v-model="form.password" type="password" name="password" placeholder="Senha" >
            <button class="btn btn-primary mt-2" type="submit"> Login </button>
        </form>
    </div>
</template>

<style>

</style>