<!-- NavBar Menu -->
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

    <div id="divCarrosel">
      <b-carousel id="carousel" :interval="4000" controls indicators>

          <!-- IMAGEM 1 -->
          <b-carousel-slide
          class="carrouselSlide"
          caption="TROLLS 2"
          text="Lançamento Previsto 10/04/2020"
          img-src="https://image.tmdb.org/t/p/original/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg">
        </b-carousel-slide>

        <!-- IMAGEM 2 -->
        <b-carousel-slide
        class="carrouselSlide" 
        caption="Digimon Adventure: Last Evolution Kizuna" 
        text="Lançamento Previsto 25/03/2020"
        img-src="https://image.tmdb.org/t/p/original/6Bl2ctXAU68mD0fXCV5ZXPvfxcx.jpg">
        </b-carousel-slide>

        <!-- IMAGEM 3 -->
        <b-carousel-slide
        class="carrouselSlide" 
        caption="Os Novos Mutantes"
        text="Lançamento Previsto 03/04/2020"
        img-src="https://image.tmdb.org/t/p/original/lNhKmIG5Kw2qYG3REYuwmNUgl0n.jpg">
        </b-carousel-slide>        
      </b-carousel>
    </div>

    <div class="row divTrailerEFilmes">
      <div class="col colFilmes">
        <p class="titulo">Últimos Lançamentos</p>
          <b-list-group>
          <b-list-group-item >Bloodshot</b-list-group-item>
          <b-list-group-item >Dois Irmãos</b-list-group-item>
          <b-list-group-item >O Poço</b-list-group-item>
          <b-list-group-item >O Homem Invisível</b-list-group-item>
          <b-list-group-item >Guns Akimbo</b-list-group-item>
        </b-list-group>
      </div>
      <div class="col colTrailer">
        <p class="titulo">Trailer do Lançamento</p>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.youtube.com/embed/R07r-s2b5_Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="row bottomBar" fixed="bottom">
      <div class="col colBottomBar">
      <b-link href="#foo"></b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo"></b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="https://www.linkedin.com/in/tdsmarques/" target="_blank">Sobre</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="https://www.linkedin.com/in/tdsmarques/detail/contact-info/" target="_blank">Contatos</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="https://github.com/InfnetDFEPB2019/mega_filmes" target="_blank">Source</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo"></b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo"></b-link>
      </div>
    </div> 
  </b-container>
</template>

<script>
export default {
  methods: {
    irTelaHome(){
      this.$router.push({ name: 'home' });
    },
    irTelaBusca() {
      this.$router.push({ name: "busca" });
    },
    irTelaDetalhe(id) {
      this.$router.push({name: "detalhe", params: { id }})
    }
  }
}
</script>

<style scoped>

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

/* ESTILOS CARROSEL */
#divCarrosel {
  padding-right: 8%;
  padding-left: 8%;
  padding-top: 4%;
  text-align: center !important;
}
#carrosel {
  text-shadow: 1px 1px 2px #333;
  text-align: center !important;
}

/* ESTILOS FILMES E TRAILER */
.divTrailerEFilmes {
  padding-right: 5em;
  padding-left: 5em;
  padding-top: 2em;
}

/* BOTTOM BAR */
.bottomBar {
  padding-right: 9em;
  padding-left: 9em;
  padding-top: 2em;
  position: unset !important;
}

/* TRAILLER E TITULOS */
.lista {
  display: inline;
}
.titulo {
  color: #6B2200; 
  text-align: left;
}
.list-group a {
  color: #6B2200; 
}

.colBottomBar a{
  color: #6B2200; 
}

</style>
