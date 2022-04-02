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

        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <input class="form-control mt-2 w-25" v-model="form.name" type="text" name="vestibular" placeholder="Vestibular">

            <div class="dropdown mt-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Assuntos
                </button>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="discipline in disciplines" :key="discipline.id">
                        <div class="form-check d-flex">
                            <input v-model="form.disciplinesId" class="form-check-input" type="checkbox" :value="discipline.id" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{discipline.name}}
                            </label>
                        </div>
                    </li>
                </ul>

            </div>

            <button class="btn btn-primary mt-2" type="submit"> Cadastrar </button>
        </form>

        
    </div>
</template>

<style>

</style>