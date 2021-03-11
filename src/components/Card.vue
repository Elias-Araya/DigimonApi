<template>
  <div class="card bg-light mb-3 " >
      <div class="card-body " >
          <h5 class="text-center"> Digimon: {{digimon.name}}</h5>
          <p class="text-center">
              <img :src="digimon.img" :alt="`img-${digimon.name}`" class="img-fluid w-30 border">
          </p>
          <p class="card-text">
             <span class="badge badge-info p-3 d-block">Level: {{digimon.level}}</span>
          </p>
      </div>
  </div>
</template>

<script>

export default {
    props: ['digimon']
}
</script>

