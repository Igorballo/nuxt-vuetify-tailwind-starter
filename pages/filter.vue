<template>
  <div class="tw-bg-gray-200 tw-p-12">
    <div class="tw-container tw-mx-auto md:tw-flex tw-items-center tw-gap-12 tw-w-full">
      <div class="tw-hidden lg:tw-block tw-w-1/3 tw-h-screen">
        <div class="tw-bg-white">
          <div class="tw-font-semibold tw-text-xl tw-py-4 tw-pl-6 tw-bg-gray-100 tw-border-b">Résumé du trajet</div>
          <div class="tw-p-6 tw-bg-white tw-flex tw-flex-col tw-gap-6">
            <div class="tw-flex tw-gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-6 tw-h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              <div class="tw-text-xl tw-font-semibold"><span
                class="tw-text-gray-700 tw-font-light">Prise en charge</span> <br>
                Lombok – Aéroport <br>
                déc 14 2022 <br>
                10:00 am
              </div>
            </div>
            <div class="tw-flex tw-gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="tw-w-6 tw-h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              <div class="tw-text-xl tw-font-semibold"><span class="tw-text-gray-700 tw-font-light">Retour</span> <br>
                France – Paris <br>
                déc 16 2022 <br>
                8:00 am
              </div>
            </div>

            <button class="tw-text-white tw-bg-blue-800 tw-font-semibold tw-rounded-lg tw-py-2 tw-px-6">Modifier
            </button>
          </div>
        </div>
      </div>
      <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-gap-8 tw-px-4">

        <div v-for="i in 2" class="tw-bg-blue-600 tw-pt-8 tw-p-2 tw-rounded-lg">
          <div class="tw-bg-white tw-px-4">
            <div class="tw-text-2xl tw-font-semibold tw-py-4 tw-border-b">Minivan 7 places</div>
            <div class="tw-py-4 tw-flex tw-gap-12">
              <div class="tw-flex tw-flex-col tw-gap-6">
                <img class="tw-h-44 tw-w-72"
                     src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                     alt="voiture">
                <div class="tw-flex tw-justify-between tw-text-2xl tw-font-semibold">
                  <div class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">7</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="tw-w-7 tw-h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                  </div>
                  <div class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">2</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="tw-w-7 tw-h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                  </div>
                  <div class="tw-inline-flex tw-justify-center tw-items-center tw-border-r-2 tw-gap-2 tw-w-1/3">
                    <span class="">7</span>

                    <img class="tw-h-7 tw-w-7" src="../assets/svg/door.svg" alt="car-door">
                  </div>

                </div>
                <div class="tw-flex tw-flex-col tw-gap-4 tw-text-xl">
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Voiture automatique</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Voiture climatisée</span>
                  </div>
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-gap-6">
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-airplane</v-icon>
                  <span>Lieu De Prise En Charge : <br> <p class="tw-font-semibold">Au Terminal</p> </span>
                </div>
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-gas-station-outline</v-icon>
                  <span>Politique En Matière De Carburant : <br> <p class="tw-font-semibold">Quart au quart</p> </span>
                </div>
                <div class="tw-inline-flex tw-gap-4 tw-items-start">
                  <v-icon>mdi-speedometer</v-icon>
                  <span>Killométrage : <br> <p class="tw-font-semibold">Illimité</p> </span>
                </div>
              </div>
              <div class="tw-gap-8 tw-flex tw-flex-col">
                <div class="tw-flex tw-flex-col tw-gap-4 tw-text-xl">
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Assurance dommage en cas de collision</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Assurance vol</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Annulation gratuite</span>
                  </div>
                  <div class="tw-inline-flex tw-gap-4">
                    <img class="tw-h-5 tw-w-5" src="../assets/svg/right.svg">
                    <span>Modifications gratuites</span>
                  </div>
                </div>

                <div class="tw-flex tw-flex-col tw-gap-4">
                  <div class="tw-text-lg"><span class="tw-text-4xl tw-font-bold">6500 XOF/Jour</span> <br> Pour 8 jours</div>
                  <button class="tw-py-4 tw-px-12 tw-text-white tw-text-2xl tw-font-semibold tw-rounded-lg tw-bg-blue-800">Reservez</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'master',
}
</script>

<style scoped>

</style>
