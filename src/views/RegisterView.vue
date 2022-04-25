<script setup lang="ts">
import { ref } from "vue"
import axios from "@/utils/axios"
import { useRouter } from "vue-router";

const router = useRouter();

const formObject = {
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
}

const form = ref({...formObject})

const request = async () => {
    // CASO TODOS CAMPOS SEJAM PREENCHIDOS E A SENHA SEJA IGUAL
    const { name, email, password, repeatPassword } = form.value
    
    if(password !== repeatPassword){
       return alert("Oh o carro do leite")
    }

    await axios.post("/user", {
        name,
        email,
        password
    });

    router.push({
        // path: "/login",
        name: "login"
    });

    form.value = { ...formObject }
}

</script>

<template>
    <div>
        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <input class="form-control mt-2 w-25" v-model="form.name" type="text" name="name" placeholder="Nome" >
            <input class="form-control mt-2 w-25" v-model="form.email" type="email" name="email" placeholder="Email" >
            <input class="form-control mt-2 w-25" v-model="form.password" type="password" name="password" placeholder="Senha" >
            <input class="form-control mt-2 w-25" v-model="form.repeatPassword" type="password" name="repeatPassowrd" placeholder="Repetir Senha" >
            <button class="btn btn-primary mt-2" type="submit"> Submeta </button>
        </form>
    </div>
</template>

<style>

</style>