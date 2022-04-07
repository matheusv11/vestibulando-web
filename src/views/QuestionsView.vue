<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"
import { useTokenStore } from "@/stores/token";

const tokenState = useTokenStore();

const formObject = {
    selected: ""
}

const form = ref({...formObject});

const subjects = ref([]);
const disciplines = ref([{}]); // USAR REF DE OBJETOS COMO NO REACT?
const vestibulars = ref([{}]);
const questions = ref([]);

const answer = async (questionId: number) => {
    const { selected } = form.value
    
    await axios.post("/answer", {
        selected,
        questionId
    },{
        headers: {
            Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
        }
    });

    form.value = { ...formObject }
}

const allDisciplines = async () => {
    const { data } = await axios.get("/discipline");
    disciplines.value = data
}

const allVestibulars = async () => {
    const { data } = await axios.get("/vestibular");
    vestibulars.value = data
}

const allQuestions = async () => {
    const { data } = await axios.get("/question");
    questions.value = data
}

onMounted(()=> {
    allVestibulars();
    allDisciplines();
    allQuestions();
});

</script>

<template>
    <div class="mx-auto" style="width: 50%;">
        
        <div class="card mt-3" v-for="question in questions" :key="question.id">
            
            <div class="card-header d-flex justify-content-between">
                <h5> {{question.discipline.name}} </h5> 

                <h5 class="card-title">{{question.vestibular.name}}</h5>

                <b> Assuntos: {{ question.question_subjects.map(e => e.subject.name).join(", ") }} </b>

                <!-- FAVORITAR -->
            </div>

            <div class="card-body">

                <p class="card-text" v-html="question.title"/>
                
                <div v-for="(alternative, index) in JSON.parse(question.alternatives)" :key="index" class="form-check mt-2">
                    <input v-model="form.selected" :value="alternative.alternative" role="button" class="form-check-input" type="radio" :name="`flexRadioDefault-${question.id}`">

                    <label class="form-check-label" for="flexRadioDefault">
                        <b>{{alternative.alternative}})</b> <span v-html="alternative.title"/>
                    </label>

                </div>

                <form @submit.prevent="answer(question.id)" method="POST">
                    <button class="btn btn-primary mt-3"> Responder </button>
                </form>
                
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>