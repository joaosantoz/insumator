const getters = {
  rectState: state => state.rectIsChecked,
    regexVersion: state => (state.regex ? /\d\d\d\d\d\d\d\d+/gi : /(((s|g)_)|(s|g)|((s|g)-))\d\d\d\d\d\d\d+/gi),
    getLinks: state => state.allLinksInfo,
    getIds: state => state.allIdsInfo,
    getFiltered: state => state.isFiltered,
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
    let minutes;

    if (state.regex) {
      minutes = Math.ceil(((state.allIdsInfo.oldIds.count + state.allLinksInfo.count) * 27) / 60)
    } else {
      let allItemsCount = state.allIdsInfo.gettyIds.count +
        state.allIdsInfo.shutterIds.count +
        state.allLinksInfo.count;
      minutes =  Math.ceil((allItemsCount * 27) / 60);
    }

    return {
      timeSaved: minutes,
      timesFaster: Math.ceil(minutes / 2),
    }
  },
}

export default getters;
