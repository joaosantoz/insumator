import { find as linkifyFind } from "linkifyjs";
import { mapGetters, mapActions } from "vuex";
import ToggleButton from "../ToggleButton/ToggleButton.vue";
import roteiro from "../../assets/roteiro";

export default {
  components: { ToggleButton },
  data() {
    return {
      allLinksList: null,
      iconFinderLinks: [],
      roteiroTeste: roteiro
    };
  },

  computed: {
    ...mapGetters(["regexVersion", "rectState", "getLinks", "getIds"])
  },

  methods: {
    ...mapActions(["setAllLinksInfo", "setOldIdsInfo"]),

    insumatorTasks() {
      this.filterAllLinks();
      this.filterIconfinderLinks();
      this.rectState ? this.filterOldIds() : this.filterNewIds();
    },

    filterAllLinks() {
      this.allLinksList = linkifyFind(this.roteiroTeste);
    },

    filterIconfinderLinks() {
      this.iconFinderLinks = [];
      this.allLinksList.forEach(element => {
        let url = new URL(element.href);
        let lastPath = url.pathname.split("/")[3];

        if (url.protocol !== "https:") url.protocol = "https";
        if (lastPath !== undefined) lastPath = undefined;
        if (url.origin === "https://www.iconfinder.com") this.iconFinderLinks.push(url);

        url.pathname =
          url.pathname.split("/")[1] + "/" + url.pathname.split("/")[2] + (lastPath = "");
        url.pathname = url.pathname + "/download/svg/512";

        this.setAllLinksInfo(this.iconFinderLinks);
      });
    },

    filterOldIds() {
      let oldIdsList = this.roteiroTeste.match(this.regexVersion);
      this.setOldIdsInfo(oldIdsList);
    },

    filterNewIds() {}
  }
};
