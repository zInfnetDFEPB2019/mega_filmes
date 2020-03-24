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

    <div id="cardDetalhe">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4">
            <b-img left src="https://image.tmdb.org/t/p/original/jrYbYRMRwCO7vNtTdoqNcgALwAi.jpg" class="card-img" alt="Postor do Filme"></b-img>
          </b-col>
          <b-col cols="8">
            <b-row>
              <h1>Batman Begins</h1>
            </b-row>
            <b-row>
              <label>Sinopse:</label>
              <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versio</p>
            </b-row>
            <b-row>
              <label>Elenco:</label>
              <div>
                <div>
                  <b-img thumbnail fluid left src="https://image.tmdb.org/t/p/original/4xydbSbAutKqXJwXtKlTIVU9qXA.jpg" class="fotos" alt="Postor do Filme"></b-img>
                </div>             
              </div>
              <p>Christian Bale</p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
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
  export default {

  }
</script>

<style>
#barraDeBusca {
  padding: 2em;
}
.bottomBar {
  padding-right: 9em;
  padding-left: 9em;
  padding-top: 2em;
}
p, h1{
  text-align: left;
}
#fotos {
  height: auto;
}
.img-thumbnail {
  max-width: 20% !important; 
}
</style>