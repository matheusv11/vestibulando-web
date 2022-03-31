<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"

const formObject = {
    name: "",
    disciplinesId: [], //SEM NADA MESMO, SE COLOCA STRING, CONSIDERA
}

const form = ref({...formObject});
const disciplines = ref([{}]);

const request = async () => {
    const { name, disciplinesId } = form.value
    
    await axios.post("/vestibular", {
        name,
        disciplinesId //PRISMA CONSIDERA ARRAY VAZIO SEM QUEBRA, POIS FICA UNDEFINED
    })

    form.value = { ...formObject }
}

const allDisciplines = async () => {
    const { data } = await axios.get("discipline");
    disciplines.value = data
    console.log(data)
}

onMounted(() => {
    allDisciplines()
})

</script>

<template>
    <div>

        <form class="d-flex justify-content-center" @submit.prevent="request" method="POST">
            <input class="form-control me-2 w-25" v-model="form.name" type="text" name="vestibular" placeholder="Vestibular">

            <button class="btn btn-primary" type="submit"> Cadastrar </button>
        </form>

        <div v-for="discipline in disciplines" :key="discipline.id" class="form-check d-flex">
            <input v-model="form.disciplinesId" class="form-check-input" type="checkbox" :value="discipline.id" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                {{discipline.name}}
            </label>
        </div>
        
    </div>
</template>

<style>

</style>