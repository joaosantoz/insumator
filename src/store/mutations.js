const mutations = {
  alternateRect(state) {
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
  setFiltered(state) {
    state.isFiltered = true;
  }
}

export default mutations;
