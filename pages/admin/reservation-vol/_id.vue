<template>
  <v-container fluid>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
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
                  class="tw-text-lg">
                  <a :href="`tel:${reservation.customer.lastPhoneNumber.number }`">{{
                      reservation.customer.lastPhoneNumber.code
                    }} {{ reservation.customer.lastPhoneNumber.number }}</a>
                  </span>
              </div>
            </div>
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Email</span>
                <span
                  class="tw-text-lg">
                   <a :href="`mailto:${reservation.customer.email }`">{{ reservation.customer.email }}</a>
                    </span>
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
                <v-chip>{{ reservation.airportDepart?.name }}, {{
                    reservation.airportDepart?.country
                  }}
                </v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
                <v-chip>{{ reservation.airportDestination?.name }}, {{ reservation.airportDestination?.country }}
                </v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ reservation.departDate|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de retour</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip v-if="reservation.hasOwnProperty('comebackDate')">{{ reservation.comebackDate|moment('DD / MM / YYYY') }}</v-chip>
                  <v-chip v-else>Aller simple</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Type de classe</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ reservation.typeClasse }}</v-chip>
                </div>
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

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4 tw-text-sm md:tw-sticky md:tw-top-20">
        <v-card v-if="reservation" class="">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small @click="dialogAddOffre = true" color="primary">Ajouter des offres</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-container v-if="offres.length === 0" color="grey" class="tw-bg-gray-50 tw-text-sm">Aucune offre n'est
              proposée pour le moment
            </v-container>
            <v-container>
              <div v-for="(offre, offre_index) in offres" :key="offre_index">
                <v-row justify="space-around" class="tw-mb-6">
                  <v-card width="400">
                    <v-img
                      height="170px"
                      src="https://images.unsplash.com/photo-1540582258098-bb52b08799bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    >
                      <div class="tw-h-full"
                      >
                        <div
                          class="tw-relative tw-text-xl tw-mx-2 tw-py-4 tw-text-white tw-font-semibold tw-justify-between tw-items-center tw-h-full tw-flex tw-flex-col">
                          <div class="tw-py-0.5">
                            {{ offre.airline?.name }}
                          </div>

                          <div style="width: fit-content"
                               class="tw-py-0.5 tw-px-4 tw-rounded-full tw-border tw-border-white">
                            {{ offre.amountsell }} XOF
                          </div>
                          <v-btn class="tw-absolute tw-bg-white tw-rounded-lg tw-right-0 tw-top-2">
                            <v-icon class="" @click="deleteSupplyById(offre._id)"
                                    color="red" height="5">mdi-delete
                            </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-img>

                    <v-card-text>
                      <div class="tw-font-bold tw-uppercase ml-8 mb-2">
                        Plan du vol
                      </div>

                      <!-- Retour Detail-->
                      <v-timeline
                        align-top
                        dense
                      >
                        <v-timeline
                          align-top
                          dense
                        >
                          <v-timeline-item
                            color="primary"
                            small
                          >
                            <div>
                              <div class="font-weight-normal tw-flex tw-items-center tw-gap-2">
                                <v-icon>mdi-airplane</v-icon>
                                <strong class="tw-font-bold">{{ offre.airportDepart?.name }}</strong>
                              </div>
                              <strong>{{ offre.confirmedDepartDate|moment('MMMM Do YYYY, h:mm:ss a') }}</strong>
                            </div>
                          </v-timeline-item>
                        </v-timeline>

                        <v-timeline-item
                          v-for="(escale, escale_index) in offre.escales"
                          :key="escale_index"
                          color="secondary"
                          small
                        >
                          <div>
                            <div class="font-weight-normal tw-flex tw-items-center tw-gap-2">
                              <v-icon>mdi-airplane-landing</v-icon>
                              <div class="tw-font-bold">{{ escale.airport.name }}</div>
                            </div>
                            <strong>Arrivée: {{ escale.arrive|moment('MMMM Do YYYY, h:mm:ss a') }}</strong> <br>
                            <strong>Départ: {{ escale.departure|moment('MMMM Do YYYY, h:mm:ss a') }}</strong>
                          </div>
                        </v-timeline-item>

                        <!-- Retour Detail-->
                        <v-timeline-item
                          color="primary"
                          small
                        >
                          <div class="font-weight-normal tw-flex tw-items-center tw-gap-2">
                            <v-icon>mdi-airplane-landing</v-icon>
                            <strong class="tw-font-bold">{{ offre.airportDestination?.name }}</strong>
                          </div>
                          <strong>{{ offre.confirmedComebackDate|moment('MMMM Do YYYY, h:mm:ss a') }}</strong>

                        </v-timeline-item>
                      </v-timeline>
                    </v-card-text>
                  </v-card>
                </v-row>
              </div>
            </v-container>
          </v-card-text>
          <v-file-input outlined v-model="files" multiple label="Sélectionner les fichiers"  />
          <v-card-actions class="tw-mb-6" v-if="">
            <v-btn :loading="sendSupplyToClientBtn" color="primary" @click="sendSupplyToClient()" block>Envoyer cette offre au client</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    
  </v-container>
</template>

<script>
import config from "../../../config";

export default {
  layout: "admin",
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/admin/dashboard',
        },
        {
          text: 'Reservation Vols',
          disabled: false,
          href: '/admin/reservation',
        },
        {
          text: 'Demande de Réservation',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      sendSupplyToClientBtn: false,
      airlineRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateArriveRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateHeureArriveRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      dateHeureDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      adresseArriveRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      adresseDepartRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      escaleRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      prixAchatRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      prixReventeRules: [
        v => !!v || 'ce champs est obligatoire',
      ],
      confirmedDate: null,
      departDatePicker: false,
      showEscaleForm: false,
      dialogAddOffre: false,
      loadingEscales: false,
      loadingDeparts: false,
      searchDeparts: null,
      loadingDestinations: false,
      searchDestinations: null,
      departs: [],
      destinations: [],
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
          airport_depart: "",
          airport_destination: "",
          confirmed_depart_date: "",
          confirmed_comeback_date: "",
          escales: [],
        },
      airlines: [],
      modal: "",
      files: []
    }
  },

  mounted() {
    this.getAirlines()
    this.getReservationInfos()
    this.getAllSupply()
  },

  methods: {
    disablePastDates(val) {
      return val >= new Date().toISOString().substr(0, 10)
    },
     async sendSupplyToClient() {
      const formData = new FormData();
  this.files.forEach((file) => {
    formData.append('files', file);
  });
     await axios.post(`/reservation-vol/send-offer-to-customer/${this.$route.params.id}`, formData).then((response) => {
        this.showToast('success', 'Message envoyé avec succès')
        this.files = [];

      }).catch(error => {
        console.log(error)
        this.showToast('error', 'Une erreur s\'est produite')
      })
    },
    
   /*  async sendSupplyToClient(){
      this.sendSupplyToClientBtn = true
      await axios.post(``).then( res => {
        if (res.data.error) {
          this.sendSupplyToClientBtn = false
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.sendSupplyToClientBtn = false
        this.showToast('success', 'Offre de reservation de vol envoyée au client avec succès')
      })
    }, */
    async getReservationInfos() {
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

    async getAllSupply() {
      // this.offre.escale = this.escale
      const response = await axios.get(`/reservation-vol/get-offres/${this.$route.params.id}`)
        .then(res => {
          this.offres = res.data.offres
        })
        .catch(error => {
          return;
        })

    },

    async sendSupply() {
      this.sendSupplyBtn = true
      if (this.$refs.form.validate()) {
        const response = await axios.post(`/reservation-vol/admin-update-offre/${this.$route.params.id}`, this.offre).then(res => {

          if (res.data.error) {
            this.sendSupplyBtn = false
            Swal.fire({
              title: 'Echec',
              text: 'Une Erreur s\'est produite',
              icon: 'error'
            })
            return
          }
          this.getAllSupply()
          this.sendSupplyBtn = false
          this.dialogAddOffre = false
          this.offre =
          {
            airline: "",
              amountbuy: "",
            amountsell: "",
            escale: false,
            airport_depart: "",
            airport_destination: "",
            confirmed_depart_date: "",
            confirmed_comeback_date: "",
            escales: [],
          },

          this.showToast('success', 'Offre enrégistrée avec succès')
        }).catch(error => {
          return;
        })
      }

    },

    async deleteSupplyById(offre) {
      await axios.delete(`/reservation-vol/delete-offre-by-id/${offre}`).then(res => {
        if (res.data.error) {
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }

        this.getAllSupply()
        this.showToast('success', 'Offre supprimée avec succès')
      }).catch(error => {
        return;
      })
    },
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
      fetch(`${config.app_local ? config.app_api_debug_url : config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
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

<style scoped>

</style>
