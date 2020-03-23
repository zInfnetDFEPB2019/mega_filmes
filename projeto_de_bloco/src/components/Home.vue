<!-- NavBar Menu -->
<template>
  <div class="hello container">
    <div id="barraDeNavegacao">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Mega Filmes</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Buscar</b-nav-item>
          </b-navbar-nav>
      </b-navbar>
    </div>

    <div id="carrosel">
      <b-carousel id="carousel-1" :interval="4000" controls indicators
      style="text-shadow: 1px 1px 2px #333;">
      <!-- IMAGEM 1 -->
      <b-carousel-slide
      caption="TROLLS 2"
      text="Lançamento Previsto 10/04/2020"
      img-src="https://image.tmdb.org/t/p/original/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg"
      ></b-carousel-slide>

      <!-- IMAGEM 2 -->
      <b-carousel-slide 
      caption="Digimon Adventure: Last Evolution Kizuna"
      text="Lançamento Previsto 25/03/2020"
      img-src="https://image.tmdb.org/t/p/original/6Bl2ctXAU68mD0fXCV5ZXPvfxcx.jpg">
      </b-carousel-slide>

      <!-- IMAGEM 3 -->
      <b-carousel-slide 
      caption="Os Novos Mutantes"
      text="Lançamento Previsto 03/04/2020"
      img-src="https://image.tmdb.org/t/p/original/lNhKmIG5Kw2qYG3REYuwmNUgl0n.jpg">
      </b-carousel-slide>
      </b-carousel>
    </div>
    
    <div class="row divTrailerEFilmes">
      <div class="col colFilmes">
        <p class="titulo">Filmes Mais Assistidos</p>
        <b-list-group>
          <b-list-group-item href="#">Awesome link</b-list-group-item>
          <b-list-group-item href="#">Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#">Disabled link</b-list-group-item>
          <b-list-group-item href="#">Link with active state</b-list-group-item>
        </b-list-group>
      </div>
      <div class="col colTrailer">
        <p class="titulo">Trailer dos Lançamentos</p>
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
        <b-link href="#foo">Sobre</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo">Contatos</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo">Copyright</b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo"></b-link>
      </div>
      <div class="col colBottomBar">
        <b-link href="#foo"></b-link>
      </div>
    </div>    
  </div>
</template>
<script>

</script>
<style scoped>
.hello{

}
#carrosel {
  padding-right: 5em;
  padding-left: 5em;
  padding-top: 2em;
}
.divTrailerEFilmes {
  padding-right: 5em;
  padding-left: 5em;
  padding-top: 2em;
}
.bottomBar {
  padding-right: 9em;
  padding-left: 9em;
  padding-top: 2em;
}
.lista {
  display: inline;
}
</style>
