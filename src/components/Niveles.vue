<template>
<div class="text-center">
  <h3>Filtar por Niveles</h3>
  <div class="btn-group mb-3" >
      <button class="btn btn-info" @click="filtro('Fresh')">FR</button>
      <button class="btn btn-info" @click="filtro('Training')">IT</button>
      <button class="btn btn-info" @click="filtro('Rookie')">RO</button>
      <button class="btn btn-info" @click="filtro('Champion')">CH</button>
      <button class="btn btn-info" @click="filtro('Ultimate')">UL</button>      
      <button class="btn btn-info" @click="filtro('Mega')">ME</button>
      <button class="btn btn-info" @click="filtro('Armor')">AR</button>
      <button class="btn btn-info" @click="filtro('')">ALL</button>
      
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()

        const filtro = (level) => {
            store.dispatch('filtrarLevel', level)
        }

        return {filtro}
    }
}
</script>
