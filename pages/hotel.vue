<template>
  <div>
    <div class="tw-relative">
      <div style="z-index: 500"
           class="tw-flex tw-justify-center tw-items-center tw-absolute tw-inset-0">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-p-4 md:tw-p-6 tw-w-[90%] md:tw-w-[75%]">
          <div class="tw-flex tw-flex-col tw-pt-2 md:tw-flex-row md:tw-items-center md:tw-justify-between ">
            <v-text-field
              label="Ex: pays, ville, quartier ou site d'intérêt"
              outlined
              v-model="hotelReservationForm.destination"
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
                      v-model="hotelReservationForm.date_arrive"
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
                      :rules="dateDepartRules"
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
                            <div v-if="hotelReservationForm.passengers.adultes > 1">
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


          <v-btn @click="validate"
            class="tw-w-[fit-content] tw-rounded-full tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
            Rechercher des hotêls
          </v-btn>
        </v-form>
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
    <Partners />


    <section class="tw-pt-4 tw-pb-20 lg:tw-px-4 tw-px-6 tw-flex-col tw-gap-4">
      <h1
        class="tw-mt-12 tw-mb-6 tw-text-xl md:tw-text-2xl tw-inline-flex tw-items-center tw-gap-3 tw-font-bold tw-uppercase tw-font-extrabold tw-text-red-700">
        Les hébergements que les clients adorent
      </h1>

      <div class="tw-px-6 lg:tw-px-10 tw-pb-24">
        <div class="tw-flex tw-flex-col tw-space-y-4 tw-mb-6">

          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-4">


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
               <v-btn
               class="tw-w-[fit-content] tw-rounded-lg tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
               Reserver maintenant
               </v-btn>
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
               <v-btn
               class="tw-w-[fit-content] tw-rounded-lg tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
               Reserver maintenant
               </v-btn>
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
               <v-btn
               class="tw-w-[fit-content] tw-rounded-lg tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
               Reserver maintenant
               </v-btn>

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
               <v-btn
               class="tw-w-[fit-content] tw-rounded-lg tw-py-6 tw-px-4 tw-text-white tw-ease-in tw-font-semibold tw-bg-red-600 tw-border-2 tw-border-red-700 tw-duration-300">
               Reserver maintenant
               </v-btn>
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
    totalChildrens() {
      return this.hotelReservationForm.passengers.adultes * 2
    },
  },

  methods: {
     validate () {
        if(this.$refs.form.validate()) {
          this.$router.push('/filter-hotel')
        }  
      },
  }

}

</script>

<style scoped>

</style>
