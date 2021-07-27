<script src="./index.js"></script>

<template>
  <div class="main-frame">
    <div class="main-container">
      <textarea placeholder="Cole o seu roteiro aqui" id="content" cols="30" rows="10"></textarea>
      <div class="main-buttons">
          <button @click="insumatorTasks" class="button-filter button-primary">Extrair insumos</button>
          <ToggleButton/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-buttons {
  margin-top: initial !important;
}
</style>
