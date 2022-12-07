<template>
  <div>
    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[60vh]"
      style="background-image: url(https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80)">
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pb-8">
            <form
              class="tw-bg-white tw-w-3/5 tw-rounded-lg tw-h-full tw-my-20 tw-p-3 md:tw-p-6 lg:tw-p-12 tw-flex tw-flex-col tw-pb-8">
              <span class="tw-inline-flex tw-items-center">
                <input type="radio" class="tw-w-5 tw-h-5 checked:tw-bg-red-600" checked id="aller_simple" name="voyage">
                <label for="aller_simple" class="tw-ml-2">Lieu de retour différent</label>
              </span>
              <div class="tw-flex tw-flex-col tw-gap-6 tw-mt-6 tw-w-full">
                <div class="tw-inline-flex tw-w-full tw-gap-6 tw-items-center">
                  <div
                    class="tw-border tw-border-gray-400 tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                    <span class="tw-text-gray-600 tw-mb-1 ">Lieu de prise en charge :</span>
                    <input
                      class="tw-text-lg tw-placeholder-gray-400 tw-font-semibold tw-uppercase tw-outline-none tw-h-10 tw-bg-gray-50"
                      placeholder="D'ou partez-vous ?">
                  </div>

                  <div
                    class="tw-border tw-border-gray-400 tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                    <span class="tw-text-gray-600 tw-mb-1 ">Lieu de restitution :</span>
                    <input
                      class="tw-text-lg tw-placeholder-gray-400 tw-font-semibold tw-uppercase tw-outline-none tw-h-10 tw-bg-gray-50"
                      placeholder="Ou allez-vous ?">
                  </div>
                </div>

                <div class="tw-flex tw-items-center tw-w-full tw-gap-6">
                  <div
                    class="tw-border tw-border-gray-400 tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                    <span class="tw-text-gray-600 tw-mb-1 ">Date de début :</span>
                    <input
                      class="tw-text-lg tw-placeholder-gray-400 tw-font-semibold tw-uppercase tw-outline-none tw-h-10 tw-bg-gray-50"
                      placeholder="Ex: 05/12/2022">
                  </div>

                  <div
                    class="tw-border tw-border-gray-400 tw-text-lg tw-rounded-lg tw-w-full tw-flex tw-flex-col tw-p-3">
                    <span class="tw-text-gray-600 tw-mb-1 ">Date de fin :</span>
                    <input
                      class="tw-text-lg tw-placeholder-gray-400 tw-font-semibold tw-uppercase tw-outline-none tw-h-10 tw-bg-gray-50"
                      placeholder="Ex: 15/01/2023">
                  </div>
                </div>
              </div>

              <div class="tw-flex tw-mt-6">
                <button
                  class="tw-rounded tw-px-6 tw-py-2 tw-bg-red-600 tw-text-white tw-text-lg tw-uppercase tw-font-semibold">Faire
                  une reservation de voiture</button>
              </div>
            </form>
          </div>
    </div>

    

    <!-- Our partners section   -->
    <div class="tw-mx-auto tw-px-4 tw-my-20">
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-evenly tw-gap-8">

        <img class="tw-mt-2 tw-h-24 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Airfrance_Logo.svg/2560px-Airfrance_Logo.svg.png"
             alt="air-france">
      </div>
    </div>

    <section class="tw-pt-10 tw-pb-4 lg:tw-px-8 tw-px-4 tw-bg-white tw-flex-col tw-gap-4 tw-shadow-lg">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-4xl tw-inline-flex tw-items-center tw-gap-4 tw-font-bold tw-uppercase tw-ml-20 tw-font-extrabold tw-font-extrabold tw-text-red-700 tw-italic">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="tw-w-25 tw-h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
        Meilleures Sites Touristiques
      </h1>

      <div class="tw-px-6 lg:tw-px-20">
        <div class="tw-flex tw-flex-col tw-space-y-4 tw-mb-6">

          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1581953636842-74649fd3e004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="">

              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Mauritius
                Islande</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Maldives
                Islande</span>
            </div>
          </div>

          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Singapore</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Sydney</span>
            </div>
          </div>
          <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Singapore</span>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 lg:tw-h-96 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg"
                src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="">
              <span
                class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-rounded tw-bg-blue-600 tw-px-6 tw-py-3">Sydney</span>
            </div>
          </div>
        </div>


      </div>


    </section>

    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[60vh]"
      style="background-image: url(https://images.unsplash.com/photo-1546114609-6e384f564132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tourisme',
    layout: 'master',

    data() {
      return {
        items: [{
            src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1532909825484-d59b5ced9ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80',
          },
        ],
      }
    }
  }

</script>

<style scoped>

</style>
