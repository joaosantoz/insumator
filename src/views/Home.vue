<template>
    <div class="home">
      <HomeContainer/>
      <div class="footer">
        <p>Uma ferramenta DOT, feita por DIs, DMs e Front <span>❤</span></p>
      </div>
    </div>
</template>

<script>
import HomeContainer from '../components/HomeContainer/HomeContainer.vue';

export default {
  name: 'Home',
  components: {
    HomeContainer,
  },
};
</script>
