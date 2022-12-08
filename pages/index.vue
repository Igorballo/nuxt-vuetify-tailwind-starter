<template>
  <div>
    <div class="tw-h-full lg:tw-h-[60vh] tw-bg-no-repeat tw-bg-cover tw-bg-center"
         style="background-image: url(https://plus.unsplash.com/premium_photo-1661281272544-5204ea3a481a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
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
              ref="depart_menu"
              v-model="depart_menu"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="reservationForm.depart_date"
                  label="Date de départ"
                  readonly
                  height="70"
                  outlined
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="reservationForm.depart_date"
                no-title
                scrollable
              >
              </v-date-picker>
            </v-menu>

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
                <v-dialog
                  v-model="userInfoDialog"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class=""
                      color="error darken-1"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Faire une demande de
                      reservation
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Une dernière étape</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              label="Nom*"
                              required
                              outlined
                              v-model="reservationForm.lastname"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              label="Prénoms"
                              required outlined
                              v-model="reservationForm.firstname"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                          >
                            <v-text-field placeholder="XXXXXXXX" v-model="reservationForm.passport_id" required label="Numéro passport" outlined></v-text-field>
                          </v-col>

                          <v-row
                            cols="12" class="tw-mx-2"
                          >
                            <v-col sm="6">
                              <v-autocomplete
                                v-model="reservationForm.phone_number.code"
                                :items="countries"
                                :loading="isLoading"
                                :search-input.sync="search"
                                clearable
                                item-text="dial_code"
                                item-value="id"
                                outlined
                                label="Indicatif de votre numéro"
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-avatar
                                    color="indigo"
                                    class="text-h10 tw-p-4 font-weight-light white--text"
                                  >
                                    {{ item.dial_code}}
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title>{{ item.name}}</v-list-item-title>
                                  </v-list-item-content>
                                </template>
                              </v-autocomplete>
                            </v-col>
                            <v-text-field v-model="reservationForm.phone_number.number" justify="center" required type="number" label="Numéro de télephone" outlined></v-text-field>
                          </v-row>
                        </v-row>
                      </v-container>
                      <small>*Indique un champ obligatoire</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="error darken-1"
                        @click="userInfoDialog = false"
                        text
                      >
                        Fermer
                      </v-btn>
                      <v-btn
                        class=""
                        color="error darken-1"
                        :loading="btnLoading"
                        @click="userInfoDialog = false, disclaimerDialog = true"
                      >
                        Envoyer la demande
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
      </div>
    </div>

    <!-- Our partners section   -->
    <div class="tw-mx-auto tw-px-4 tw-my-20">
      <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-evenly tw-gap-8">

        <img class="tw-mt-2 tw-h-24 tw-fill-current" src="../assets/img/IATA.png" alt="IATA">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/2560px-Ethiopian_Airlines_Logo.svg.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://i.pinimg.com/originals/2f/48/a7/2f48a7c799b4995d9578ed9580b40fbe.jpg"
             alt="air-france">

        <img class="tw-mt-2 tw-h-24 tw-fill-current"
             src="https://wallpapercave.com/wp/wp11304533.png"
             alt="air-france">

        <img class="tw-mt-2 tw-h-16 tw-fill-current"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Airfrance_Logo.svg/2560px-Airfrance_Logo.svg.png"
             alt="air-france">
      </div>
    </div>

    <Cards/>
  </div>
</template>

<script>
import json from '../data/CountryCodes.json'
import config from "../config";

export default {
  name: 'index',
  layout: 'master',

  data() {
    return {
      countries: json,
      loadingDeparts: false,
      loadingDestinations: false,
      btnLoading: false,
      isLoading: false,
      userInfoDialog: false,
      disclaimerDialog: false,
      departs: [],
      destinations: [],
      model: null,
      search: null,
      searchDeparts: null,
      searchDestinations: null,
      tab: null,
      reservationForm: {
        aller_simple: true,
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
      value: null,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      depart_menu: false,
      retour_menu: false,
      menu: false,
      isEditing: false,
    }
  },

  mounted(){
  },

  computed: {
    totalPassagers() {
      // cette methode retourne le nombre total de passagers
      return this.reservationForm.passengers.adultes + this.reservationForm.passengers.enfants + this.reservationForm.passengers.bebes
    },

    totalChildrens(){
      return this.reservationForm.passengers.adultes * 2
    },
  },

  methods: {
    async reservation(){
      console.log("reservation")
      this.btnLoading = true
      await axios.post('/reservation-vol/request-flight-reservation', this.reservationForm).then((response) => {
        if (response.data.error) {
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.btnLoading = false
        this.userInfoDialog = false
          this.showToast('success', 'Demande de reservation envoyée avec succès')
      }).catch(error => {
        this.btnLoading = false
        this.userInfoDialog = false
        this.showToast('error', "Une erreur s'est produite")
      });
    }
  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    searchDeparts(val) {
      // Items have already been loaded
      if (this.departs.length > 0) return

      this.loadingDeparts = true

      // Lazily load input items
      fetch(`${config.app_local?config.app_api_debug_url:config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
        .then(res => res.clone().json())
        .then(res => {
          this.departs = res.airports
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.loadingDeparts = false))
    },

    searchDestinations(val) {
      // Items have already been loaded
      if (this.destinations.length > 0) return

      this.loadingDestinations = true

      // Lazily load input items
      fetch(`${config.app_local?config.app_api_debug_url:config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
        .then(res => res.clone().json())
        .then(res => {
          this.destinations = res.airports
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.loadingDestinations = false))
    },
  },
}
</script>
