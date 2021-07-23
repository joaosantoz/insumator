<script>
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
      this.linkCount = result.length;
    },
  },
};

</script>

<template>
  <div class="hello">
    <div class="main-container">
      <textarea placeholder="Cole o seu roteiro aqui" id="content" cols="30" rows="10"></textarea>
      <div class="main-buttons">
        <button @click="filterAllText" class="button-filter button-primary">Extrair insumos</button>
        <div class="toggle-div">
        </div>
      </div>
      <p>{{ linkCount }}</p>
    </div>
  </div>
</template>

<style lang="scss">

</style>
