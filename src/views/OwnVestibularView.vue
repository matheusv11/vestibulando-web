<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"
import { useTokenStore } from "@/stores/token";

const tokenState = useTokenStore();

const formObject = {
    title: "",
    timer: 0,
    questions: []

}

const form = ref({...formObject});

const questions = ref([]);

const request = async () => {
    
    const { title, timer, questions } = form.value;

    await axios.post("/own-vestibular", {
        name: title,
        timer,
        questionsId: questions
    }, {
        headers: {
            Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
        }
    });

    form.value = { ...formObject };
}


const allQuestions = async () => {
    const { data } = await axios.get("/question");
    questions.value = data
}

onMounted(()=> {
    // QUANDO FIZER O COMPONENTE DE QUESTOES, USAR TEMPLATES PARA DISTINGUIR QUANDO É RESPOSTA E QUANDO É PROPRIO VESTIBULAR
    allQuestions();
});

</script>

<template>
    <div>
        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <input class="form-control mt-2 w-25" v-model="form.title" type="text" name="title" placeholder="Titulo" >
            <input class="form-control mt-2 w-25" v-model="form.timer" type="number" name="timer" placeholder="Timer(minutos)" >
            <button class="btn btn-primary mt-2" type="submit"> Criar </button>
        </form>
    </div>

    <div class="mx-auto" style="width: 50%;">
        <div class="card mt-3" v-for="question in questions" :key="question.id">
            
            <!-- VAI SERVIR PRO OUTRO PROBLEMA DO CHECKBOX -->
            <input v-model="form.questions" :value="question.id" role="button" class="form-check-input" type="checkbox" name="checkbox-questions">

            <div class="card-header d-flex justify-content-between">
                <h5> {{question.discipline.name}} </h5> 

                <h5 class="card-title">{{question.vestibular.name}}</h5>

                <b> Assuntos: {{ question.question_subjects.map(e => e.subject.name).join(", ") }} </b>

            </div>

            <div class="card-body">

                <p class="card-text" v-html="question.title"/>

                <div v-for="(alternative, indexAlternative) in JSON.parse(question.alternatives)" :key="indexAlternative" class="form-check mt-2">

                    <label class="form-check-label d-flex" for="flexRadioDefault">
                        <b>{{alternative.alternative}})</b> <span v-html="alternative.title"/>
                    </label>

                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>

</style>