<!-- NavBar Menu -->
<template>
  <div class="hello container">
    <div id="barraDeNavegacao">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Mega Filmes</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Logar</b-nav-item>
          <b-nav-item href="#">Registrar</b-nav-item>
          </b-navbar-nav>
      </b-navbar>
    </div>

    <div id="barraDeBusca">
      <div class="searchbar">
        <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button>Buscar</b-button>
        </b-input-group-append>
        </b-input-group>
      </div>
    </div>

    <div id="carrosel">
      <b-carousel id="carousel-1" :interval="4000" controls indicators
      style="text-shadow: 1px 1px 2px #333;">
      <!-- IMAGEM 1 -->
      <b-carousel-slide
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- IMAGEM 2 -->
      <b-carousel-slide 
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=54">
      <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- IMAGEM 3 -->
      <b-carousel-slide 
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=54">
      <h1>Hello world!</h1>
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
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
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
#barraDeBusca {
  padding: 2em;
}
#carrosel {
  padding-right: 5em;
  padding-left: 5em;
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
