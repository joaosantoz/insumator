import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rectIsChecked: false,
    regex: false,
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
  mutations: {
    alternateRect: state => {
      state.rectIsChecked = !state.rectIsChecked;
      state.regex = !state.regex;
    },
    setLinksCount: (state, linksCount) => (state.allLinksInfo.count = linksCount),
    setLinksList: (state, linksList) => (state.allLinksInfo.list = linksList),
    setOldIdsCount: (state, oldIdsCount) => (state.allIdsInfo.oldIds.count = oldIdsCount),
    setOldIdsList: (state, oldIdsList) => (state.allIdsInfo.oldIds.count = oldIdsList)
  },
  getters: {
    rectState: state => state.rectIsChecked,
    regexVersion: state => (state.regex ? /\d\d\d\d\d\d\d\d+/gi : /(S|G)_\d\d\d\d\d\d\d+/gi),
    getLinks: state => state.allLinksInfo,
    getIds: state => state.allIdsInfo
  },
  actions: {
    setAllLinksInfo(context, linkList) {
      context.commit("setLinksList", linkList);
      context.commit("setLinksCount", linkList.length);
    },
    setOldIdsInfo(context, oldIdsList) {
      context.commit("setOldIdsList", oldIdsList);
      context.commit("setOldIdsCount", oldIdsList.length);
    }
  }
});
