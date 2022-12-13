<template>
  <div>
    <!-- Our partners section   -->
    <div class="tw-mx-8 tw-px-3 tw-my-8">

      <div class="tw-flex tw-flex-row tw-justify-evenly tw-gap-8">

        <carousel :per-page="4" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="true" :spacePadding="25" :speed="2000" :autoplayDirection="backward">
          <slide>
          <img class="tw-mt-2 tw-h-20 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">
          </slide>
        
         <slide>
         <img class="tw-mt-2 tw-h-20 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">
         </slide>
        <slide>
        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">
        </slide>
        <slide>    
        <img class="tw-mt-2 tw-h-28 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">
        </slide>
        <slide>
        <img class="tw-mt-2 tw-h-12 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Airfrance_Logo.svg/2560px-Airfrance_Logo.svg.png"
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
