import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rectIsChecked: false,
    regex: false,
    isFiltered: false,
    allLinksInfo: {
      list: null,
      count: 0
    },
    allIdsInfo: {
      oldIds: {
        list: null,
        count: 0
      },
      gettyIds: {
        list: null,
        count: 0
      },
      shutterIds: {
        list: null,
        count: 0
      }
    }
  },
  mutations,
  getters,
  actions
});
