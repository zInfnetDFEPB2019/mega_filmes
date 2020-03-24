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
</style>