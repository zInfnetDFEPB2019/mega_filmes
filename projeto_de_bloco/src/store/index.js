import Vuex from "vuex";
import Vue from "vue";
import media from "./modules/media";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    media
  }
});
