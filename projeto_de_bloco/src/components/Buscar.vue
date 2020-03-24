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

    <div id>
        <b-card no-body>
            <b-tabs pills card vertical>
                <b-tab title="Todos" active><b-card-text>
                    <b-list-group>
                        <b-list-group-item href="#" class="">
                            <b-container class="bv-example-row">
                                <b-row>
                                    <b-col>
                                        <b-img left src="https://image.tmdb.org/t/p/original/jrYbYRMRwCO7vNtTdoqNcgALwAi.jpg" class="card-img" alt="Postor do Filme"></b-img>
                                    </b-col>
                                    <b-col>
                                        <h1>Batman Begins</h1>
                                        <div class="divSinopse">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                                            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                            It has survived not only five centuries, but also the leap into electronic 
                                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                                            </p>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                            <div class="divBotao">
                                <b-button class="btnInfo" pill variant="outline-danger">Mais informações</b-button>
                            </div>
                            <p></p>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text></b-tab>
                <b-tab title="Filmes"><b-card-text>

                </b-card-text></b-tab>
                <b-tab title="Séries"><b-card-text>

                </b-card-text></b-tab>
                <b-tab title="Pessoas"><b-card-text>

                </b-card-text></b-tab>
            </b-tabs>
        </b-card>
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
.card-img {
    width: 60% !important;
}
.divBotao {
    text-align: right;
}
h1 {
    float: right;
}
.divSinopse {
    float: right;
    text-align: right;
}
</style>