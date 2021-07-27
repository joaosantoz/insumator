<script src="./index.js"></script>

<template>
  <div class="toggle-div">
    <h2>Modelo novo</h2>
    <svg @click="toggleButtonState" id="togglebutton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.604 92.604" height="100"
         width="100">
      <g transform="translate(0 -204.396)">
        <rect ref="rect" :class="{checked: rectState}" ry="15.875" y="234.823" x="12.662" height="31.75" width="67.28" fill="#DCDCE5"/>
        <ellipse ref="ellipse" rx="9.028" ry="9.028" cy="250.865" cx="28.911" fill="none" stroke="#fff"
                 stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
    <h2>Modelo antigo</h2>
  </div>
</template>

<style lang="scss">
  .toggle svg g {
    cursor: pointer;
  }
</style>
