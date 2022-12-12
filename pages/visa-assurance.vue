<template>
  <div>
    <div class="tw-relative">
      <div style="z-index: 500"
           class="tw-flex tw-absolute tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-px-6 tw-py-6 tw-pb-12 tw-w-[75%] tw-bottom-[30%] tw-right-[10%]">
        <div>
          <v-radio-group row v-model="visaReservationForm.typevoyage">
            <v-radio
              label="Aller-retour"
              value="allerretour"
            ></v-radio>

            <v-radio
              label="Aller simple"
              value="allersimple"
            ></v-radio>

            <v-radio
              label="Destination multiple"
              value="destinationmultiple"
            ></v-radio>
          </v-radio-group>

          <div class="tw-flex tw-items-center">
            <div class="tw-flex tw-flex-col tw-w-full md:tw-gap-4 md:tw-items-center md:tw-flex-row">
              <v-col cols="5">
                <v-row class="tw-relative">
                  <v-autocomplete append-icon="" background-color="white"
                                  class="tw-w-1/3 tw-duration-300 focus:tw-outline-none tw-rounded-l-md tw-rounded-r-none placeholder:tw-text-gray-800"
                                  v-model="visaReservationForm.airport_depart"
                                  :items="departs"
                                  :loading="loadingDeparts"
                                  :search-input.sync="searchDeparts"
                                  clearable
                                  hide-details
                                  hide-selected
                                  item-text="name"
                                  item-value="_id"
                                  label="Choisissez l'adresse de départ..." outlined>
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
                  <span class="tw-inline-flex tw-items-center tw-justify-center tw-absolute tw-right-[47%] tw-top-3"
                        style="z-index: 200">
                    <svg
                      class="tw-w-6 tw-h-6 tw-bg-white tw-col-span-1 tw-rounded-full tw-border-2 tw-border-red-800 tw-p-1"
                      fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                    </span>
                  <v-autocomplete
                    append-icon=""
                    background-color="white"
                    class="tw-w-1/3 focus:tw-outline-none tw-duration-300 placeholder:tw-text-gray-800 tw-rounded-l-none tw-rounded-r-md"
                    v-model="visaReservationForm.airport_destination"
                    :items="destinations"
                    :loading="loadingDestinations"
                    :search-input.sync="searchDestinations"
                    clearable
                    item-text="name"
                    item-value="_id"
                    label="Choisissez l'adresse d'arrivée..." outlined>
                    <!--                  <template v-slot:selection="data">-->
                    <!--                    <v-chip-->
                    <!--                      v-bind="data.attrs"-->
                    <!--                      :input-value="data.selected"-->
                    <!--                      close-->
                    <!--                      @click="data.select"-->
                    <!--                      @click:close="remove(data.item)"-->
                    <!--                    >-->
                    <!--                      <v-avatar left>-->
                    <!--                        <v-icon>mdi-home</v-icon>-->
                    <!--                      </v-avatar>-->
                    <!--                      {{ data.item.adresse }}-->
                    <!--                    </v-chip>-->
                    <!--                  </template>-->
                    <!--                  <template v-slot:item="data">-->
                    <!--                    <template v-if="typeof data.item !== 'object'">-->
                    <!--                      <v-list-item-content v-text="data.item"></v-list-item-content>-->
                    <!--                    </template>-->
                    <!--                    <template v-else>-->
                    <!--                      <v-list-item-avatar>-->
                    <!--                        <v-icon>mdi-home</v-icon>-->
                    <!--                      </v-list-item-avatar>-->
                    <!--                      <v-list-item-content>-->
                    <!--                        <v-list-item-title v-html="data.item.adresse"></v-list-item-title>-->
                    <!--                        <v-list-item-subtitle v-html="data.item.ville?.nom"></v-list-item-subtitle>-->
                    <!--                      </v-list-item-content>-->
                    <!--                    </template>-->
                    <!--                  </template>-->
                  </v-autocomplete>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-row>
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
                          v-model="visaReservationForm.depart_date"
                          label="Date de départ"
                          readonly
                          outlined
                          v-bind="attrs"
                          v-on="on"
                          :class="{'tw-rounded-r-none':visaReservationForm.typevoyage === 'allerretour'}"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="visaReservationForm.depart_date"
                        no-title
                        scrollable
                      >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col v-if="visaReservationForm.typevoyage === 'allerretour'" class="tw-px-0">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="visaReservationForm.comeback_date"
                          label="Date de retour"
                          readonly
                          outlined
                          class="tw-rounded-l-none"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="visaReservationForm.depart_date"
                        no-title
                        scrollable
                      >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2">
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
                              <div
                                v-if="visaReservationForm.passengers.adultes > 1 && visaReservationForm.passengers.enfants + visaReservationForm.passengers.bebes <= (visaReservationForm.passengers.adultes - 1) *2">
                                <span @click="visaReservationForm.passengers.adultes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <div class="hover:tw-cursor-not-drop">
                                  <v-icon color="grey">mdi-minus-circle-outline</v-icon>
                                </div>
                              </div>
                              <span>{{ visaReservationForm.passengers.adultes }}</span>

                              <div v-if="visaReservationForm.passengers.adultes < 9">
                                <span @click="visaReservationForm.passengers.adultes++" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
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
                              <div v-if="visaReservationForm.passengers.enfants > 0">
                                <span @click="visaReservationForm.passengers.enfants--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <span class="hover:tw-cursor-no-drop"><v-icon
                                  color="grey">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <span>{{ visaReservationForm.passengers.enfants }}</span>
                              <div
                                v-if="visaReservationForm.passengers.enfants + visaReservationForm.passengers.bebes < totalChildrens">
                                <span @click="visaReservationForm.passengers.enfants++" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
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
                              <div v-if="visaReservationForm.passengers.bebes > 0">
                                <span @click="visaReservationForm.passengers.bebes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <span class=""><v-icon color="grey">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <span>{{ visaReservationForm.passengers.bebes }}</span>
                              <div
                                v-if="visaReservationForm.passengers.enfants + visaReservationForm.passengers.bebes < totalChildrens">
                                <span @click="visaReservationForm.passengers.bebes++" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <span class="hover:tw-cursor-pointer"><v-icon
                                  color="grey">mdi-plus-circle-outline</v-icon></span>
                              </div>
                            </div>
                          </div>
                          <v-divider></v-divider>
                          <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                            <div
                              class="tw-p-3 tw-gap-2 tw-rounded-lg tw-items-center tw-flex tw-w-full tw-bg-red-200 tw-text-red-600 tw-text-xl tw-font-light">
                              <v-icon color="red">mdi-alert-octagon-outline</v-icon>
                              <span>2 enfants maximum par adulte</span>
                            </div>
                          </div>
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </div>
          </div>

          <v-btn
            class="tw-w-[fit-content] tw-absolute tw-bottom-4 tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des vols
          </v-btn>
        </div>
      </div>
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in 3"
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          :key="i"
        >
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Our partners section   -->
    <div class="tw-mx-auto tw-px-4 tw-my-20">
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-evenly tw-gap-8">
        <img class="tw-mt-2 tw-h-12 lg:tw-h-16 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">

        <img class="tw-mt-2 tw-h-12 lg:tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-12 lg:tw-h-16 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 lg:tw-h-20 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 lg:tw-h-16 tw-fill-current"
             src="https://www.internationalboost.com/wp-content/uploads/2018/12/logo-air-france.png"
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
        visaReservationForm: {
          aller_simple: true,
          typevoyage: 'allerretour',
          airport_depart: "",
          airport_destination: "",
          depart_date: "",
          comeback_date: "",
          lastname: "",
          firstname: "",
          passport_id: "",
          phone_number: {
            code: "",
            number: '',
          },
          passengers: {
            adultes: 1,
            enfants: 0,
            bebes: 0,
          }
        },
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
