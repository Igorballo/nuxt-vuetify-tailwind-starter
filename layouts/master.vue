<template>
  <v-app>
    <div class="tw-flex tw-items-center tw-px-4 lg:tw-px-12 tw-py-2 tw-justify-between tw-w-full tw-bg-white">
      <!--      Manglam Logo-->
      <img class="tw-h-full tw-h-12 tw-w-12" src="../assets/img/logo.png" alt="Manglam-logo">
      <div class="tw-inline-flex tw-items-center tw-gap-4">
        <!--  Choose language button      -->
        <button
          class="tw-text-black tw-text-sm tw-uppercase tw-bg-white hover:tw-bg-gray-200 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-font-bold tw-rounded-lg tw-text-md tw-px-2 tw-py-2 tw-text-center tw-inline-flex tw-items-center"
          type="button">
          français
          <svg class="tw-ml-2 tw-w-4 tw-h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <!--Show sidebar button-->
        <button class="tw-hidden">
          <img class="tw-h-7 tw-w-7" src="../assets/svg/menu.svg" alt="Menu-icon">
        </button>
      </div>
    </div>

    <div style="position: sticky; top: 0; z-index: 999" class="tw-bg-blue-800 tw-py-4 tw-px-12 tw-flex tw-justify-between">
      <ul class="tw-flex tw-items-center tw-gap-6 tw-px-0">
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">

          <div @click="$router.push('/')"
               class="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/airplane.svg">
            <span class="tw-whitespace-nowrap">Reservation de tickets</span>
          </div>
        </li>

        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div @click="$router.push('/hotel')" class="tw-flex tw-items-center tw-gap-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
            </svg>
            <span class="tw-whitespace-nowrap">Hébergements</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div @click="$router.push('/car-location')" class="tw-flex tw-items-center tw-gap-2">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/car.svg">
            <span class="tw-whitespace-nowrap">Location de voitures</span>
          </div>
        </li>

        <li class="tw-text-white tw-font-semifont-bold tw-cursor-pointer">
          <div @click="$router.push('/tourisme')" class="tw-flex tw-items-center tw-gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
            </svg>
            <span class="tw-whitespace-nowrap">Tourisme</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/visa-assurance')" class="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
            </svg>
            <span class="tw-whitespace-nowrap">Visa & Assurance</span>
          </div>
        </li>
      </ul>

      <ul class="tw-flex tw-text-white tw-font-semibold tw-gap-6">
      

        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/about')" class="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer">
            <span class="tw-whitespace-nowrap">A propos</span>
          </div>
        </li>

        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/contact')" class="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer">
            <span class="tw-whitespace-nowrap">Nous contacter</span>
          </div>
    </div>

    <!--Aside Bar-->
    <div class=" tw-hidden lex tw-w-full tw-h-screen tw-absolute tw-inset-0" style="z-index: 998">
      <div class="tw-hidden md:tw-block tw-w-full tw-bg-gray-900 tw-bg-opacity-60"></div>
      <div class="tw-w-full md:tw-w-[52vh] tw-bg-white"></div>
    </div>

    <nuxt/>

    <Footer/>
  </v-app>
</template>

<script>

import Header from "../components/Header";

export default {
  name: 'master',
  components: {Header}
}
</script>

<style>

</style>
