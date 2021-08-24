<script src="./index.js"></script>

<template>
  <div :class="['results', getAllItemsCount ? 'is-open' : '']">
    <CalcBox/>
    <div class="container-boxes">
      <div v-for="(box, index) in boxes" :key="index">
        <ResultBox :name="box" :type="index"/>
      </div>
    </div>
  </div>
</template>
