<template>
  <div>


    <section class="tw-mt-10 tw-py-8 tw-px-8 tw-mx-8 tw-my-8 lg:px-desktop lg:mx-desktop bg-[#fff] tw-rounded-2xl">
      <div class="tw-flex tw-flex-col tw-bg-gray-100 md:tw-p-12 lg:tw-px-12 xl:tw-px-20 lg:tw-pb-20 tw-mt-16">
        <div class="tw-top-12 tw-w-full tw-flex tw-justify-center">
          <h2
            class="tw-py-6 tw-duration-500 md:tw-px-16 tw-px-8 md:tw-px-12 lg:tw-px-32 tw-text-center tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-font-bold tw-uppercase tw-text-white tw-text-2xl lg:tw-text-4xl">
            Notre Mission</h2>
        </div>

        <div class="tw-space-y-6 tw-mt-8 md:tw-space-y-0 md:tw-flex tw-items-center lg:tw-space-x-12 md:tw-space-x-8">
        <span class="tw-p-4 tw-h-full md:tw-w-1/2">
          <img class="tw-h-full tw-w-full md:tw-h-1/2 tw-shadow-lg" src="../assets/img/image.png">
        </span>
          <div class="tw-h-full md:tw-w-1/2 tw-my-4 tw-bg-white tw-rounded-md tw-shadow-lg tw-px-8 tw-py-8 lg:tw-px-12 xl:tw-px-20">
            <p class="tw-text-lg tw-text-black tw-font-medium tw-text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae natus, mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse quis minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae natus, mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse quis minus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae natus, mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse quis minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, alias, architecto est repudiandae natus, mollitia itaque optio nisi debitis impedit magnam deleniti consequatur libero laudantium id amet esse quis minus.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="tw-mt-10 tw-py-8 tw-shadow-lg tw-px-8 tw-mx-8 tw-my-8 lg:px-desktop lg:mx-desktop bg-[#fff] tw-rounded-2xl">

      <agile class="tw-gap-8" :options="myOptions" :slides-to-show="2" autoplay>
        <div class="slide tw-gap-8">
          <h3><img src="../assets/img/image.png" alt=""></h3>
        </div>

        <div class="slide">
          <h3><img src="../assets/img/image.png" alt=""></h3>
        </div>

        <div class="slide">
          <h3><img src="../assets/img/image.png" alt=""></h3>
        </div>


      </agile>
    </section>




    <section class="tw-p-12 tw-justify-center container tw-bg-white tw-rounded-2xl">

      <div class="tw-justify-center">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/_cBEYuIpU4M" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

      </div>
    </section>



    <section class="tw-mt-10 tw-py-8 tw-px-8 tw-mx-8 tw-my-8 tw-bg-gray-400 tw-rounded-2xl tw-shadow-lg">

      <agile class="tw-gap-8" :options="myOptions" :slides-to-show="4" autoplay>
        <div class="slide tw-gap-8">
          <h3><img src="../assets/img/heart.png" alt=""></h3>
        </div>

        <div class="slide">
          <h3><img src="../assets/img/heart.png" alt=""></h3>
        </div>

        <div class="slide">
          <h3><img src="../assets/img/heart.png" alt=""></h3>
        </div>


      </agile>
    </section>



  </div>
</template>

<script>
// import { VueAgile } from 'vue-agile'

export default {
  // components: {
  //   agile: VueAgile
  // },
  data()
  {
    return {
      myOptions: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          },

          {

            settings: {
              navButtons: true,
              dots: true,
              infinite: false
            }
          }
        ]
      }
    }
  }
}

</script>

<style scoped>
.image {
  width: 100%;
  height: 50vh;
}
</style>
