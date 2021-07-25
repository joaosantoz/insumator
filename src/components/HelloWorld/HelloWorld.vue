<script src="./index.js"></script>

<template>
  <div class="hello">
    <div class="main-container">
      <textarea placeholder="Cole o seu roteiro aqui" id="content" cols="30" rows="10"></textarea>
      <div class="main-buttons">
        <button @click="filterAllLinks" class="button-filter button-primary">Extrair insumos</button>
        <div class="toggle-div">
        </div>
      </div>
      <p>{{ linkCount }}</p>
      <ToggleButton/>
    </div>
  </div>
</template>

<style lang="scss">

</style>
