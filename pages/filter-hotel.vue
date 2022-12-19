<template>
  <div class="tw-bg-gray-200 tw-p-4 md:tw-px-0 md:tw-py-12">
    <div class="tw-relative tw-container tw-mx-auto md:tw-px-4 md:tw-flex md:tw-gap-8 tw-w-full">
      <div class="tw-hidden md:tw-sticky md:tw-top-24 lg:tw-block tw-w-1/3 tw-h-screen">
        <v-form class="tw-bg-white tw-text-sm tw-p-6 tw-bg-white tw-flex tw-flex-col tw-gap-2"
          ref="form"
          v-model="valid"
          lazy-validation>

            <v-text-field
              label="Ex: pays, ville, quartier ou site d'intérêt"
              outlined
              :rules="villeRules"
              v-model="hotelFilterForm.adresse"
            ></v-text-field>
            <v-menu
              v-model="date_arrive_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="hotelFilterForm.date_arrive"
                  label="Date d'arrivée"
                  :rules="dateArriveRules"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="hotelFilterForm.date_arrive"
                @input="date_arrive_menu = false"
              ></v-date-picker>
            </v-menu>

            <v-menu
              v-model="date_depart_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="hotelFilterForm.date_depart"
                  :rules="dateDepartRules"
                  label="Date départ"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="hotelFilterForm.date_depart"
                @input="date_depart_menu = false"
              ></v-date-picker>
            </v-menu>

            <v-menu
              solo
              left
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ attrs, on }">
                <v-text-field class="tw-text-xl tw-font-bold mb-1"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              label="Nombre de passagers"
                              outlined
                              height="55"
                              v-model="totalPassagers"
                              dense
                ></v-text-field>
              </template>

              <v-list>
                <v-list-item
                >
                  <v-list-item-title>
                    <div class="tw-flex tw-flex-col tw-gap-4 tw-w-full tw-p-4 tw-bg-white">
                      <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                        <span class="tw-text-xl tw-font-bold tw-gray-800">Adultes (> 12 ans)</span>
                        <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                          <div v-if="hotelFilterForm.passengers.adultes > 0">
                                <span @click="hotelFilterForm.passengers.adultes--"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                          </div>
                          <div v-else>
                            <div class="hover:tw-cursor-not-drop">
                              <v-icon color="grey">mdi-minus-circle-outline</v-icon>
                            </div>
                          </div>
                          <span>{{ hotelFilterForm.passengers.adultes }}</span>

                          <div>
                                <span @click="hotelFilterForm.passengers.adultes++"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                          </div>
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                        <span class="tw-text-xl tw-font-bold tw-gray-800">Enfants (2-11 ans)</span>
                        <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                          <div v-if="hotelFilterForm.passengers.enfants > 0">
                                <span @click="hotelFilterForm.passengers.enfants--"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                          </div>
                          <div v-else>
                                <span class="hover:tw-cursor-no-drop"><v-icon
                                  color="grey">mdi-minus-circle-outline</v-icon></span>
                          </div>
                          <span>{{ hotelFilterForm.passengers.enfants }}</span>
                          <div>
                                <span @click="hotelFilterForm.passengers.enfants++"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                          </div>
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                        <span class="tw-text-xl tw-font-bold tw-gray-800">Bébés (< 2 ans)</span>
                        <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                          <div v-if="hotelFilterForm.passengers.bebes > 0">
                                <span @click="hotelFilterForm.passengers.bebes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                          </div>
                          <div v-else>
                              <span class="hover:tw-cursor-no-drop"><v-icon
                                color="grey">mdi-minus-circle-outline</v-icon></span>
                          </div>
                          <span>{{ hotelFilterForm.passengers.bebes }}</span>
                          <div>
                                <span @click="hotelFilterForm.passengers.bebes++" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <div class="tw-flex tw-gap-2">
              <v-select
                v-model="hotelFilterForm.prix.lowPrice"
                :items="lowPrice"
                outlined
                label="Plus bas prix"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip >
                    <span>{{ item }} XOF</span>
                  </v-chip>
                </template>
              </v-select>

              <v-select
                v-model="hotelFilterForm.prix.highPrice"
                :items="highPrice"
                outlined
                label="Plus haut prix"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip >
                    <span>{{ item }} XOF</span>
                  </v-chip>
                </template>
              </v-select>
            </div>
            <v-btn :loading="searchHotelBtn" class="tw-text-white tw-bg-red-600 tw-font-semibold tw-rounded-lg tw-py-2 tw-px-6"  @click="searchHotel">Rechercher
            </v-btn>

        </v-form>
      </div>

      <div class="tw-flex tw-flex-col tw-w-full tw-gap-4">
          <div class="tw-flex tw-flex-col tw-gap-4 tw-mb-6">
                <div v-for="hotel in hotels" class="tw-w-full tw-shadow-lg tw-max-w-4xl tw-bg-white sm:tw-flex">

                  <div class="tw-w-full sm:tw-w-1/4 hotel-cover tw-bg-center tw-bg-cover tw-border tw-relative tw-h-48 sm:tw-h-auto tw-shadow-inner"
                  :style="{backgroundImage: `url(${showImages(hotel)})`}">
                    <div class="tw-w-full tw-absolute tw-bottom-0 tw-flex tw-justify-center bg-gradient-black-transparent">
                      <ul class="tw-text-xs sm:tw-font-semibold tw-my-2 tw-flex sm:tw-block tw-justify-around tw-w-full sm:tw-w-auto tw-text-white">
                        <li class="tw-my-1 tw-flex tw-items-center tw-py-0.5 tw-px-2 tw-bg-gray-700 tw-bg-opacity-80">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" class="tw-mr-1 tw-h-3 tw-w-3 tw-fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                          Annulation gratuite
                        </li>
                        <li class="tw-my-1 tw-flex tw-items-center tw-py-0.5 tw-px-2 tw-bg-gray-700 tw-bg-opacity-80">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" class="tw-mr-1 tw-h-3 tw-w-3 tw-fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"></path></svg>
                          Petit-déjeuner inclus
                        </li>
                        <li class="tw-my-1 tw-flex tw-items-center tw-py-0.5 tw-px-2 tw-bg-gray-700 tw-bg-opacity-80">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" class="tw-mr-1 tw-h-3 tw-w-3 tw-fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                          Wifi inclus
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tw-w-full sm:tw-w-3/4 tw-p-3">

                    <div class="tw-flex tw-justify-between tw-items-center tw-border-b tw-pb-3">
                      <div>
                        <div class="sm:tw-flex tw-items-center tw-mb-1">
                          <h2 class="tw-text-lg tw-font-semibold tw-text-gray-600">{{ hotel.nom }}</h2>
                        <!--   <div class="tw-flex sm:tw-ml-3">

                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                          </div> -->
                        </div>
                        <div class="tw-flex tw-items-center">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="tw-h-3 tw-w-3 tw-text-blue-500 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                          <span class="tw-text-xs tw-text-gray-600">{{ hotel.adresse }} <a class="tw-font-semibold tw-text-gray-700" href="">Show on Map</a></span>
                        </div>
                      </div>
                      <div>
                        <div class="tw-text-right tw-text-xl tw-leading-tight tw-text-gray-600 tw-font-semibold">
                          {{ hotel.prix }} <br> 1 jours
                        </div>
                      </div>
                    </div>

                    <div class="tw-flex tw-mt-3">
                      <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="tw-w-3 tw-h-3 tw-text-blue-500 tw-mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                      </div>
                      <p class="tw-text-xs tw-ml-1 tw-text-gray-600">
                        {{ hotel.description}}
                      </p>
                    </div>

                    <div class="tw-flex tw-mt-3 tw-items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed" class="tw-w-3 tw-h-3 tw-text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path></svg>
                      <span class="tw-text-xs tw-ml-2 tw-text-gray-600 tw-font-semibold">
                        Deluxe room, 1 King Bed
                      </span>
                    </div>

                    <div class="sm:tw-flex tw-mt-3 tw-items-center tw-justify-between">
                      <div>
                        <p class="tw-text-xs tw-text-green-700">
                          <strong>2.5/5 Avgerage.</strong> See 431 reviews
                        </p>
                      </div>
                      <div class="tw-mt-3 sm:tw-mt-3 sm:tw--mr-8">
                        <a href="#" class="tw-bg-red-600 tw-shadow tw-text-white tw-py-3 tw-px-6 tw-font-bold tw-inline-block">Reservez maintenant</a>
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
import config from "../config";
import {mapGetters} from "vuex";
export default {
  layout: 'master',

  data() {
    return {
      villeRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateArriveRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      lowPrixRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      highPrixRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      searchHotelBtn: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      valid: false,
      hotels: [],
      date_arrive_menu: false,
      date_depart_menu: false,
      hotelFilterForm: {
        adresse: "",
        prix: {
          lowPrice: "",
          highPrice: "",
        },
        date_arrive: "",
        date_depart: "",
        nombre_etoiles: "",
        passengers: {
          adultes: 1,
          enfants: 0,
          bebes: 0,
        }
      },
      lowPrice: ['0','2000', '5000', '10000', '25000', '50000'],
      highPrice: ['2000', '5000', '10000', '25000','+ 50000'],
      value: ['foo', 'bar', 'fizz'],

    }
  },

  mounted() {
    this.hotelFilterForm.date_arrive = this.selected_recherche_hotel_date_arrive
    this.hotelFilterForm.date_depart = this.selected_recherche_hotel_date_depart
    this.hotelFilterForm.adresse = this.selected_recherche_hotel_adresse
    this.hotelFilterForm.passengers = this.selected_recherche_hotel_passengers
  },

  computed: {
    totalPassagers() {
      // cette methode retourne le nombre total de passagers
      return this.hotelFilterForm.passengers.adultes + this.hotelFilterForm.passengers.enfants + this.hotelFilterForm.passengers.bebes
    },

    ...mapGetters('recherche-hotels', [
      'selected_recherche_hotel_date_arrive',
      'selected_recherche_hotel_date_depart',
      'selected_recherche_hotel_adresse',
      'selected_recherche_hotel_passengers',

    ]),
  },

   created () {
    this.initialize()
  },

  methods: {
    showImages(item) {
      console.log(item)
      console.log('hello')
     const url = config.app_local ?`${config.app_back_debug_url}/${item.images[0]}`:`${config.app_back_url}/${item.images[0]}`
     return url
    },

     getHotel() {
      axios.get('/hotels/get-hotels?limit=25')
        .then(response => {
          console.log(response);
          this.hotels = response.data.hotels;
        })
    },
    async searchHotel() {
      this.searchHotelBtn = true
      await axios.get(`/cars/get-cars?pricemin=${this.hotelFilterForm.prix.lowPrice}&pricemax=${this.hotelFilterForm.prix.highPrice}&limit=100`)
        .then(response => {
          console.log(response);
          this.hotels = response.data.hotels;
          this.searchHotelBtn = false
        }).catch(error => {
          console.log(error)
          this.searchHotelBtn = false
        })
      this.getHotel()
    },
    initialize() {
      this.getHotel();
    },
  },

}
</script>

<style scoped>

</style>
