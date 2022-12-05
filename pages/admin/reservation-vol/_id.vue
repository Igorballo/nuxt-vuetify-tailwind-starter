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

          <v-card>
            <v-card-title class="tw-mt-4">
              <v-btn @click="nombre_escale++" small color="blue" dark><v-icon>mdi-airplane-edit</v-icon> ajouter une escale</v-btn>
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
                      <strong>Compagnie</strong>
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


              <v-text-field v-model="offres.amountbuy" label="Prix d'achat du billet" type="number" outlined dense/>
              <v-text-field v-model="offres.amountsell" label="Prix de revente du billet" type="number" outlined dense/>

              <div v-for="i in nombre_escale" :key="i" class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-border tw-border-gray-900 tw-rounded tw-gap-4 tw-mb-6">
                <span
                  class="tw-rounded-full tw-p-2 tw-h-8 tw-w-8 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-bg-blue-800">{{ i }}</span>
                <v-autocomplete
                  v-model="model"
                  :items="escales"
                  :loading="loadingEscales"
                  :search-input.sync="searchEscales"
                  clearable
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="_id"
                  label="Choisissez l'aéroport d'escale..."
                  solo
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        Tapez le nom de compagnie
                        <strong>Compagnie</strong>
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
                <v-datetime-picker solo outlined ships v-model="datetime"></v-datetime-picker>
              </div>
            </v-card-text>
          </v-card>
          <v-btn color="red" class="tw-text-white tw-w-full tw-mt-8">Enrégistrer et envoyer au client</v-btn>
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
      nombre_escale: 0,
      showEscaleForm: false,
      dialogAddOffre: false,
      loadingEscales: false,
      searchEscales: null,
      escales: [],
      offres: {
        airline: "",
        amountbuy: "",
        amountsell: "",
        escales: false,
      },
      airlines: [],
      modal: "",
    }
  },

  mounted(){
    this.getAirlines()
  },

  methods: {
      async getAirlines() {
        const response = await axios.get('http://7272-2c0f-f0f8-2be-f800-6528-ab93-b334-30ac.ngrok.io/airlines/get-airlines')
          // console.log(response.data)
          .then(res => {
            this.airlines = res.data.airlines
          })
          .catch(error => {
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
      // fetch(`${config.app_api_base_url}/airports/get-by-name?filter_query=${val}`)
      fetch(`http://7272-2c0f-f0f8-2be-f800-6528-ab93-b334-30ac.ngrok.io/airports/get-by-name?filter_query=${val}`)
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
