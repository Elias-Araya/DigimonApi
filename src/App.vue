<template>
<div>
<Navbar />
<div class="container">
  
  <h1 class="text-center">Digimon Api</h1>

  <Niveles />
  <Buscador />
  <CardList />

</div>
<Footer />
</div>

</template>

<script>

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CardList from './components/CarList'
import Buscador from './components/Buscador'
import Niveles from './components/Niveles'
export default {
  name: 'App',
  components: {
    CardList,
    Niveles,
    Buscador,
    Navbar,
    Footer
  }
}

</script>

<style>

</style>
