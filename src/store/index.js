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
    setAllLinksInfo(state, linkList) {
      state.allLinksInfo.list = linkList;
      state.allLinksInfo.count = linkList.length;
    },
    setOldIdsInfo(state, oldIdsList) {
      state.allIdsInfo.oldIds.list = oldIdsList;
      state.allIdsInfo.oldIds.count = oldIdsList.length;
    },
    setShutterInfo(state, shutterList) {
      state.allIdsInfo.shutterIds.list = shutterList;
      state.allIdsInfo.shutterIds.count = shutterList.length;
    },
    setGettyInfo(state, gettyList) {
      state.allIdsInfo.gettyIds.list = gettyList;
      state.allIdsInfo.gettyIds.count = gettyList.length;
    },

  },

  getters: {
    rectState: state => state.rectIsChecked,
    regexVersion: state => (state.regex ? /\d\d\d\d\d\d\d\d+/gi : /(S|G)_\d\d\d\d\d\d\d+/gi),
    getLinks: state => state.allLinksInfo,
    getIds: state => state.allIdsInfo,
    getAllItemsCount(state) {
      if (state.regex) {
        return state.allIdsInfo.oldIds.count + state.allLinksInfo.count;
      } else {
        return (
          state.allIdsInfo.gettyIds.count +
          state.allIdsInfo.shutterIds.count +
          state.allLinksInfo.count
        )
      }
    },
    getTimeSaved(state) {
      if (state.regex) {
        return Math.ceil(((state.allIdsInfo.oldIds.count + state.allLinksInfo.count) * 27) / 60)
      } else {
        let allItemsCount = state.allIdsInfo.gettyIds.count +
                            state.allIdsInfo.shutterIds.count +
                            state.allLinksInfo.count;
        return Math.ceil((allItemsCount * 27) / 60);
      }
    }
  },

  actions: {
    setNewIdsInfo(context, newIdsList) {
      let shutterList = [];
      let gettyList = [];

      newIdsList.map(element => {
        if (element.charAt(0) === ("S" || "s")) {
          shutterList.push(element);
        } else if (element.charAt(0) === ("G" || "g")){
          gettyList.push(element);
        }
      })

      context.commit("setShutterInfo", shutterList)
      context.commit("setGettyInfo", gettyList)
    }

  }
});
