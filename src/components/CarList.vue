<template>
  <div class="row">
      <div 
          class="col-12"
          v-for="digimon in digimones" :key="digimon.name"  
      >
        <Card :digimon="digimon" />
      </div>
  </div>
</template>

<script>
import Card from './Card'
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
export default {
    components: {
        Card
    },
    setup(){
        const store = useStore()

        const digimones = computed(() =>{
            return store.getters.nombreDigimon
        })

        
        onMounted(async() =>{
           await store.dispatch('getDigimones')
           await store.dispatch('filtrarLevel', 'Champion')
        })

        return {digimones}
    }
}
</script>

<style>

</style>