<template>
  <div id="app">
    <!-- <Home/> -->
    <!-- <Buscar/>-->
    <Detalhe/>
  </div>
</template>

<script>
//import Home from './components/Home.vue'
//import Buscar from './components/Buscar.vue'
import Detalhe from './components/Detalhe.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'app',
  components: {
//    Home,
//    Buscar,
    Detalhe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
