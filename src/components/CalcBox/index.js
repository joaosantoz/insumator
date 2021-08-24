import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllItemsCount", "getTimeSaved"])
  }
}
