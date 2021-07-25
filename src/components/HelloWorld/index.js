import ToggleButton from '../ToggleButton/ToggleButton.vue';
import roteiro from "../../assets/roteiro"
import { find as linkifyFind } from 'linkifyjs'

export default {
  components: { ToggleButton },
  data() {
    return {
      linkCount: 0,
      resultsList: null,
      iconFinderLinks: [],
    }
  },
  methods: {
    filterAllLinks() {
      this.resultsList = linkifyFind(roteiro);
      this.filterIconfinderLinks()
    },

    filterIconfinderLinks() {
      this.resultsList.forEach((element) => {
        let url = new URL(element.href);
        if (url.protocol !== "https:") url.protocol = "https";

        let lastPath = url.pathname.split("/")[3];
        if (lastPath !== undefined) lastPath = undefined;

        url.pathname =
          url.pathname.split("/")[1] +
          "/" +
          url.pathname.split("/")[2] +
          (lastPath = "");
        url.pathname = url.pathname + "/download/svg/512";

        if (url.origin === "https://www.iconfinder.com") this.iconFinderLinks.push(url);

        this.linkCount = this.iconFinderLinks.length;
      });
    }
  },
};
