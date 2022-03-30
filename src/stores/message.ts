import { defineStore } from 'pinia'

export const useMessageStore = defineStore({ // PODERIA TER UM ARQUIVO UNICO DE EXPORTAÇÃO DO PINIA, MAS AI FERRA POIS VAI TER TUDO EXPORTADO MESMO NÃO USADO
  id: 'message',
  state: () => ({
    message: {
      type: "",
      text: ""
    }
  }),
  getters: {
    getLoading: (state) => state.message
  },
  actions: {
    setMessage(val) {
      this.message = val // TYPE E TEXT
    }
  }
})
