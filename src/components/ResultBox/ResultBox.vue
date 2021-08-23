<script src="./index.js"></script>

<template>
  <div :class="['box-results', `box-${type}`]">
    <div class="box-header">
      <div class="number-count">
        <h3 class="items-count">{{ itemsCount }}</h3>
      </div>
      <div class="box-header-text">
        <h4>{{ name }}</h4>
        <p>{{ (this.type === 0 ? 'Links' : 'IDs') + ' identificados' }}</p>
      </div>
    </div>
    <ol class="list">
      <li v-for="(item, index) in resultsList" :key="index">{{ item }}</li>
    </ol>
    <button class="button-primary">{{ 'Copiar ' + (this.type === 0 ? 'Links' : 'IDs') }}</button>
  </div>
</template>
