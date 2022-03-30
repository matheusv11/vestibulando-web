<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"

const formObject = {
    name: "",
    disciplineId: "Selecione uma disciplina",
}

// const subjects = [{}] // TIPAR

const form = ref({...formObject})
const subjects = ref([{}]);

const request = async () => {
    const { name, disciplineId } = form.value
    
    await axios.post("/subject", {
        name,
        disciplineId
    });

    form.value = { ...formObject }
}

const allSubjects = async () => {
    const { data } = await axios.get("/subject");
    subjects.value = data
    console.log(data)
}

onMounted(()=> {
    allSubjects() // CACHEAR ISSO
})

</script>

<template>
    <div>
        <form class="d-flex justify-content-center" @submit.prevent="request" method="POST">
            <select v-model="form.disciplineId" class="form-select me-2 w-25">
                <option selected>Selecione uma disciplina</option>
                <option v-for="subject in subjects" :key="subject.id" :value="subject.id"> {{subject.name}} </option>
            </select>
            <input class="form-control me-2 w-25" v-model="form.name" type="text" name="name" placeholder="Descrição" >
            <button class="btn btn-primary" type="submit"> Cadastrar </button>
        </form>
    </div>
</template>

<style>

</style>