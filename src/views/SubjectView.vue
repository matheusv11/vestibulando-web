<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"

const formObject = {
    name: "",
    disciplineId: "Selecione uma disciplina",
}

// const subjects = [{}] // TIPAR

// PODERIA CADASTRAR MULTIPLOS

const form = ref({...formObject})
const disciplines = ref([{}]);

const request = async () => {
    const { name, disciplineId } = form.value
    
    await axios.post("/subject", {
        name,
        disciplineId
    });

    form.value = { ...formObject }
}

const allDisciplines = async () => {
    const { data } = await axios.get("/discipline");
    disciplines.value = data
    console.log(data)
}

onMounted(()=> {
    allDisciplines() // CACHEAR ISSO
})

</script>

<template>
    <div>
        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <select v-model="form.disciplineId" class="form-select mt-2 w-25">
                <option selected>Selecione uma disciplina</option>
                <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id"> {{discipline.name}} </option>
            </select>
            <input class="form-control mt-2 w-25" v-model="form.name" type="text" name="name" placeholder="Descrição" >
            <button class="btn btn-primary mt-2" type="submit"> Cadastrar </button>
        </form>
    </div>
</template>

<style>

</style>