<template>
  <div class="content">
    <nav>
      <img src="../assets/logo.svg" id="logo" alt="">
      <p class="link-how-works">Como funciona?</p>
    </nav>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HomeContainer/Home.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
