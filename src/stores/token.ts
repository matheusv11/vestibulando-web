import { defineStore } from 'pinia'

export const useTokenStore = defineStore({
  id: 'token',
  state: () => ({
    token: localStorage.getItem("acessToken") || ""
  }),
  getters: {
    getToken: (state) => state.token
  },
  actions: {
    setToken(val: string) {
      localStorage.setItem("acessToken", val)
    }
  }
})
