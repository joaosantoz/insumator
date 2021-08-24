import {mapGetters} from "vuex";
import CalcBox from "../CalcBox/CalcBox";
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
    ResultBox,
    CalcBox
  },
  computed: {
    ...mapGetters(["getAllItemsCount"]),
  },
}
