<template>
  <b-container fluid="xl">
    <div class="card mb-3" id="divDetalhe">
      <div class="row no-gutters">
        <div class="col-md-4">
            <img v-if="obj.poster_path" :src=" 'https://image.tmdb.org/t/p/original/' + obj.poster_path" class="card-img-top">
            <img v-else-if="obj.profile_path" :src=" 'https://image.tmdb.org/t/p/original/' + obj.profile_path" class="card-img-top">
            <img v-else src="https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg"  class="card-img-top">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <input type="text" class="card-title" v-if="obj.title" v-model="obj.title">
            <input type="text" class="card-title" v-else-if="obj.original_name" v-model="obj.original_name"> 
            <input type="text" class="card-title" v-else v-model="obj.name"> 
          </div>
        </div>
      </div>



      <div>
          <b-modal ref="my-modal" hide-footer title="Confirmar Edição">
          <div class="text-center">
            <h3>Deseja Realmente Editar?</h3>
          </div>
          <b-button class="mt-3" v-b-modal.modal-footer-lg  @click="hideModal">Cancelar</b-button>
          <b-button class="mt-3" v-b-modal.modal-footer-lg  @click="editar(obj)">Confirmar</b-button>
        </b-modal>
      </div>

      <b-card-footer>
        <button class="btn" @click="irTelaDetalhe(id)"><i class="fa fa-times"></i> Cancelar</button>
        <button class="btn" @click="showModal"><i class="fa fa-save"></i> Salvar</button>
      </b-card-footer>
    </div>

  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditMedia",
  data(){
    return { 
      id : this.$route.params.id,
      obj:{
        id: this.$route.params.id,
        name: "",
        title: "",
        original_name: "",
        poster_path: "",
        profile_path: "",


      },
    }
  },
  computed: mapGetters(["resultadoPorId"]),
  created() {
    const objSalvo = this.resultadoPorId(this.id)
    this.obj.name = objSalvo.name
    this.obj.title = objSalvo.title
    this.obj.original_name = objSalvo.original_name
    this.obj.poster_path = objSalvo.poster_path
    this.obj.profile_path = objSalvo.profile_path

    console.log(this.resultadoPorId(this.id))
  },
  methods: {
    ...mapActions(["buscarResultados", "excluirMedia", "editarMedia"]),
    irTelaHome(){
      this.$router.push({ name: 'home' });
    },
    irTelaBusca() {
      this.$router.push({ name: "busca" });
    },
    irTelaDetalhe(id) {
      this.$router.push({name: "detalhe", params: { id }})
    },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      editar(obj) {
        this.editarMedia(obj)
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

/* BOTTOM BAR */
.bottomBarDetalhe {
  padding-top: 2em;
  position: absolute;
  bottom: 10px;
  width: 90%;
}
.colBottomBar a{
  color: #6B2200; 
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