import { defineStore } from 'pinia'

// USAR FORMULARIOS DINAMICOS NO PINIA, ONDE TEM METODO DE FORMAT

export const useLoadingStore = defineStore({ // OU EXPORTAR DEFAULT MESMO
  id: 'loading',
  state: () => ({
    loading: false
  }),
  getters: {
    getLoading: (state) => state.loading
  },
  actions: {
    setLoading() {
      this.loading = !this.loading
    }
  }
})
