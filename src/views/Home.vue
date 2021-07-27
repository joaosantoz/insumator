<template>
  <div class="content">
    <nav>
      <img id="logo" src="../assets/logo.svg" alt="">
      <p class="link-how-works">Como funciona?</p>
    </nav>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/Home/Home.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
