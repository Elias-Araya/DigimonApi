import { createStore } from 'vuex'

export default createStore({
  state: {
    digimones: [],
    digimonesFiltrados: []
  },
  mutations: {
    setDigimones(state, payload){
      state.digimones = payload
    },
    setDigimonesFiltrados(state, payload){
      state.digimonesFiltrados = payload
    }
  },
  actions: {
    async getDigimones({commit}){
      try {
        // const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
        const res = await fetch('https://digimon-api.vercel.app/api/digimon')
        const data = await res.json()
        // console.log(data)
        commit('setDigimones', data)
      } catch (error) {
        console.log(error)
      }
    },
    filtrarLevel({commit, state}, level){
      const filtro = state.digimones.filter(digimon =>
         digimon.level.includes(level)
      )
      commit('setDigimonesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      const textoUsuario = texto.toLowerCase()
      const filtro = state.digimones.filter( digimon => {
        const textoApi = digimon.name.toLowerCase()  

        if(textoApi.includes(textoUsuario)){
          return digimon
        }
      })

      commit('setDigimonesFiltrados', filtro)
    }
  },
  getters: {
    nombreDigimon(state){

      return state.digimonesFiltrados.sort((a, b) => a.name.localeCompare(b.name))
    
    }
  },
  modules: {
  }
})
