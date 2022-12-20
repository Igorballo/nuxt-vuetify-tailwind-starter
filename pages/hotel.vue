<template>
  <div>
    <Annonce />
    <div class="tw-relative">
      <div style="z-index: 200"
           class="tw-flex tw-justify-center tw-items-center tw-absolute tw-inset-0">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-p-4 md:tw-p-6 tw-w-[90%] md:tw-w-[75%]">
          <div class="tw-flex tw-flex-col tw-pt-2 tw-gap-4 md:tw-flex-row md:tw-items-center md:tw-justify-between ">
            <v-text-field
              label="Ex: pays, ville, quartier ou nom de l'hôtel"
              outlined
              v-model="hotelFilterForm.adresse"
              :rules="villeRules"
              required
            ></v-text-field>
            <div class="tw-flex tw-items-center">
              <v-col class="tw-px-0">
                <v-menu
                  ref="depart_menu"
                  v-model="depart_menu"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="hotelFilterForm.date_arrive"
                      label="Date d'arrivée"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-r-none"
                      required
                      :rules="dateArriveRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="hotelFilterForm.date_arrive"
                    no-title
                    scrollable
                    :allowed-dates="disablePastDates"
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="tw-px-0">
                <v-menu
                  ref="date_destination_ref"
                  v-model="date_depart_menu"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="hotelFilterForm.date_depart"
                      label="Date de départ"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-l-none"
                      :rules="dateDepartRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="hotelFilterForm.date_depart"
                    no-title
                    scrollable
                    :allowed-dates="disablePastDates"
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </div>
            <div>
              <v-menu
                :key="text"
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
                            <div v-if="hotelFilterForm.passengers.adultes > 1">
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
            </div>
          </div>


          <v-btn @click="hotelSearch"
            class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des hotêls
          </v-btn>
        </v-form>
      </div>

      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/150028263.jpg?k=52a8de177ae0c844ffc86e2e95b2c20db0853a535847d64df91b59c397e15e8c&o=&hp=1"

        >
        </v-carousel-item>
        <v-carousel-item
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/100138969.jpg?k=530dde575fecfa3d65942855c2a3cd94b28f038654161990b235fb1c55108bcc&o=&hp=1"

        >
        </v-carousel-item>
        <v-carousel-item
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/342939351.jpg?k=b365071f921cb6153235d56c0c88267c690cd07a3510b75ebf3448b279cade23&o=&hp=1"

        >
        </v-carousel-item>
      </v-carousel>
    </div>


    <!-- Our partners section   -->
    <Partners />


    <section class="tw-pt-4 tw-pb-8 lg:tw-pb-20 lg:tw-px-4 tw-flex-col tw-gap-4">
      <div class="">
        <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10">
          <h1
            class="tw-mt-12 tw-mb-6 tw-text-xl tw-text-center lg:tw-text-2xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 tw-font-extrabold tw-text-red-700">
            Les hébergements que les clients adorent
          </h1>
          <div class="tw-flex tw-flex-col tw-gap-6 lg:tw-flex-row tw-justify-center lg:tw-items-center tw-gap-6">
            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/150028263.jpg?k=52a8de177ae0c844ffc86e2e95b2c20db0853a535847d64df91b59c397e15e8c&o=&hp=1"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">£203 / Jour</dd>
                  </div>

                  <div class="tw-flex">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">Hotel 2 Fevrier</dd>
                  </div>
                </div>


              </div>
            </div>

            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/131511819.jpg?k=2883ea522b2f78e3b9c4ac1738bb40b35b125bd404fb098195d438e070b6f766&o=&hp=1"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">£54 / Jour</dd>
                  </div>

                     <div class="tw-flex">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                    </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">Bravia Hotel Lome</dd>
                  </div>
                </div>

              </div>
            </div>

            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/100138969.jpg?k=530dde575fecfa3d65942855c2a3cd94b28f038654161990b235fb1c55108bcc&o=&hp=1"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">£159 / Jour</dd>
                  </div>

                     <div class="tw-flex">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">Hôtel Sarakawa</dd>
                  </div>
                </div>


              </div>
            </div>

            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/342939351.jpg?k=b365071f921cb6153235d56c0c88267c690cd07a3510b75ebf3448b279cade23&o=&hp=1"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">£90 / Jour</dd>
                  </div>

                     <div class="tw-flex">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">ONOMO Hotel Lomé</dd>
                  </div>
                </div>


              </div>
            </div>
               <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/370916651.jpg?k=62fb7eca97c112d1e3e34eef64d9f834bbffd8e7c8ec6b7537990aba6cbb5722&o=&hp=1"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">£92 / Jour</dd>
                  </div>

                     <div class="tw-flex">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="tw-h-4 tw-w-4 tw-text-yellow-400 tw-fill-current tw-mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">Marcelo Beach Club</dd>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Tourisme',
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
      hotelFilterForm: {
        adresse: "",
        date_arrive: "",
        date_depart: "",
        passengers: {
          adultes: 1,
          enfants: 0,
          bebes: 0,
        }
      },
      items: [
        'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      ],
    }
  },

  computed: {
    totalPassagers() {
      // cette methode retourne le nombre total de passagers
      return this.hotelFilterForm.passengers.adultes + this.hotelFilterForm.passengers.enfants + this.hotelFilterForm.passengers.bebes
    },
    totalChildrens() {
      return this.hotelFilterForm.passengers.adultes * 2
    },
  },

  methods: {
    disablePastDates(val) {
      return val > new Date().toISOString().substr(0, 10)
    },
    hotelSearch () {
            if (this.$refs.form.validate()) {
              this.$store.dispatch('recherche-hotels/setRechercheHotelDateArrive', this.hotelFilterForm.date_arrive)
              this.$store.dispatch('recherche-hotels/setRechercheHotelDateDepart', this.hotelFilterForm.date_depart)
              this.$store.dispatch('recherche-hotels/setRechercheHotelAdresse', this.hotelFilterForm.adresse)
              this.$store.dispatch('recherche-hotels/setRechercheHotelPassengers', this.hotelFilterForm.passengers)
              this.$router.push('/filter-hotel')
            }
        }
      },

}

</script>

<style scoped>

</style>
