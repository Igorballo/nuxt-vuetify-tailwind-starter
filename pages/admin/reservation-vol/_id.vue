<template>
  <v-container fluid>
    <v-overlay v-if="loadingReservation"/>
    <v-row>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>
      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="reservation">
          <v-card-title>
            Informations du client
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">{{ reservation.customer.passportId }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom</span>
                <span class="tw-text-lg">{{ reservation.customer.lastname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Prénoms</span>
                <span class="tw-text-lg">{{ reservation.customer.firstname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Téléphone</span>
                <span
                  class="tw-text-lg">{{
                    reservation.customer.lastPhoneNumber.code
                  }} {{ reservation.customer.lastPhoneNumber.number }}</span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card v-if="reservation" class="tw-mb-6">
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations du voyage</h2>
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport de départ</span>
                <v-chip>{{ reservation.airport_dep_populated.cm }}, {{ reservation.airport_dep_populated.cn }}</v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
                <v-chip>{{ reservation.airport_dest_populated.cm }}, {{ reservation.airport_dest_populated.cn }}
                </v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ reservation.departDate|moment('d / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de retour</span>
                <v-chip v-if="reservation.comebackDate" class="tw-text-lg">{{ reservation.comebackDate }}</v-chip>
                <v-chip v-else>Non défini</v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Passagers</span>
                <span
                  class="tw-text-lg">{{
                    reservation.passengers.adultes + reservation.passengers.bebes + reservation.passengers.enfants
                  }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adultes</span>
                <span class="tw-text-lg">{{ reservation.passengers.adultes }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Enfants</span>
                <span class="tw-text-lg">{{ reservation.passengers.enfants }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Bébé</span>
                <span class="tw-text-lg">{{ reservation.passengers.bebes }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="reservation">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small @click="dialogAddOffre = true" color="primary">Ajouter des offres</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-container color="grey" class="tw-bg-gray-50 tw-text-lg">Aucune offre n'est proposée pour le moment
            </v-container>
            <v-container>
              <div v-for="(offre, offre_index) in offres" :key="offre_index">
                <v-row justify="space-around">
                  <v-card width="400">
                    <v-img
                      height="150px"
                      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    >
                      <v-app-bar
                        flat
                        color="rgba(0, 0, 0, 0)"
                      >
                        <v-toolbar-title class="text-h6 white--text pl-0">
                          <div class="tw-py-0.5 tw-px-4 tw-rounded-full tw-border tw-border-white">
                            Air Burkina
                          </div>
                        </v-toolbar-title>

                        <v-spacer/>
                        <v-toolbar-title class="text-h6 white--text pl-0">
                          <div class="tw-py-0.5 tw-px-4 tw-rounded-full tw-border tw-border-white">
                            500 $
                          </div>
                        </v-toolbar-title>
                        <!--                        <v-icon @click="offre.splice(index,1)" small color="red">mdi-delete</v-icon>-->
                      </v-app-bar>
                    </v-img>

                    <v-card-text>
                      <div class="font-weight-bold ml-8 mb-2">
                        Plan du vol
                      </div>

                      <v-timeline
                        align-top
                        dense
                      >
                        <v-timeline-item
                          v-for="message in messages"
                          :key="message.time"
                          :color="message.color"
                          small
                        >
                          <div>
                            <div class="font-weight-normal">
                              <strong>{{ message.from }}</strong> @{{ message.time }}
                            </div>
                            <div>{{ message.message }}</div>
                          </div>
                        </v-timeline-item>
                      </v-timeline>
                    </v-card-text>
                  </v-card>
                </v-row>
              </div>
            </v-container>

            <v-card-actions class="" v-if="offres.length > 0">
              <v-btn color="primary" @click="dialogAddOffre = true" block>Envoyer cette offre au client</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog width="900px" v-model="dialogAddOffre">
      <v-card>
        <div class="tw-flex tw-px-12 tw-mt-6 tw-gap-4 tw-justify-between tw-items-center">
          <div class="tw-flex tw-justify-between tw-gap-6 tw-mb-4 tw-items-center">
            <div class="tw-text-md">
              <span>Départ: </span>
              <span class="tw-font-semibold">{{ reservation?.airport_dep_populated.cm }}, {{ reservation?.airport_dep_populated.cn }}</span>
            </div>
            <v-icon>mdi-airplane</v-icon>
            <div class="tw-text-md">
              <span>Destination: </span>
              <span class="tw-font-semibold">{{ reservation?.airport_dest_populated.cm }}, {{ reservation?.airport_dest_populated.cm }}</span>
            </div>
          </div>
        </div>
        <v-card-text>
          <v-card class="tw-mb-6">
            <v-card-title class="tw-mt-4">
              <v-btn @click="offre.escales.push({index: 0, airport: '', arrive: '', departure: ''})" small
                     color="blue" dark>
                <v-icon>mdi-airplane-edit</v-icon>
                ajouter une escale
              </v-btn>
              <v-spacer/>
            </v-card-title>
            <v-card-text>
              <v-autocomplete class="tw-mb-6"
                              v-model="offre.airline"
                              :items="airlines"
                              clearable
                              hide-details
                              hide-selected
                              item-text="label"
                              item-value="_id"
                              label="Compagnie de voyage"
                              outlined
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Tapez le nom de la compagnie aérienne
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
                    <v-list-item-title v-text="item.label"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>

              <div class="tw-flex tw-gap-3 tw-mb-6 tw-items-center tw-bg-white">
                <v-autocomplete
                  v-model="modal"
                  :items="departs"
                  :loading="loadingDeparts"
                  :search-input.sync="searchDeparts"
                  clearable
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="_id"
                  label="Choisissez l'aéroport de départ..."
                  outlined
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        Tapez le nom de l'aéroport
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

                <v-autocomplete
                  v-model="modal"
                  :items="departs"
                  :loading="loadingDeparts"
                  :search-input.sync="searchDeparts"
                  clearable
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="_id"
                  label="Choisissez l'aéroport d'arrivée..."
                  outlined
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        Tapez le nom de l'aéroport
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

              <div class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-mt-6 tw-gap-4">
                <v-datetime-picker outlined ships label="Jour et heure de départ"
                                   v-model="offre.confirmedDepartDate">
                  <template slot="dateIcon">
                    <v-icon>mdi-calendar</v-icon>
                  </template>
                  <template slot="timeIcon">
                    <v-icon>mdi-clock-outline</v-icon>
                  </template>
                </v-datetime-picker>

                <v-datetime-picker outlined ships label="Jour et heure de retour"
                                   v-model="offre.confirmedComebackDate">
                  <template slot="dateIcon">
                    <v-icon>mdi-calendar</v-icon>
                  </template>
                  <template slot="timeIcon">
                    <v-icon>mdi-clock-outline</v-icon>
                  </template>
                </v-datetime-picker>
              </div>


              <v-text-field outlined v-model="offre.amountbuy" label="Prix d'achat du billet" type="number"/>
              <v-text-field outlined v-model="offre.amountsell" label="Prix de revente du billet" type="number"/>

              <div v-for="(escale, escale_index) in offre.escales" :key="escale_index"
                   class="tw-rounded tw-mb-6 tw-mt-8">
                <v-icon @click="offre.escales.splice(escale_index, 1)" color="red" class="tw-mx-2">mdi-delete</v-icon>
                <div class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-gap-4">
                  <span
                    class="tw-rounded-full tw-p-2 tw-h-8 tw-w-8 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-bg-blue-800">
                    {{
                      escale_index + 1
                    }}</span>
                  <v-autocomplete
                    v-model="escale.airport"
                    :items="escales"
                    :loading="loadingEscales"
                    :search-input.sync="searchEscales"
                    clearable
                    hide-details
                    hide-selected
                    item-text="name"
                    item-value="_id"
                    label="Choisissez l'aéroport d'escale..."
                    outlined
                  >
                    <template v-slot:no-data>
                      <v-list-item>
                        <v-list-item-title>
                          Tapez le nom de compagnie
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

                <div class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-mt-6 tw-gap-4">
                  <v-datetime-picker outlined ships label="Jour et heure d'arrivée"
                                     v-model="escale.arrive">
                    <template slot="dateIcon">
                      <v-icon>mdi-calendar</v-icon>
                    </template>
                    <template slot="timeIcon">
                      <v-icon>mdi-clock-outline</v-icon>
                    </template>
                  </v-datetime-picker>
                  <v-datetime-picker outlined ships label="Jour et heure de départ"
                                     v-model="escale.departure">
                    <template slot="dateIcon">
                      <v-icon>mdi-calendar</v-icon>
                    </template>
                    <template slot="timeIcon">
                      <v-icon>mdi-clock-outline</v-icon>
                    </template>
                  </v-datetime-picker>
                </div>
                <v-divider></v-divider>
              </div>
            </v-card-text>
          </v-card>
          <v-btn @click="sendSupply()" color="red" :loading="sendSupplyBtn" class="tw-text-white tw-w-full tw-mt-8">
            Enrégistrer cette offre
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      confirmedDate: null,
      departDatePicker: false,
      showEscaleForm: false,
      dialogAddOffre: false,
      loadingEscales: false,
      loadingDeparts: false,
      searchDeparts: null,
      departs: [],
      searchEscales: null,
      escales: [],
      sendSupplyBtn: false,
      loadingReservation: false,
      reservation: null,
      offres: [],
      offre:
        {
          airline: "",
          amountbuy: "",
          amountsell: "",
          escale: false,
          confirmedDepartDate: "",
          confirmedComebackDate: "",
          escales: [],
        },
      airlines: [],
      modal: "",
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }
  },

  mounted() {
    this.getAirlines()
    this.getReservationInfos()
  },

  methods: {
    async getReservationInfos() {
      console.log("route param")
      console.log(this.$route.params.id)
      this.loadingReservation = true
      const response = await axios.get(`/reservation-vol/${this.$route.params.id}`)
        .then(res => {
          this.reservation = res.data.reservation
        })
        .catch(error => {
          return;
        })
        .finally(() => {
          this.loadingReservation = false
        })
    },
    async getAirlines() {
      const response = await axios.get('/airlines/get-airlines')
        .then(res => {
          this.airlines = res.data.airlines
        })
        .catch(error => {
          return;
        })
    },

    async sendSupply() {
      this.sendSupplyBtn = true
      if (this.offre.escales.length > 0)
        this.offre.escale = true
      for(let $i=0; $i = this.offre.escales; $i++){
        this.offre.escales[$i] = $i + 1
      }
      const response = await axios.post(`/reservation-vol/request-flight-reservation`, this.offre)
      console.log(response)
    }
  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    searchEscales(val) {
      // Items have already been loaded
      if (this.escales.length > 0) return

      this.loadingEscales = true

      // Lazily load input items
      fetch(`/airports/get-by-name?filter_query=${val}`)
        .then(res => res.clone().json())
        .then(res => {
          this.escales = res.airports
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.loadingEscales = false))
    },

    searchDeparts(val) {
      // Items have already been loaded
      if (this.departs.length > 0) return

      this.loadingDeparts = true

      // Lazily load input items
      fetch(`/airports/get-by-name?filter_query=${val}`)
        .then(res => res.clone().json())
        .then(res => {
          this.departs = res.airports
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.loadingDeparts = false))
    },
  },
}
</script>

<style scoped>

</style>
