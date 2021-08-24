<script src="./index.js"></script>

<template>
  <div class="feedback-box">
    <h2>INCRÍVEL!!!</h2>
    <h2><span class="insum-total">{{ getAllItemsCount }}</span> insumos encontrados.</h2>
    <h3>Normalmente você levaria <span class="minutes-calc">{{ getTimeSaved.timeSaved }}</span> minutos para fazer essa tarefa.</h3>
    <h3>Com o Insumator você termina em até dois minutos.</h3>
    <h3><span class="percent-calc">{{ getTimeSaved.timesFaster }} vezes</span> mais rápido que antes!</h3>
  </div>
</template>
