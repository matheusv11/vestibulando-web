// OU INSTANCIAR NO VUE // POR DESEMPENHO, O IMPORT DEVE SER MAIS RAPIDO
// CONFIGURAR OS INTERCEPTORS
import axios, { AxiosError, AxiosResponse } from "axios";

// import { createPinia } from "pinia"; // OU EXPORTAR EM UM ARQUIVO O PINIA
import { useLoadingStore } from "@/stores/loading" // RESOLVER AINDA PROBLEMA DA INSTANCIA DO PINIA
import { useMessageStore } from "@/stores/message"

const loadingState = useLoadingStore()
const messageState = useMessageStore()

const axiosConfig = axios.create({
    baseURL: "http://localhost:3030"
});

axiosConfig.interceptors.request.use(config => { // LIMPAR ESTADOS A CADA REQUEST?
    console.log("Request", config)
    
    loadingState.loading = true

    return config
}, (error: AxiosError) => {
    console.log("Error Request", error)

    loadingState.loading = false

    return Promise.reject(error)
})

axiosConfig.interceptors.response.use((response: AxiosResponse) => {
    console.log('Response', response)

    messageState.message = { // MELHORAR A SETAGEM NO PINIA, USAR MAIS ACTIONS
        type: "success",
        text: response.data.message
    }
    
    loadingState.loading = false

    return response
}, (error: AxiosError) => {
    
    messageState.message = { // MELHORAR A SETAGEM NO PINIA, USAR MAIS ACTIONS
        type: "error",
        text: error.response.data.message
    }

    console.log('Response Error', error.response)

    loadingState.loading = false

    return Promise.reject(error)
})

export default axiosConfig;