import {mapGetters} from "vuex";

export default {
  data() {
    return {
      copyText: '',
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    }
  },
  computed: {
    ...mapGetters(["getLinks", "getIds", "rectState"]),
    itemsCount() {
      return {
        0: this.getLinks.count,
        1: this.getIds.gettyIds.count,
        2: this.getIds.shutterIds.count,
        3: this.getIds.oldIds.count,
      }[this.type]
    },
    resultsList() {
      return{
        0: this.getLinks.list,
        1: this.getIds.gettyIds.list,
        2: this.getIds.shutterIds.list,
        3: this.getIds.oldIds.list,
      }[this.type]
    },
    hiddenClass() {
      return {
        0: '',
        1: this.rectState ? 'hidden' : '',
        2: this.rectState ? 'hidden' : '',
        3: !this.rectState ? 'hidden' : '',
      }[this.type]
    },
  },
  methods: {
    copyToClipboard() {
      let textToCopy = this.resultsList.join(', ')
      this.$clipboard(textToCopy)
    },
  }
}
