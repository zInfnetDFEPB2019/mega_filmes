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

    <div class="card mb-3" id="divDetalhe">
      <div class="row no-gutters">
        <div class="col-md-4">
            <img v-if="resultadoPorId(id).poster_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultadoPorId(id).poster_path" class="card-img-top">
            <img v-else-if="resultadoPorId(id).profile_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultadoPorId(id).profile_path" class="card-img-top">
            <img v-else src="https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg"  class="card-img-top">
        </div>
        <div class="col-md-8">
          <div class="card-body">
                <h3 class="card-title" v-if="resultadoPorId(id).title">{{ resultadoPorId(id).title }}</h3>
                <h3 class="card-title" v-else-if="resultadoPorId(id).original_name">{{ resultadoPorId(id).original_name }}</h3>
                <h3 class="card-title" v-else>{{ resultadoPorId(id).name }}</h3>

                <h4 v-if="resultadoPorId(id).media_type == 'movie'">Filme</h4>
                <h4 v-else-if="resultadoPorId(id).media_type == 'tv'">Série/Programa de TV</h4>

                <label v-if="resultadoPorId(id).overview">Sinopse</label>
                <h5 v-if="resultadoPorId(id).overview">{{ resultadoPorId(id).overview }}</h5>
              
                <p v-if="resultadoPorId(id).known_for_department == 'Acting'">Ator</p>

            <p class="card-text" v-if="resultadoPorId(id).known_for_department == 'Acting'"> Conhecido Por:</p>


            <div id="divParticipacoes" 
              v-for="resultado in resultadoPorId(id).known_for" :key="resultado.id">
                <b-img v-if="resultado.poster_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultado.poster_path" class="img-detalhe"></b-img>
                <b-img v-else-if="resultado.profile_path" :src=" 'https://image.tmdb.org/t/p/original/' + resultado.profile_path" class="img-detalhe"></b-img>
                <b-img v-else src="https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg"  class="img-detalhe"></b-img>
                
            </div>
            
            <label class="card-text" v-if="resultadoPorId(id).release_date"><small>Data de Lançamento</small></label> 
            <p class="card-text" v-if="resultadoPorId(id).release_date"><small class="text-muted">{{ resultadoPorId(id).release_date }}</small></p>

            <label class="card-text" v-if="resultadoPorId(id).first_air_date"><small>Estréia na TV</small></label> 
            <p class="card-text" v-if="resultadoPorId(id).first_air_date"><small class="text-muted">{{ resultadoPorId(id).first_air_date }}</small></p>
          </div>
        </div>
      </div>
      <b-card-footer>
        <button class="btn" @click="irTelaEditar"><i class="fa fa-edit"></i> Editar</button>
        <button class="btn" @click="showModal"><i class="fa fa-trash"></i> Excluir</button>
      </b-card-footer>
    </div>

    <div>
      <b-modal ref="my-modal" hide-footer title="Confirmar Exclusão">
        <div class="text-center">
          <h3>Deseja Realmente Excluir?</h3>
        </div>
        <b-button class="mt-3" v-b-modal.modal-footer-lg  @click="hideModal">Cancelar</b-button>
        <b-button class="mt-3" v-b-modal.modal-footer-lg  @click="toggleModal(id)">Confirmar</b-button>
      </b-modal>
    </div>

    <router-view></router-view>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Detalhe",
  data: function(){
    return{ 
      id : this.$route.params.id,}
  },
  computed: mapGetters(["resultadoPorId"]),
  methods: {
    ...mapActions(["buscarResultados", "excluirMedia"]),
    irTelaHome(){
      this.$router.push({ name: 'home' });
    },
    irTelaBusca() {
      this.$router.push({ name: "busca" });
    },
    irTelaEditar() {
      this.$router.push({ name: 'editMedia' , params: { id: this.id } });
    },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal(id) {
        this.excluirMedia(id)
        this.hideModal()
        this.irTelaBusca()
      },
  },
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


/* DIV DETALHE */
#divDetalhe {
  margin-top: 2em;
  text-align: right;
}

.img-detalhe {
  width: 25%;
  margin: 1em;
}

#divParticipacoes {
  display: inline;
}
.btn {
  background-color: #6B2200; 
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 1em;
  margin-right: 1em;
}

</style>