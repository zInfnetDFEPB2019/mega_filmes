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

    <div>
        <b-card no-body>
            <b-tabs pills card vertical>
                <b-tab title="Todos" active><b-card-text>

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
    data() {
      return {
        perPage: 8,
        currentPeoplePage: 1,
        pessoas: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ],
        seriePaginaAtual: 1,
        series: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ],
      }
    },
    computed: {
      totalPessoas() {
        return this.pessoas.length
      },
      totalSeries() {
          return this.series.length
      }
    }
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