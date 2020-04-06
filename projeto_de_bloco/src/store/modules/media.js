import axios from "axios";

const state = {
  resultados: [],
  excluidos: [],
  editados: []
};

function removerExcluidos(arr) {
  var novoArr = []
  arr.forEach(function(media){
    if(!state.excluidos.includes(media.id)){
      novoArr.push(media)
    }
  })
  return novoArr
}

function substituirEditados(arr) {
  arr.forEach(function(media){
    const index = state.editados.findIndex(t => t.id === media.id)
    if (index !== -1) {
      media.name = state.editados[index].name
      media.title = state.editados[index].title
      media.original_name = state.editados[index].original_name      
      } 
  })  
}

const getters = {
  todosResultados: state => state.resultados,
  resultadoPorId: (state) => (id) => (state.resultados.filter(t => t.id == id))[0],
};

const actions = {
  buscarResultados({ commit }, obj_busca) {
      axios.get(
        "https://api.themoviedb.org/3/search/multi?api_key=3d00ac75f95140a9323a875d8b2f2503&language=pt-BR&page=1&&query=" + obj_busca.txtBusca 
      ).then((response) => {
        console.log(response.data.results)
        var resultado = removerExcluidos(response.data.results)
        substituirEditados(resultado)
        commit('setResultados', resultado);
    });
  },

  buscarFilmes({ commit }, obj_busca) {
    axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=3d00ac75f95140a9323a875d8b2f2503&language=pt-BR&page=1&&query=" + obj_busca.txtBusca 
    ).then((response) => {
      console.log(response.data.results)
      commit('setResultados', response.data.results);
  });
},

buscarSeries({ commit }, obj_busca) {
  axios.get(
    "https://api.themoviedb.org/3/search/tv?api_key=3d00ac75f95140a9323a875d8b2f2503&language=pt-BR&page=1&&query=" + obj_busca.txtBusca 
  ).then((response) => {
    console.log(response.data.results)
    commit('setResultados', response.data.results);
});
},

buscarPessoas({ commit }, obj_busca) {
  axios.get(
    "https://api.themoviedb.org/3/search/person?api_key=3d00ac75f95140a9323a875d8b2f2503&language=pt-BR&page=1&&query=" + obj_busca.txtBusca 
  ).then((response) => {
    console.log(response.data.results)
    commit('setResultados', response.data.results);
});
},
excluirMedia({ commit }, id) {
  commit("excluirMedia", id);
},
editarMedia({ commit }, obj) {
  console.log('Objeto Editado ' + obj.name)
  commit("editarMedia", obj);
},
limparState({ commit }) {
  commit("limparState");
}
};

const mutations = {
  setResultados: (state, resultados) => state.resultados = resultados,
  setResultadoDetalhe: (state, resultado) => state.resultadoDetalhe = resultado,
  excluirMedia: (state, id) => state.excluidos.push(id),
  limparState: (state) => state.resultados = [],
  editarMedia: (state, obj) => state.editados.push(obj)
};

export default {
  state,
  actions,
  getters,
  mutations
};
