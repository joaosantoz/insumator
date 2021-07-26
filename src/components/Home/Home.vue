<script src="./index.js"></script>

<template>
  <div class="home-container">
    <div class="main-container">
      <textarea placeholder="Cole o seu roteiro aqui" id="content" cols="30" rows="10"></textarea>
      <div class="main-buttons">
        <button @click="insumatorTasks" class="button-filter button-primary">Extrair insumos</button>
        <div class="toggle-div">
        </div>
      </div>
      <p>{{ this.getAllItemsCount }}</p>
      <p>minutos: {{ this.getTimeSaved }} minutos</p>
      <ToggleButton/>
    </div>
  </div>
</template>

<style lang="scss">

</style>
