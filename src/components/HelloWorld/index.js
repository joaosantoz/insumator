import ToggleButton from '../ToggleButton/ToggleButton.vue';
import roteiro from "../../assets/roteiro"

export default {
  components: { ToggleButton },
  data() {
    return {
      linkCount: 0,
    }
  },
  methods: {
    filterAllText() {
      const filter = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/
      const result = roteiro.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
      )
      console.log(result)
    },
  },
};
