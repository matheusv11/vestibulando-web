import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useMessageStore } from "../stores/message";

// import RegisterView from '../views/RegisterView.vue' // POR SER IMPORTADO AQUI, ANTES DA ROTA, O PINIA QUEBRA

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/disciplina',
      name: 'discipline',
      component: () => import('../views/DisciplineView.vue')
    },
    {
      path: '/assunto',
      name: 'subject',
      component: () => import('../views/SubjectView.vue')
    },
    {
      path: '/vestibular',
      name: 'vestibular',
      component: () => import('../views/VestibularView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


router.beforeEach((to, from, next) => { // VALIDAR ROTAS // SE TEM TOKEN OU NÃO
  // validar refresh token a cada requisição ou mudança de pagina
  const messageState = useMessageStore() // OU UM ACTION COM TIMEOUT PRA LIMPAR
  messageState.message = {
    type: "",
    text: ""
  }
  // O BEFORE EACH TEM QUE SER SEPARADO DO CREATE ROUTER
  // console.log("Para", to)
  // console.log("De", from)
  next() // OU RETORNAR NOME DA ROTA
})

export default router
