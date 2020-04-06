<template>
  <b-container fluid="xl">

    <div id="divNavbar">
      <b-navbar id="navbar">
        <b-navbar-brand href="http://localhost:8080" >Mega Filmes</b-navbar-brand>
        <b-navbar-nav id="linkNavbar" class="ml-auto">
          <b-nav-item @click="irTelaHome">Home</b-nav-item>
          <b-nav-item @click="irTelaBusca">Buscar</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <form @submit.prevent="onSubmit"> 
        <div id="divBusca">
            <b-input-group>
                <b-form-input id="txtBusca" v-model="obj_busca.txtBusca"></b-form-input>
                <b-input-group-append>
                    <input id="btnBusca" type="submit" value="Buscar">
                </b-input-group-append>
            </b-input-group>
        </div>

        <div id="divRadioGroup">
            <b-form-group>
                <b-form-radio-group
                id="radio-group"
                v-model="obj_busca.selected"
                :options="options"
                name="radio-options">
                </b-form-radio-group>
            </b-form-group>
        </div>
    </form>


    <div id="divResultados" >
        <div class="card mb-3" id="divPesquisa" v-for="resultado in todosResultados" :key="resultado.id">
            <p v-if="todosResultados.length == 0">Nenhum Resultado Encontrado</p>

            <img v-if="resultado.poster_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultado.poster_path" class="card-img-top">
            <img v-else-if="resultado.profile_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultado.profile_path" class="card-img-top">
            <img v-else src="https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg"  class="card-img-top">

            
            <div class="card-body">
                <h5 class="card-title" v-if="resultado.title">{{ resultado.title }}</h5>
                <h5 class="card-title" v-else-if="resultado.original_name">{{ resultado.original_name }}</h5>
                <h5 class="card-title" v-else>{{ resultado.name }}</h5>

                <p class="card-text" ><small>Data de Lançamento</small></p> 
                <p class="card-text" v-if="resultado.release_date"><small class="text-muted">{{ resultado.release_date }}</small></p>
                <p class="card-text" v-else><small class="text-muted">** Data nâo Disponível **</small></p>    
                
            </div>
            <div class="card-footer">
                <router-link
                tag="a" :to="{ name: 'detalhe', params: { id: resultado.id} }">
                Ver Mais ...
                </router-link>
            </div>
        </div>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Busca",
    data() {
        return {
            obj_busca: {
                selected: 'todos',
                txtBusca: ''
            },
            options: [
                { text: 'Todos', value: 'todos' },
                { text: 'Filmes', value: 'filmes' },
                { text: 'TV', value: 'tv' },
                { text: 'Pessoas', value: 'pessoas' }
            ]
        }
    },  
    methods: {
        ...mapActions(["buscarResultados", "buscarFilmes", "buscarSeries", "buscarPessoas", "limparState"]),
        onSubmit() {
            switch(this.obj_busca.selected){
                case 'todos':
                    this.buscarResultados(this.obj_busca);
                    break;
                case 'filmes':
                    this.buscarFilmes(this.obj_busca);
                    break;
                case 'tv':
                    this.buscarSeries(this.obj_busca);
                    break;
                case 'pessoas':
                    this.buscarPessoas(this.obj_busca);
                    break;            
            }            
        },
        irTelaHome(){
            this.$router.push({ name: 'home' });
        },
        irTelaBusca() {
            this.$router.push({ name: "busca" });
        },
        irTelaDetalhe(id) {
            this.$router.push({name: "detalhe", params: { id }})
        }   
    },
    created() {
        this.limparState();
    },
    computed: mapGetters(["todosResultados", "resultadoPorId"])
}
</script>

<style>
/* ESTILOS NAVBAR */
#navbar {
  background-color: #6B2200; 
}
.navbar-brand{
  color: white !important;
}
#linkNavbar a  {
  color: white;
  text-decoration-color: white;
}

/* BARRA DE BUSCA */
#btnBusca {
    background-color: #6B2200;
    color: white;
}
#divBusca {
    padding-top: 4%;
}

/* RESULTADOS BUSCA */
#divResultados {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
}
.card-text {
   text-overflow: ellipsis;
}
</style>