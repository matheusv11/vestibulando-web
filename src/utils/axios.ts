// OU INSTANCIAR NO VUE // POR DESEMPENHO, O IMPORT DEVE SER MAIS RAPIDO
// CONFIGURAR OS INTERCEPTORS
import axios from "axios";
import { useLoadingStore } from "@/stores/loading"

const loadingState = useLoadingStore()

const axiosConfig = axios.create({
    baseURL: "http://localhost:3030"
});

axiosConfig.interceptors.request.use(config => {
    console.log("Request", config)
    
    loadingState.loading = true

    return config
}, error => {
    console.log("Error Request", error)

    loadingState.loading = false

    return Promise.reject(error)
})

axiosConfig.interceptors.response.use(response => {
    console.log('Response', response)
    
    loadingState.loading = false

    return response
}, error => {
    console.log('Response Error', error)

    loadingState.loading = false

    return Promise.reject(error)
})

export default axiosConfig;