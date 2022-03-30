import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "./assets/css/bootstrap.min.css"
import "./assets/js/bootstrap.min.js"
// OU USAR O BOOSTRAP MODULE

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
