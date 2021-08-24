const actions = {
  setNewIdsInfo(context, newIdsList) {
    let shutterList = [];
    let gettyList = [];

    if (!newIdsList) return;

    newIdsList.map(element => {
      if (element.charAt(0) === ("S" || "s")) {
        let shutterFiltered = element.replace( /^\D+/g, '')
        shutterList.push(shutterFiltered)
      } else if (element.charAt(0) === ("G" || "g")){
        let gettyFiltered = element.replace( /^\D+/g, '')
        gettyList.push(gettyFiltered);
      }
    })
    context.commit("setShutterInfo", shutterList);
    context.commit("setGettyInfo", gettyList);
  }
}

export default actions;
