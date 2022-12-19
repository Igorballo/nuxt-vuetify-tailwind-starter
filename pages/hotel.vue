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
          <div class="tw-flex tw-flex-col tw-pt-2 tw-gap-4 md:tw-flex-row md:tw-items-center md:tw-justify-between ">
            <v-text-field
              label="Ex: pays, ville, quartier ou site d'intérêt"
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
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"

        >
        </v-carousel-item>
        <v-carousel-item
          src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"

        >
        </v-carousel-item>
        <v-carousel-item
          src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

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
            class="tw-mt-12 tw-mb-6 tw-text-xl tw-text-center lg:tw-text-3xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 tw-font-extrabold tw-text-red-700 tw-italic">
            Les hébergements que les clients adorent
          </h1>
          <div class="tw-flex tw-flex-wrap tw-justify-center md:tw-items-center tw-gap-6">
            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">$240 / Jour</dd>
                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </div>

                <h1 class="tw-hidden tw-text-lg tw-font-bold tw-gray-800 tw-mt-4 tw-text-red-600">À partir de € 47,02 par jour</h1>


                  <div class="tw-mt-6  tw-flex tw-items-center tw-text-xs">
                    <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw-mr-2 tw-text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p class="tw-text-sm tw-font-bold tw-text-gray-900 tw-mt-4">4.95</p>
                      <span class="tw-w-1 tw-h-1 tw-mx-1.5 tw-bg-gray-500 tw-rounded-full"></span>
                      <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-900 tw-underline hover:tw-no-underline">73 reviews</a>
                  </div>
              </div>
            </div>

            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://plus.unsplash.com/premium_photo-1661677878527-052034451487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">$240 / Jour</dd>
                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </div>

                <h1 class="tw-hidden tw-text-lg tw-font-bold tw-gray-800 tw-mt-4 tw-text-red-600">À partir de € 47,02 par jour</h1>


                  <div class="tw-mt-6  tw-flex tw-items-center tw-text-xs">
                    <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw-mr-2 tw-text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p class="tw-text-sm tw-font-bold tw-text-gray-900 tw-mt-4">4.95</p>
                      <span class="tw-w-1 tw-h-1 tw-mx-1.5 tw-bg-gray-500 tw-rounded-full"></span>
                      <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-900 tw-underline hover:tw-no-underline">73 reviews</a>
                  </div>
              </div>
            </div>


            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">$240 / Jour</dd>
                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </div>

                <h1 class="tw-hidden tw-text-lg tw-font-bold tw-gray-800 tw-mt-4 tw-text-red-600">À partir de € 47,02 par jour</h1>


                  <div class="tw-mt-6  tw-flex tw-items-center tw-text-xs">
                    <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw-mr-2 tw-text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p class="tw-text-sm tw-font-bold tw-text-gray-900 tw-mt-4">4.95</p>
                      <span class="tw-w-1 tw-h-1 tw-mx-1.5 tw-bg-gray-500 tw-rounded-full"></span>
                      <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-900 tw-underline hover:tw-no-underline">73 reviews</a>
                  </div>
              </div>
            </div>

            <div href="#" class="tw-block tw-w-full md:tw-w-[fit-content] tw-rounded-lg tw-p-2 md:tw-p-4 tw-shadow-sm tw-shadow-indigo-100">
              <img
                alt="Home"
                src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="tw-h-56 tw-w-full tw-rounded-md tw-object-cover"
              />

              <div class="tw-mt-2">
                <div>
                  <div>
                    <dt class="tw-sr-only">Price</dt>

                    <dd class="tw-text-md tw-text-gray-500">$240 / Jour</dd>
                  </div>

                  <div>
                    <dt class="tw-sr-only">Address</dt>

                    <dd class="tw-font-bold tw-text-xl">123 Wallaby Avenue, Park Road</dd>
                  </div>
                </div>

                <h1 class="tw-hidden tw-text-lg tw-font-bold tw-gray-800 tw-mt-4 tw-text-red-600">À partir de € 47,02 par jour</h1>


                  <div class="tw-mt-6  tw-flex tw-items-center tw-text-xs">
                    <svg aria-hidden="true" class="tw-w-5 tw-h-5 tw-mr-2 tw-text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p class="tw-text-sm tw-font-bold tw-text-gray-900 tw-mt-4">4.95</p>
                      <span class="tw-w-1 tw-h-1 tw-mx-1.5 tw-bg-gray-500 tw-rounded-full"></span>
                      <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-900 tw-underline hover:tw-no-underline">73 reviews</a>
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
