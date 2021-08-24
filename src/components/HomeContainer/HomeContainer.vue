<script src="./index.js"></script>

<template>
  <div class="main-container">
      <textarea v-model="inputRoteiro" placeholder="Cole o seu roteiro aqui" id="content" cols="30" rows="10"></textarea>
      <div class="main-buttons">
          <button @click="insumatorTasks" class="button-filter button-primary">Extrair insumos</button>
          <ToggleButton/>
      </div>
      <ResultsContainer/>
    </div>
</template>

<style lang="scss">
.main-buttons {
  margin-top: initial !important;
}
</style>
