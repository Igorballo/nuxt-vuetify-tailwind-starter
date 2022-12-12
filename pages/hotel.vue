<template>
  <div>
    <div class="tw-relative">
      <div style="z-index: 500"
           class="tw-flex tw-absolute tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-px-6 tw-py-6 tw-pb-10 tw-w-[75%] tw-bottom-[40%] tw-right-[12%]">
        <form class="tw-flex tw-flex-col tw-gap">
          <div class="tw-flex tw-items-center tw-gap-6">
            <v-text-field
              label="Ex: pays, ville, quartier ou site d'intérêt"
              outlined
              v-model="hotelReservationForm.destination"
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
                      v-model="hotelReservationForm.date_arrive"
                      label="Date d'arrivée"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-r-none"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="hotelReservationForm.date_arrive"
                    no-title
                    scrollable
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
                      v-model="hotelReservationForm.date_depart"
                      label="Date de départ"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      class="tw-rounded-l-none"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="hotelReservationForm.date_depart"
                    no-title
                    scrollable
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
                            <div v-if="hotelReservationForm.passengers.adultes > 0">
                                <span @click="hotelReservationForm.passengers.adultes--"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                            </div>
                            <div v-else>
                              <div class="hover:tw-cursor-not-drop">
                                <v-icon color="grey">mdi-minus-circle-outline</v-icon>
                              </div>
                            </div>
                            <span>{{ hotelReservationForm.passengers.adultes }}</span>

                            <div>
                                <span @click="hotelReservationForm.passengers.adultes++"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                            </div>
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                          <span class="tw-text-xl tw-font-bold tw-gray-800">Enfants (2-11 ans)</span>
                          <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                            <div v-if="hotelReservationForm.passengers.enfants > 0">
                                <span @click="hotelReservationForm.passengers.enfants--"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                            </div>
                            <div v-else>
                                <span class="hover:tw-cursor-no-drop"><v-icon
                                  color="grey">mdi-minus-circle-outline</v-icon></span>
                            </div>
                            <span>{{ hotelReservationForm.passengers.enfants }}</span>
                            <div>
                                <span @click="hotelReservationForm.passengers.enfants++"
                                      class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-plus-circle-outline</v-icon></span>
                            </div>
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="tw-py-4 tw-flex tw-justify-between tw-gap-12">
                          <span class="tw-text-xl tw-font-bold tw-gray-800">Bébés (< 2 ans)</span>
                          <div class="tw-text-xl tw-font-bold tw-gray-800 tw-flex tw-items-center tw-gap-4">
                            <div v-if="hotelReservationForm.passengers.bebes > 0">
                                <span @click="hotelReservationForm.passengers.bebes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                            </div>
                            <div v-else>
                              <span class="hover:tw-cursor-no-drop"><v-icon
                                color="grey">mdi-minus-circle-outline</v-icon></span>
                            </div>
                            <span>{{ hotelReservationForm.passengers.bebes }}</span>
                            <div>
                                <span @click="hotelReservationForm.passengers.bebes++" class="hover:tw-cursor-pointer"><v-icon
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


          <v-btn
            class="tw-w-[fit-content] tw-absolute tw-bottom-4 tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-blue-800 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des hotêls
          </v-btn>
        </form>
      </div>
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="i in 3"
          src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          :key="i"
        >
        </v-carousel-item>
      </v-carousel>
    </div>


    <!-- Our partners section   -->
    <div class="tw-mx-auto tw-px-4 tw-my-20">
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-evenly tw-gap-8">
        <img class="tw-mt-2 tw-h-16 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">

        <img class="tw-mt-2 tw-h-20 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Airfrance_Logo.svg/2560px-Airfrance_Logo.svg.png"
             alt="air-france">
      </div>
    </div>

    <section class="tw-pt-4 tw-pb-20 lg:tw-px-4 tw-px-6 tw-flex-col tw-gap-4">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-4xl tw-inline-flex tw-items-center tw-gap-3 tw-font-bold tw-uppercase tw-ml-20 tw-font-extrabold tw-text-red-700 tw-italic">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="tw-w-25 tw-h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
        </svg>
        Les hébergements que les clients adorent
      </h1>

      <div class="tw-px-6 lg:tw-px-10 lg:tw-pb-20">
        <div class="tw-flex tw-flex-col tw-space-y-4 tw-mb-6">

          <div class="tw-grid md:tw-grid-cols-4 tw-gap-4">


            <div
              class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Onomo Hotel
                Lomé</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>

            <div
              class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Hotel 2
                Fevrier Lomé</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️⭐️⭐️ Very Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>

            <div
              class="tw-col-span-1 tw-h-80  tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">El Doria
                Hotel</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>

            </div>

            <div
              class="tw-col-span-1 tw-h-80  tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
              <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-lg"
                   src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   alt="">
              <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Pure
                Plage</h1>
              <p class="text-md tw-font-bold">⭐️⭐️⭐️⭐️ Great</p>
              <p class="tw-text-xl tw-py-1 tw-font-bold">
                À partir de € 47,02 par jour
              </p>
            </div>


          </div>


        </div>


      </div>

    </section>

    <div class="tw-bg-no-repeat tw-bg-cover tw-bg-center tw-w-full tw-h-[75vh]"
         style="background-image: url(https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tourisme',
  layout: 'master',
  data() {
    return {
      hotelReservationForm: {
        destination: "",
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
      return this.hotelReservationForm.passengers.adultes + this.hotelReservationForm.passengers.enfants + this.hotelReservationForm.passengers.bebes
    },

  },

}

</script>

<style scoped>

</style>
