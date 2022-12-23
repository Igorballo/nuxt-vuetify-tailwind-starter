<template>
  <div>
    <!-- Our partners section   -->
    <div class="tw-bg-blue-800 tw--mt-1 tw-p-4 tw-text-white">
        <vue-marquee :showProgress="false">
          <vue-marquee-slide v-for="i in 4" :key="i">
            <span style="padding-left: 55px; padding-right: 55px"> Bienvenue à Manglam, bon voyage.</span>
          </vue-marquee-slide>
        </vue-marquee>
      </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>

</style>
