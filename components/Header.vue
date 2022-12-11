<template>
  <div>
    <div class="tw-mx-auto tw-px-4 tw-pt-2 lg:tw-px-0 tw-bg-blue-800">
      <div class="tw-container tw-flex tw-items-center tw-justify-between tw-w-full">
        <!--      Manglam Logo-->
        <img class="tw-h-full tw-h-16 tw-w-44 tw-bg-white" src="../assets/img/logo.png" alt="Manglam-logo">
        <ul class="tw-flex tw-items-center tw-justify-between tw-overflow-x-auto tw-gap-4 md:tw-gap-8 lg:tw-gap-12">
          <li class="tw-text-white tw-font-bold tw-text-sm md:tw-text-lg tw-uppercase">
            <button @click="$router.push('/')"
                    class="tw-inline-flex tw-w-full tw-items-center tw-gap-3 tw-py-3 tw-px-4 tw-rounded-lg tw-border tw-border-white">
              <img class="tw-h-6 tw-w-6 tw-text-white" src="../assets/svg/airplane.svg">
              <h1 class="tw-whitespace-nowrap">Reservation de tickets</h1>
            </button>
          </li>
          <li
            class="tw-text-white tw-font-bold tw-text-sm md:tw-text-lg tw-uppercase">
            <button @click="$router.push('/hotel')"
                    class="tw-inline-flex tw-items-center tw-py-3 tw-px-4 tw-rounded-lg tw-border tw-border-white tw-gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-6 tw-h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
              </svg>
              <h1 class="tw-whitespace-nowrap">Hébergements</h1>
            </button>
          </li>
          <li
            class="tw-text-white tw-font-bold tw-text-sm md:tw-text-lg tw-uppercase">
            <button @click="$router.push('/car-location')"
                    class="tw-inline-flex tw-items-center tw-gap-3 tw-py-3 tw-px-4 tw-rounded-lg tw-border tw-border-white">
              <img class="tw-h-6 tw-w-6 tw-text-white" src="../assets/svg/car.svg">
              <h1 class="tw-whitespace-nowrap">Location de voitures</h1>
            </button>
          </li>
          <li
            class="tw-text-white tw-font-bold tw-text-sm md:tw-text-lg tw-uppercase">
            <button @click="$router.push('/tourisme')"
                    class="tw-inline-flex tw-items-center tw-gap-3 tw-py-3 tw-px-6 tw-rounded-lg tw-border tw-border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-6 tw-h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
              </svg>
              <h1 class="tw-whitespace-nowrap">Tourisme</h1>
            </button>
          </li>

          <li
            class="tw-text-white tw-font-bold tw-text-sm md:tw-text-lg tw-uppercase">
            <button @click="$router.push('/visa-assurance')"
                    class="tw-inline-flex tw-items-center tw-gap-3 tw-py-3 tw-px-6 tw-rounded-lg tw-border tw-border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-6 tw-h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
              </svg>
              <h1 class="tw-whitespace-nowrap">Visa & Assurance</h1>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="tw-hidden tw-items-center tw-justify-center tw-bg-gray-500 tw-bg-opacity-80 tw-mt-2 tw-py-4 tw-px-4 md:tw-px-0">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
