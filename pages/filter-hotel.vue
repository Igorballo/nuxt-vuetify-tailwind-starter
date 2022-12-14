<template>
  <div class="tw-bg-gray-200 tw-p-4 md:tw-p-12">
    <div class="tw-container tw-mx-auto md:tw-flex md:tw-gap-12 tw-w-full">
      <div class="tw-hidden lg:tw-block tw-w-1/3 tw-h-screen">
        <v-form class="tw-bg-white tw-text-sm"
          ref="form"
          v-model="valid"
          lazy-validation>
          <div class="tw-font-semibold tw-text-lg tw-py-4 tw-pl-6 tw-bg-gray-100 tw-border-b">Résumé du trajet</div>
          <hotelReservationForm class="tw-p-6 tw-bg-white tw-flex tw-flex-col tw-gap-2"
          >

            <v-text-field
              label="Ex: pays, ville, quartier ou site d'intérêt"
              outlined
              :rules="villeRules"
              v-model="hotelReservationForm.adresse"
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
                  v-model="hotelReservationForm.date_arrive"
                  label="Date d'arrivée"
                  :rules="dateArriveRules"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="hotelReservationForm.date_arrive"
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
                  v-model="hotelReservationForm.date_depart"
                  :rules="dateDepartRules"
                  label="Date départ"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="hotelReservationForm.date_depart"
                @input="date_depart_menu = false"
              ></v-date-picker>
            </v-menu>

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
                              :rules="passengerRules"
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
            <div class="tw-flex tw-gap-2">
              <v-select
                v-model="hotelReservationForm.prix.lowPrice"
                :items="lowPrice"
                outlined
                :rules="lowPrixRules"
                label="Plus bas prix"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip >
                    <span>{{ item }} XOF</span>
                  </v-chip>
                </template>
              </v-select>

              <v-select
                v-model="hotelReservationForm.prix.highPrice"
                :items="highPrice"
                :rules="highPrixRules"
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
            <v-btn class="tw-text-white tw-bg-red-600 tw-font-semibold tw-rounded-lg tw-py-2 tw-px-6"  @click="validate">Rechercher
            </v-btn>
          </hotelReservationForm>
        </v-form>
      </div>

      <section class="tw-pt-4 tw-pb-20 tw-flex-col tw-gap-4">
        <div class="tw-px-6 lg:tw-px-10 lg:tw-pb-20">
          <div class="tw-flex tw-flex-col tw-gap-4 tw-mb-6">
            <div class="tw-grid md:tw-grid-cols-2 tw-gap-4">
              <div
                class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
                <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-t-lg"
                     src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     alt="">
                <div class="tw-bg-white tw-p-4">
                  <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">Onomo Hotel
                    Lomé</h1>
                  <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
                  <p class="tw-text-xl tw-py-1 tw-font-bold">
                    À partir de € 47,02 par jour
                  </p>
                </div>
              </div>

              <div
                class="tw-col-span-1 tw-h-80 tw-w-full hover:tw-cursor-pointer tw-relative tw-bg-cover tw-rounded-lg tw-shadow-lg">
                <img class="tw-h-full tw-w-full tw-relative tw-bg-cover tw-rounded-t-lg"
                     src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     alt="">
                <div class="tw-bg-white tw-p-4">
                  <h1 class="tw-text-2xl tw-font-bold tw-py-2 tw-font-extrabold tw-text-red-700 tw-uppercase">El Doria
                    Hotel</h1>
                  <p class="text-md tw-font-bold">⭐️⭐️⭐️ Good</p>
                  <p class="tw-text-xl tw-py-1 tw-font-bold">
                    À partir de € 47,02 par jour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
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
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      date_arrive_menu: false,
      date_depart_menu: false,
      hotelReservationForm: {
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

  computed: {
    totalPassagers() {
      // cette methode retourne le nombre total de passagers
      return this.hotelReservationForm.passengers.adultes + this.hotelReservationForm.passengers.enfants + this.hotelReservationForm.passengers.bebes
    },

  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },

  },
}
</script>

<style scoped>

</style>
