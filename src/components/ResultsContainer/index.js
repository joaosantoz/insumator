import {mapGetters} from "vuex";
import ResultBox from "../ResultBox/ResultBox";

export default {
  data() {
    return {
      boxes: [
        'Iconfinder',
        'Getty Images',
        'Shutterstock',
        'Todos os IDs'
      ]
    }
  },
  components: {
    ResultBox
  },
  computed: {
    ...mapGetters(["getAllItemsCount"]),

  },
}
