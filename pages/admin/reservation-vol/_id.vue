<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>
      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card>
          <v-card-title>
            <v-spacer/>
            Informations du client
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">EB&666</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">EB&666</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">EB&666</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">EB&666</span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations du voyage</h2>
            <v-spacer/>
            <v-btn small @click="dialogAddOffre = true" color="primary">Ajouter des offres</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <span class="tw-text-lg">EB&666</span>
                <div>
                  <v-btn color="green" dark x-small>confirmer</v-btn>
                  <v-btn color="purple" dark x-small>modifier</v-btn>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de retour</span>
                <span class="tw-text-lg">EB&666</span>
                <div>
                  <v-btn color="green" dark x-small>confirmer</v-btn>
                  <v-btn color="purple" dark x-small>modifier</v-btn>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport de départ</span>
                <span class="tw-text-lg">EB&666</span>
                <div>
                  <v-btn color="green" dark x-small>confirmer</v-btn>
                  <v-btn color="purple" dark x-small>modifier</v-btn>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
                <span class="tw-text-lg">EB&666</span>
                <div>
                  <v-btn color="green" dark x-small>confirmer</v-btn>
                  <v-btn color="purple" dark x-small>modifier</v-btn>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Passagers</span>
                <span class="tw-text-lg">5</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adultes</span>
                <span class="tw-text-lg">1</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Enfants</span>
                <span class="tw-text-lg">1</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Bébé</span>
                <span class="tw-text-lg">1</span>
              </div>
            </div>

            <v-card-actions>
              <v-btn color="primary" @click="dialogAddOffre = true" block>Ajouter des offres</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog width="900px" v-model="dialogAddOffre">
      <v-card>
        <div class="tw-flex tw-px-12 tw-mt-6 tw-gap-4 tw-justify-between tw-items-center">
          <div class="tw-flex tw-justify-between tw-gap-6 tw-items-center">
            <div class="tw-text-md">
              <span>Départ: </span>
              <span class="tw-font-semibold">Airpot Tokoin</span>
            </div>
            <v-icon>mdi-airplane</v-icon>
            <div class="tw-text-md">
              <span>Destination: </span>
              <span class="tw-font-semibold">Airpot Montréal</span>
            </div>
          </div>
          <v-card-title>
            <v-spacer/>
            <v-btn small class="blue tw-text-white">+ nouvelle offre</v-btn>
          </v-card-title>
        </div>
        <v-card-text>
          <v-row class="tw-hidden">
            <v-col cols="12">
              <v-alert color="warning" colored-border border="top" elevation="1" dismissible>
                Le prix d'achat du billet ne sera pas visible au client
              </v-alert>
            </v-col>
          </v-row>

          <v-card v-for="(offre, index) in offres" :key="index" class="tw-mb-6">
            <v-card-title class="tw-mt-4">
              <v-btn @click="escales.push({index: 0, airport: '', arrive: '', departure: ''})" small color="blue" dark><v-icon>mdi-airplane-edit</v-icon> ajouter une escale</v-btn>
              <v-spacer/>
              <v-icon small color="red">mdi-delete</v-icon>
            </v-card-title>
            <v-card-text>
              <v-autocomplete class="tw-mb-6"
                v-model="offres.airline"
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


              <v-text-field outlined v-model="offres.amountbuy" label="Prix d'achat du billet" type="number"  dense/>
              <v-text-field outlined v-model="offres.amountsell" label="Prix de revente du billet" type="number"  dense/>

                <div v-for="(escale, index) in escales" :key="index" class="tw-rounded tw-mb-6 tw-mt-8">
                  <v-icon @click="escales.splice(index, 1)" color="red" class="tw-mx-2">mdi-delete</v-icon>
                  <div class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-gap-4">
                  <span class="tw-rounded-full tw-p-2 tw-h-8 tw-w-8 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-bg-blue-800">{{ index + 1 }}</span>
                    <v-autocomplete
                      v-model="escales[index].airport"
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
                    <v-datetime-picker outlined  ships label="Jour et heure d'arrivée" v-model="escales[index].arrive">
                      <template slot="dateIcon">
                        <v-icon>mdi-calendar</v-icon>
                      </template>
                      <template slot="timeIcon">
                        <v-icon>mdi-clock-outline</v-icon>
                      </template>
                    </v-datetime-picker>
                    <v-datetime-picker outlined ships label="Jour et heure de départ" v-model="escales[index].departure">
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
          <v-btn @click="sendSupply()" color="red" :loading="sendSupplyBtn" class="tw-text-white tw-w-full tw-mt-8">Enrégistrer et envoyer au client</v-btn>
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
      showEscaleForm: false,
      dialogAddOffre: false,
      loadingEscales: false,
      searchEscales: null,
      sendSupplyBtn: false,
      escales: [],
      offres: [
        {
          airline: "",
          amountbuy: "",
          amountsell: "",
          escales: false,
        }
      ],
      airlines: [],
      modal: "",
    }
  },

  mounted(){
    this.getAirlines()
  },

  methods: {
      async getAirlines() {
        const response = await axios.get('/airlines/get-airlines')
          .then(res => {
            this.airlines = res.data.airlines
          })
          .catch(error => {
            return;
          })
      },

    async sendSupply(){
      this.sendSupplyBtn = true
      await axios.post(`/reservation-vol/request-flight-reservation`, this.reservationForm).then((response) => {
        if (response.data.error) {
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.sendSupplyBtn = false
        this.showToast('success', 'Offres de réservation envoyée avec succès')
      }).catch(error => {
        this.sendSupplyBtn = false
        this.showToast('error', "Une erreur s'est produite")
      });
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
      // fetch(`${config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
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
  },
}
</script>

<style scoped>

</style>
