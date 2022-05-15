<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"
import { useTokenStore } from "@/stores/token";

const tokenState = useTokenStore();

const formObject: any = [] // SOLUÇÃO TEMPORÁRIA

const form = ref([...formObject]);

const queryObject = { // NÃO MUDAR DIRETAMENTE
    subjectIds: [],
    disciplineIds: [],
    vestibularIds: []
}

const queryParams = ref({...queryObject});

const subjects = ref([]);
const disciplines = ref([{}]); // USAR REF DE OBJETOS COMO NO REACT?
const vestibulars = ref([{}]);
const questions = ref([]);

const answer = async (questionId: number, indexQuestion: number) => {
    const selected = form.value[indexQuestion];

    if(tokenState.token) {
        const response = await axios.post("/answer", {
            selected,
            questionId
        },{
            headers: {
                Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
            }
        });

        const question = questions.value.find((q: any) => q.id === questionId ) as any;
        question.answers[0] = { id: response.data.id } 
    }

}

const updateAnswer = async (answerId: number, indexQuestion: number) => {
    const selected = form.value[indexQuestion];

    if(tokenState.token) { // PODERIA ATÉ REMOVER, JA QUE NÃO EXISTIRÁ PARA NÃO LOGADOS
        await axios.patch(`/answer/${answerId}`, { // USAR PARAMS
            selected
        },{
            headers: {
                Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
            }
        });
    }

}

const favorite = async (questionId: number) => {
    
    const response = await axios.post("/favorite", {
        questionId
    }, {
        headers: {
            Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
        }
    });

    const question = questions.value.find((q: any) => q.id === questionId ) as any;
    // NÃO PRECISAR SOBRESCREVER ARRAY COMO NO REACT
    question.favorite_questions[0] = { id: response.data.id } // APENAS PARA NIVEL DE VISUALIZAÇÃO
}

const removeFavorite = async (favoriteId: number) => {
    
    await axios.delete(`/favorite/${favoriteId}`,{
        headers: {
            Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
        }
    });

    const question = questions.value.find((q: any) => q.favorite_questions[0]?.id === favoriteId ) as any; // PARA IMPEDIR DE PASSAR O QUESTION ID, PERCORRO TODOS ARRAY E PEGO O FAVORITE QUESTION
    // NÃO PRECISAR SOBRESCREVER ARRAY COMO NO REACT
    question.favorite_questions = [] // APENAS PARA NIVEL DE VISUALIZAÇÃO
}

const allDisciplines = async () => {
    const { data } = await axios.get("/discipline");
    disciplines.value = data
}

const allVestibulars = async () => {
    const { data } = await axios.get("/vestibular");
    vestibulars.value = data
}
const allSubjects = async () => {
    const { data } = await axios.get("/subject");
    subjects.value = data
}

const allQuestions = async () => {
    const { data } = await axios.get("/question", {
        params: queryParams.value,
        headers: { // CASO LOGADO
            Authorization: `Bearer ${tokenState.token}` // CUIDAR COM OS TIPOS DE TOKEN
        }
    });

    questions.value = data
}

onMounted(()=> {
    allVestibulars();
    allDisciplines();
    allQuestions();
    allSubjects();
});

const verifyAnswer = (answer: string, indexQuestion: number, alternative: string, selectedAnswer?: string) => {
    // VERIFICAR APENAS AO RESPONDER
    const selected = form.value[indexQuestion] || selectedAnswer; // ISSO VALE APENAS PARA O METODO QUE NÃO ENVOLVE ESPERAR O BOTAO APERTAR, POIS ASSIM ATUALIZAR DIRETO
    if(!selected) return;
    if(alternative === answer) return "bg-success"
    if(alternative !== answer && selected !== answer) return "bg-danger"
}

</script>

<template>
    <div class="mx-auto" style="width: 50%;">

        <div class="card mt-3">
            <div class="card-body">
                <form @submit.prevent="allQuestions" method="POST">
            
                    <div class="dropdown mt-2">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Disciplinas
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="discipline in disciplines" :key="discipline.id">
                                <div class="form-check d-flex">
                                    <input v-model="queryParams.disciplineIds" class="form-check-input" type="checkbox" :value="discipline.id" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {{discipline.name}}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown mt-2">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Vestibulares
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="vestibular in vestibulars" :key="vestibular.id">
                                <div class="form-check d-flex">
                                    <input v-model="queryParams.vestibularIds" class="form-check-input" type="checkbox" :value="vestibular.id" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {{vestibular.name}}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown mt-2">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Assuntos
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li v-for="subject in subjects" :key="subject.id">
                                <div class="form-check d-flex">
                                    <input v-model="queryParams.subjectIds" class="form-check-input" type="checkbox" :value="subject.id" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {{subject.name}}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <button class="btn btn-primary mt-2" type="submit"> Buscar </button>

                </form>
            </div>
        </div>

        <div class="card mt-3" v-for="(question, indexQuestion) in questions" :key="question.id">
            
            <div class="card-header d-flex justify-content-between">
                <h5> {{question.discipline.name}} </h5> 

                <h5 class="card-title">{{question.vestibular.name}}</h5>

                <b> Assuntos: {{ question.question_subjects.map(e => e.subject.name).join(", ") }} </b>

            </div>

            <div class="card-body">

                <p class="card-text" v-html="question.title"/>
                
                <div v-for="(alternative, indexAlternative) in JSON.parse(question.alternatives)" :key="indexAlternative" class="form-check mt-2">
                    <input v-model="form[indexQuestion]" :value="alternative.alternative" :checked="question.answers[0]?.selected === alternative.alternative" role="button" class="form-check-input" type="radio" :name="`flexRadioDefault-${question.id}`">

                    <label class="form-check-label d-flex" for="flexRadioDefault">
                        <b>{{alternative.alternative}})</b> <span :class="verifyAnswer(question.answer, indexQuestion, alternative.alternative, question.answers[0]?.selected)" v-html="alternative.title"/>
                    </label>

                </div>

                <form @submit.prevent="!question.answers[0] ? answer(question.id, indexQuestion) : updateAnswer(question.answers[0].id, indexQuestion)" method="POST">
                    <button :class="`btn ${!question.answers[0] ? 'btn-primary' : 'btn-success'} mt-3`"> {{!question.answers[0] ? "Responder" : "Atualizar"}} </button>
                </form>

                <form v-if="tokenState.token" @submit.prevent="!question.favorite_questions[0] ? favorite(question.id): removeFavorite(question.favorite_questions[0].id)" method="POST">
                    <button :class="`btn ${!question.favorite_questions[0] ? 'btn-warning' : 'btn-danger'} mt-3`"> {{!question.favorite_questions[0] ? "Favoritar" : "Desfavoritar"}} </button>
                </form>
                
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>