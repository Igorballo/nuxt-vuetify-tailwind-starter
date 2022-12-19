<template>
  <div>
    <!-- Our partners section   -->
    <div class="tw-mx-4 tw-px-2 tw-my-8">

      <div class="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-gap-8">

        <carousel :per-page="4" :mouse-drag="false" :autoplay="true" :spacePadding="25" :speed="2000"
                  :autoplayDirection="backward">
          <slide>
            <img class="tw-h-10 md:tw-h-16 lg:tw-mt-8" src="../assets/img/IATA.png" alt="IATA">
          </slide>

          <slide>
            <img class="tw-h-14 md:tw-h-20 lg:tw-mt-4"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
                 alt="air-france">
          </slide>
          <slide>
            <img class="tw-h-12 lg:tw-mt-6 md:tw-h-20"
                 src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
                 alt="air-france">
          </slide>
          <slide>
            <img class="tw-h-12 md:tw-h-32"
                 src="https://wallpapercave.com/wp/wp11304533.png"
                 alt="air-france">
          </slide>

          <slide>
            <img class="lg:tw-mt-14 tw-h-8 md:tw-h-10"
                 src="https://upload.wikimedia.org/wikipedia/commons/5/57/Air_C%C3%B4te_d%27Ivoire_logo.png"
                 alt="air-cote-d'ivoire"
            >
          </slide>
          <slide>
            <img class="lg:tw-mt-8 tw-h-8 md:tw-h-16"
                 src="https://upload.wikimedia.org/wikipedia/en/1/12/ASKY_Airlines_logo.png"
                 alt="Asky"
            >
          </slide>
          <slide>
            <img class="lg:tw-mt-4 tw-h-8 md:tw-h-20"
                 src="https://logos-world.net/wp-content/uploads/2021/05/Air-Canada-Logo.png"
                 alt="air-canada"
            >
          </slide>
          <slide>
            <img class="lg:tw-mt-8 tw-h-8 md:tw-h-20"
                 src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-2006-present.jpg"
                 alt="air-qatar"
            >
          </slide>
          <slide>
            <img class="lg:tw-mt-6 tw-h-8 md:tw-h-20"
                 src="https://cdn.worldvectorlogo.com/logos/singapore-airlines.svg"
                 alt="air-singapore"
            >
          </slide>
          <slide>
            <img class="lg:tw-mt-8 tw-h-8 md:tw-h-20"
                 src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Air_Namibia_logo.svg/800px-Air_Namibia_logo.svg.png"
                 alt="air-namibie"
            >
          </slide>
        </carousel>


      </div>
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
