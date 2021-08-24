import { find as linkifyFind } from "linkifyjs";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ToggleButton from "../ToggleButton/ToggleButton.vue";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

export default {
  components: { ToggleButton, ResultsContainer },
  data() {
    return {
      allLinksList: null,
      iconFinderLinks: [],
      inputRoteiro: '',
    };
  },

  computed: {
    ...mapGetters([
      "regexVersion",
      "rectState",
      "getLinks",
      "getIds",
      "getAllItemsCount",
      "getTimeSaved"
    ])
  },

  methods: {
    ...mapMutations([
       "setAllLinksInfo",
       "setOldIdsInfo",
       "setFiltered"
    ]),

    ...mapActions(["setNewIdsInfo"]),

    insumatorTasks() {
      this.filterAllLinks();
      this.filterIconfinderLinks();
      this.rectState ? this.filterOldIds() : this.filterNewIds();
      this.setFiltered();
      },

    filterAllLinks() {
      this.allLinksList = linkifyFind(this.inputRoteiro);
    },

    filterIconfinderLinks() {
      this.iconFinderLinks = [];
      this.allLinksList.map(element => {
        let url = new URL(element.href);

        if (url.protocol !== "https:") url.protocol = "https";
        if (url.origin === "https://www.iconfinder.com") this.iconFinderLinks.push(url);

        url.pathname = url.pathname.split("/")[1] + "/" + url.pathname.split("/")[2];
        url.pathname = url.pathname + "/download/svg/512";

        this.setAllLinksInfo(this.iconFinderLinks);
      });
    },

    filterOldIds() {
      let oldIdsList = this.inputRoteiro.match(this.regexVersion);
      this.setOldIdsInfo(oldIdsList);
    },

    filterNewIds() {
      let allNewIdsList = this.inputRoteiro.match(this.regexVersion);
      this.setNewIdsInfo(allNewIdsList)
    }
  },
};
