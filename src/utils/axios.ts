// OU INSTANCIAR NO VUE // POR DESEMPENHO, O IMPORT DEVE SER MAIS RAPIDO
// CONFIGURAR OS INTERCEPTORS
import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "http://localhost:3030"
});

axiosConfig.interceptors.request.use(config => {
    console.log("Request", config)
    return config
}, error => {
    console.log("Error Request", error)
    return Promise.reject(error)
})

axiosConfig.interceptors.response.use(response => {
    console.log('Response', response)

    return response
}, error => {
    console.log('Response Error', error)

    return Promise.reject(error)
})

export default axiosConfig;