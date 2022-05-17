<script setup>
import {ref, onMounted} from 'vue';
import axios from '@/utils/axios';
import { useTokenStore } from "@/stores/token";
const tokenState = useTokenStore();

const user = ref({});

onMounted(async ()=> { // ASYNC MOUNTED? MELHOR CHAMAR EM OUTRA FUNÇÃO?
    const { data } = await axios.get('/user-profile', {
        headers: {
            Authorization: `Bearer ${tokenState.token}`
        }
    })

    user.value = data

});
</script>

<template>
    <div class="mx-auto" style="width: 50%;">

        
        <div class="card mt-3">
            
            <div class="card-header d-flex">
                <img class="profile-pic" src="http://sinpolrn.org.br/wp-content/uploads/2019/09/nature-1.jpg" alt="">

                <h5 class="card-title"> {{user.name}} </h5>

            </div>

            <div class="card-body">

                <p class="card-text" />
                
            </div>

        </div>

        <div class="card mt-3">
            
            <div class="card-header d-flex justify-content-between">
                <h5> TESTE 1 </h5> 

                <h5 class="card-title"> Teste 5</h5>

                <b> Assuntos: Varios </b>

            </div>

            <div class="card-body">

                <p class="card-text" />
                
            </div>

        </div>

    </div>
</template>

<style scoped>
    .profile-pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>