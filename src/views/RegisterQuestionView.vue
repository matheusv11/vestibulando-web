<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "@/utils/axios"
import Editor from "@tinymce/tinymce-vue";

const initEditor = {
  height: 500,
  plugins: 'image',
  file_picker_types: 'image',
  automatic_uploads: true,
  file_picker_callback: function (cb: any, value: any, meta: any) {
    // OLHAR DOC DO TINY PRA MELHORAR ISSO
    // DEIXAR NO PADRÃO DO FRAMEWORK NO CASO
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.onchange = function () {
      var file = this.files[0];

      var reader = new FileReader();
      reader.onload = function () {

        var id = 'blobid' + (new Date()).getTime();
        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };

    input.click();
  }
}

const formObject = { // NÃO MUDAR DIRETAMENTE
    alternatives: [{
        alternative: "A",
        title: ""
    }],
    title: "",
    answer: "",
    subjectsId: [],
    disciplineId: "Selecione uma disciplina",
    vestibularId: "Selecione um vestibular"
}


const form = ref({...formObject});

// const alternatives = ref([{
//     alternative: "A",
//     title: ""
// }]);

const subjects = ref([]);
const disciplines = ref([{}]);
const vestibulars = ref([{}]);

const request = async () => {
    const { title, answer, alternatives, subjectsId, disciplineId, vestibularId } = form.value
    
    await axios.post("/question", {
        title,
        answer,
        alternatives,
        subjectsId,
        disciplineId,
        vestibularId
    });

    form.value = { ...formObject }
}

const disciplineSubjects = async () => {
    if(typeof form.value.disciplineId === "string") {
        subjects.value = []// SE REFERENCIA O FORM OBJECT, ELE PODIA COPIAR
        // EVITAR DE CHAMAR REQUISIÇÃO DESNECESSARIA
        return
    }
    const { data } = await axios.get(`/subject?disciplineId=${form.value.disciplineId}`);
    subjects.value = data
    // console.log(data)
}

const allDisciplines = async () => {
    const { data } = await axios.get("/discipline");
    disciplines.value = data
    // console.log(data)
}

const allVestibulars = async () => {
    const { data } = await axios.get("/vestibular");
    vestibulars.value = data
    // console.log(data)
}

const addAlternative = (index: number) => {
    // TEMPORARIO
    const letters = ["A", "B", "C", "D", "E"] //USAR UM ARRAY PRA ACESSAR A POSIÇÃO, MAIS FACIL QUE USAR UM DE OBJETOS

    const filterLetter = letters.find(l => {
        const finded = form.value.alternatives.filter(e => e.alternative === l);
        if(!finded[0]) return l
    }) as string;

    form.value.alternatives.push({
        alternative: filterLetter,
        title: ""
    });
}

const removeAlternative = (index: number) => {
    const element = form.value.alternatives.filter((e, i) => i !== index);
    form.value.alternatives = element // PODE USAR SPREAD TAMBÉM
}

onMounted(()=> {
    // NESSE CASO, SERIA BOM GENERALIZAR O METODO
    // allSubjects();
    allVestibulars();
    allDisciplines();
});

</script>

<template>
    <div>
        <form class="d-flex flex-column align-items-center" @submit.prevent="request" method="POST">
            <select v-model="form.vestibularId" class="form-select mt-2 w-25">
                <option selected>Selecione um vestibular</option>
                <option v-for="vestibular in vestibulars" :key="vestibular.id" :value="vestibular.id"> {{vestibular.name}} </option>
            </select>

            <select @change="disciplineSubjects" v-model="form.disciplineId" class="form-select mt-2 w-25">
                <option selected>Selecione uma disciplina</option>
                <option v-for="discipline in disciplines" :key="discipline.id" :value="discipline.id"> {{discipline.name}} </option>
            </select>
            
            <div class="dropdown mt-2">
                <button :disabled="!subjects[0]" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Assuntos
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="subject in subjects" :key="subject.id">
                        <div class="form-check d-flex">
                            <input v-model="form.subjectsId" class="form-check-input" type="checkbox" :value="subject.id" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{subject.name}}
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <input class="form-control mt-2 w-25" v-model="form.title" type="text" name="name" placeholder="Enunciado" > -->


                <form class="mt-5" method="POST">
                    <Editor 
                    api-key="no-api-key"
                    cloud-channel="5-dev"
                    v-model="form.title"
                    :init="initEditor"
                    />
                </form>
            <input class="form-control mt-2 w-25" v-model="form.answer" type="text" name="answer" placeholder="Resposta" >

            <section>
                <div v-for="(alternative, index) in form.alternatives" :key="index">

                    <input 
                    class="form-control mt-2" 
                    v-model="form.alternatives[index].title" 
                    type="text" name="alternative" 
                    :placeholder="`Alternativa: ${alternative.alternative}`"
                    >
                    <button type="button" class="btn btn-danger mt-2" @click="removeAlternative(index)"> Remover </button>

                </div>

                <button type="button" class="btn btn-primary mt-2" @click="addAlternative"> Adicionar </button>
            </section>
            
            <button class="btn btn-primary mt-2" type="submit"> Cadastrar </button>

        </form>
    </div>
</template>

<style>

</style>