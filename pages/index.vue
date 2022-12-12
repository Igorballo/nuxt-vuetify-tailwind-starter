<template>
  <div>
    
    <div class="tw-relative">
      <div style="z-index: 500"
           class="tw-flex tw-justify-center tw-items-center tw-absolute tw-inset-0">
        <div class="tw-flex tw-flex-col tw-rounded-lg tw-bg-white tw-shadow-md tw-p-4 md:tw-p-6 tw-w-[90%] md:tw-w-[75%]">
          <v-radio-group row v-model="reservationForm.typevoyage">
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
            <select class="tw-border-1 tw-border-red-600 tw-rounded-md">
              <option>Business Class</option>
              <option>Economic Class</option>
            </select>
          </div>

          <div class="tw-flex tw-items-center">
            <div class="tw-flex tw-flex-col tw-w-full md:tw-gap-4 md:tw-items-center md:tw-flex-row">
              <v-col>
                <v-row class="tw-relative">
                  <v-autocomplete append-icon="" background-color="white"
                                  class="tw-w-1/3 tw-duration-300 focus:tw-outline-none tw-rounded-l-md tw-rounded-r-none placeholder:tw-text-gray-800"
                                  v-model="reservationForm.airport_depart"
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
                    v-model="reservationForm.airport_destination"
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
              <v-col>
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
                          v-model="reservationForm.depart_date"
                          label="Date de départ"
                          readonly
                          outlined
                          v-bind="attrs"
                          v-on="on"
                          :class="{'tw-rounded-r-none':reservationForm.typevoyage === 'allerretour'}"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="reservationForm.depart_date"
                        no-title
                        scrollable
                      >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col v-if="reservationForm.typevoyage === 'allerretour'" class="tw-px-0">
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
                          v-model="reservationForm.comeback_date"
                          label="Date de retour"
                          readonly
                          outlined
                          class="tw-rounded-l-none"
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
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
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
                                v-if="reservationForm.passengers.adultes > 1 && reservationForm.passengers.enfants + reservationForm.passengers.bebes <= (reservationForm.passengers.adultes - 1) *2">
                                <span @click="reservationForm.passengers.adultes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <div class="hover:tw-cursor-not-drop">
                                  <v-icon color="grey">mdi-minus-circle-outline</v-icon>
                                </div>
                              </div>
                              <span>{{ reservationForm.passengers.adultes }}</span>

                              <div v-if="reservationForm.passengers.adultes < 9">
                                <span @click="reservationForm.passengers.adultes++" class="hover:tw-cursor-pointer"><v-icon
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
                              <div v-if="reservationForm.passengers.enfants > 0">
                                <span @click="reservationForm.passengers.enfants--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <span class="hover:tw-cursor-no-drop"><v-icon
                                  color="grey">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <span>{{ reservationForm.passengers.enfants }}</span>
                              <div
                                v-if="reservationForm.passengers.enfants + reservationForm.passengers.bebes < totalChildrens">
                                <span @click="reservationForm.passengers.enfants++" class="hover:tw-cursor-pointer"><v-icon
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
                              <div v-if="reservationForm.passengers.bebes > 0">
                                <span @click="reservationForm.passengers.bebes--" class="hover:tw-cursor-pointer"><v-icon
                                  color="red">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <div v-else>
                                <span class=""><v-icon color="grey">mdi-minus-circle-outline</v-icon></span>
                              </div>
                              <span>{{ reservationForm.passengers.bebes }}</span>
                              <div
                                v-if="reservationForm.passengers.enfants + reservationForm.passengers.bebes < totalChildrens">
                                <span @click="reservationForm.passengers.bebes++" class="hover:tw-cursor-pointer"><v-icon
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

          <v-dialog
            v-model="userInfoDialog"
            max-width="600px"
          >
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
                      cols="12" class="tw-mx-1"
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
                      <v-col>
                        <v-text-field v-model="reservationForm.phone_number.number" required type="number" label="Numéro de télephone" outlined></v-text-field>
                      </v-col>
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
          <v-btn
          :loading="btnLoading"
            @click="userInfoDialog = true"
            class="tw-w-[fit-content] tw-absolute tw-right-24 tw-rounded-full tw-py-6 tw-px-4 tw-text-red-500 tw-ease-in tw-font-semibold tw-bg-white tw-border-2 tw-border-red-700 tw-duration-300">
            Demander reservation

          </v-btn>
        </div>
      </div>
      <v-carousel
        cycle
        class=""
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
      date_depart: null,
      modalDay: false,
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
      value: null,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      depart_menu: false,
      retour_menu: false,
      menu: false,
      isEditing: false,
    }
  },

  mounted() {
  },

  computed: {
    totalPassagers() {
      // cette methode retourne le nombre total de passagers
      return this.reservationForm.passengers.adultes + this.reservationForm.passengers.enfants + this.reservationForm.passengers.bebes
    },

    totalChildrens() {
      return this.reservationForm.passengers.adultes * 2
    },
  },

  methods: {
    async reservation() {
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
      fetch(`${config.app_local ? config.app_api_debug_url : config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
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
      fetch(`${config.app_local ? config.app_api_debug_url : config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
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
