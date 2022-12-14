<template>
  <div>
    <!-- Our partners section   -->
    <div class="tw-mx-4 tw-px-2 tw-my-8">

      <div class="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-gap-8">

        <carousel :per-page="3" :mouse-drag="false" :autoplay="true" :spacePadding="25" :speed="2000" :autoplayDirection="backward">
          <slide>
          <img class="tw-h-10 md:tw-h-16 lg:tw-mt-8" src="../assets/img/IATA.png" alt="IATA">
          </slide>

         <slide>
         <img class="tw-h-10 md:tw-h-20 lg:tw-mt-4"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">
         </slide>
        <slide>
        <img class="tw-h-10 lg:tw-mt-4 md:tw-h-24"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">
        </slide>
        <slide>
        <img class="tw-h-12 md:tw-h-32"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">
        </slide>
        <slide>
        <img class="lg:tw-mt-12 tw-h-8 md:tw-h-8"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/2560px-Air_France_Logo.svg.png"
             alt="air-france">
        </slide>
  </carousel>


      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>

</style>
