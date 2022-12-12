<template>
  <div class="tw-position-sticky tw-top-0">
    <div class="tw-flex tw-items-center tw-px-12 tw-py-2 tw-justify-between tw-w-full tw-bg-white">
      <!--      Manglam Logo-->
      <img class="tw-h-full tw-h-12 tw-w-12" src="../assets/img/logo.png" alt="Manglam-logo">
      <div class="tw-inline-flex tw-items-center tw-gap-6">
        <!--  Choose language button      -->
        <div class="tw-hidden md:tw-inline-flex tw-items-center tw-gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="tw-w-6 tw-h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
          </svg>

          <button
            class="tw-text-black tw-uppercase tw-bg-white hover:tw-bg-gray-200 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-font-bold tw-rounded-lg tw-text-md tw-px-2 tw-py-2 tw-text-center tw-inline-flex tw-items-center"
            type="button">
            français
            <svg class="tw-ml-2 tw-w-4 tw-h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <!--Show sidebar button-->
        <button>
          <img class="tw-h-7 tw-w-7" src="../assets/svg/menu.svg" alt="Menu-icon">
        </button>
      </div>
    </div>


    <div class="tw-bg-blue-800 tw-py-4 tw-px-12 tw-flex tw-justify-between">
      <ul class="tw-flex tw-items-center tw-gap-6 tw-px-0">
        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/')"
               class="tw-flex tw-items-center tw-gap-2 hover:tw-cursor-pointer">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/airplane.svg">
            <span class="tw-whitespace-nowrap hover:tw-cursor-pointer">Reservation de tickets</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/hotel')" class="tw-flex tw-items-center tw-gap-2 hover:tw-cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
            </svg>
            <span class="tw-whitespace-nowrap">Hébergements</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/car-location')" class="tw-flex tw-items-center tw-gap-2 hover:tw-cursor-pointer">
            <img class="tw-h-4 tw-w-4 tw-text-white" src="../assets/svg/car.svg">
            <span class="tw-whitespace-nowrap">Location de voitures</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold">
          <div @click="$router.push('/tourisme')" class="tw-flex tw-items-center tw-gap-2 hover:tw-cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="tw-w-4 tw-h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
            </svg>
            <span class="tw-whitespace-nowrap">Tourisme</span>
          </div>
        </li>
        <li class="tw-text-white tw-font-semifont-bold">

          <div @click="$router.push('/visa-assurance')" class="tw-flex tw-items-center tw-gap-2 hover:tw-cursor-pointer">
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
          <NuxtLink to="/about" class="hover:tw-opacity-75 tw-text-white">A propos</NuxtLink>
        </li>

        <li class="tw-text-white tw-font-semifont-bold">
            <NuxtLink to="/contact" class="hover:tw-opacity-75 tw-text-white">Nous contacter</NuxtLink>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
