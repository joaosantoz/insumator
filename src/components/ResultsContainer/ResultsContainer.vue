<script src="./index.js"></script>

<template>
  <div :class="['results', getAllItemsCount ? 'is-open' : '']">
    <div class="feedback-box">
      <h2>INCRÍVEL!!!</h2>
      <h2><strong><span class="insum-total"></span></strong> insumos encontrados.</h2>
      <h3>Normalmente você levaria <strong><span class="minutes-calc"></span></strong> minutos para fazer essa tarefa.</h3>
      <h3>Com o Insumator você termina em até dois minutos.</h3>
      <h3><strong><span class="percent-calc"></span></strong> mais rápido que antes!</h3>
    </div>

    <div class="container-boxes">
      <div v-for="(box, index) in boxes" :key="index">
        <ResultBox :name="box" :type="index"/>
      </div>
    </div>
  </div>
</template>
