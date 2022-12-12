<template>
  <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 2xl:tw-px-0">
    <form class="tw-bg-white tw-rounded-lg tw-h-full tw-my-20 tw-gap-4 tw-p-3 md:tw-p-6 lg:tw-p-12 tw-flex tw-flex-col">
      <div class="tw-inline-flex tw-gap-4 md:tw-gap-8 tw-text-xl tw-font-light">
        <!--            <span class="tw-inline-flex tw-items-center">-->
        <!--              <input type="radio" class="tw-w-5 tw-h-5 checked:tw-bg-red-600" value="true"  v-model="reservationForm.aller_simple" checked id="aller_simple" name="voyage">-->
        <!--              <label for="aller_simple" class="tw-ml-2">Aller Simple</label>-->
        <!--            </span>-->
        <!--            <span class="tw-inline-flex tw-items-center">-->
        <!--              <input type="radio" class="tw-w-5 tw-h-5 tw-bg-red-600 tw-bg-blue-800" value="false" v-model="reservationForm.aller_simple" id="aller_retour" name="voyage">-->
        <!--              <label for="aller_retour" class="tw-ml-2">Aller-Retour</label>-->
        <!--            </span>-->
        <v-radio-group
          row
          v-model="reservationForm.aller_simple"
        >
          <v-radio
            label="Aller Simple"
            value="true"
          ></v-radio>
          <v-radio
            label="Aller-Retour"
            value="false"
          ></v-radio>
        </v-radio-group>
      </div>
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4 md:tw-gap-6 tw-w-full">
        <div class="tw-flex tw-gap-3 tw-items-center tw-bg-white">
          <v-autocomplete
            v-model="reservationForm.airport_depart"
            :items="departs"
            :loading="loadingDeparts"
            :search-input.sync="searchDeparts"
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="_id"
            label="Choisissez l'adresse de départ..."
            outlined
            height="70"
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  Tapez le nom de la ville
                  <strong>Ville</strong>
                </v-list-item-title>
              </v-list-item>
            </template>

            <template v-slot:item="{ item }">
              <v-list-item-avatar
                class="text-h5 font-weight-light white--text"
              >
                <v-icon>mdi-airplane</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.cn"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>

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

          <span class="tw-inline-flex tw-items-center tw-justify-center">
                <svg class="tw-w-8 tw-h-8 tw-col-span-1 tw-rounded-full tw-border-2 tw-border-red-800 tw-p-1"
                     fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </span>

          <v-autocomplete
            class=""
            v-model="reservationForm.airport_destination"
            :items="destinations"
            :loading="loadingDestinations"
            :search-input.sync="searchDestinations"
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="_id"
            label="Choisissez l'adresse d'arrivée..."
            outlined
            height="70"
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  Tapez le nom de la ville
                  <strong>Ville</strong>
                </v-list-item-title>
              </v-list-item>
            </template>

            <template v-slot:item="{ item }">
              <v-list-item-avatar
                class="text-h5 font-weight-light white--text"
              >
                <v-icon>mdi-airplane</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.cn"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </div>



        <v-menu
          v-if="reservationForm.aller_simple == 'false'"
          ref="menu"
          v-model="menu"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="reservationForm.comeback_date"
              label="Date de retour"
              readonly
              outlined
              height="70"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="reservationForm.comeback_date"
            no-title
            scrollable
          >
          </v-date-picker>
        </v-menu>

        <div class="tw-w-full">
          <v-menu
            :key="text"
            solo
            :close-on-content-click="false"
            offset-y
          >
            <template v-slot:activator="{ attrs, on }">
              <v-text-field class="tw-text-xl tw-font-bold"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            label="Nombre de passagers"
                            outlined
                            height="70"
                            v-model="totalPassagers"
                            dense
              ></v-text-field>
            </template>

            <v-list>
              <v-list-item
              >
                <v-list-item-title >
                  <div class="tw-flex tw-flex-col tw-gap-4 tw-w-full tw-p-4 tw-bg-white">
                    <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                      <span class="tw-text-xl tw-font-bold tw-gray-800">Adultes (> 12 ans)</span>
                      <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                        <div v-if="reservationForm.passengers.adultes > 1 && reservationForm.passengers.enfants + reservationForm.passengers.bebes <= (reservationForm.passengers.adultes - 1) *2">
                          <span @click="reservationForm.passengers.adultes--" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-minus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <div class="hover:tw-cursor-not-drop"><v-icon color="grey">mdi-minus-circle-outline</v-icon></div>
                        </div>
                        <span>{{ reservationForm.passengers.adultes }}</span>

                        <div v-if="reservationForm.passengers.adultes < 9">
                          <span @click="reservationForm.passengers.adultes++" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-plus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <span class=""><v-icon color="grey">mdi-plus-circle-outline</v-icon></span>
                        </div>
                      </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                      <span class="tw-text-xl tw-font-bold tw-gray-800">Enfants (2-11 ans)</span>
                      <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                        <div v-if="reservationForm.passengers.enfants > 0">
                          <span @click="reservationForm.passengers.enfants--" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-minus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <span class="hover:tw-cursor-no-drop"><v-icon color="grey">mdi-minus-circle-outline</v-icon></span>
                        </div>
                        <span>{{ reservationForm.passengers.enfants }}</span>
                        <div v-if="reservationForm.passengers.enfants + reservationForm.passengers.bebes < totalChildrens">
                          <span @click="reservationForm.passengers.enfants++" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-plus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <span class=""><v-icon color="grey">mdi-plus-circle-outline</v-icon></span>
                        </div>
                      </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                      <span class="tw-text-xl tw-font-bold tw-gray-800">Bébés (< 2 ans)</span>
                      <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                        <div v-if="reservationForm.passengers.bebes > 0">
                          <span @click="reservationForm.passengers.bebes--" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-minus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <span class=""><v-icon color="grey">mdi-minus-circle-outline</v-icon></span>
                        </div>
                        <span>{{ reservationForm.passengers.bebes }}</span>
                        <div v-if="reservationForm.passengers.enfants + reservationForm.passengers.bebes < totalChildrens">
                          <span @click="reservationForm.passengers.bebes++" class="hover:tw-cursor-pointer"><v-icon color="red">mdi-plus-circle-outline</v-icon></span>
                        </div>
                        <div v-else>
                          <span class="hover:tw-cursor-pointer"><v-icon color="grey">mdi-plus-circle-outline</v-icon></span>
                        </div>
                      </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                      <div class="tw-p-3 tw-gap-2 tw-rounded-lg tw-items-center tw-flex tw-w-full tw-bg-red-200 tw-text-red-600 tw-text-xl tw-font-light">
                        <v-icon color="red">mdi-alert-octagon-outline</v-icon>
                        <span>2 enfants maximum par adulte</span>
                      </div>
                    </div>
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <div class="tw-flex">
        <template>
          <v-row justify="center">

          </v-row>
        </template>
      </div>

      <template>
        <div class="text-center">
          <v-dialog
            v-model="disclaimerDialog"
            width="500"
          >

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Politique de confidentialité
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="disclaimerDialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="primary"
                  text
                  @click="reservation()"
                >
                  J'accepte
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>

    </form>
>>>>>>> f4317263749230cabfdb22945a781e5b06a7775f
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
