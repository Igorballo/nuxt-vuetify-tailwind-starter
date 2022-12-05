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
              <span>Départ: </span>
              <span class="tw-font-semibold">Airpot Tokoin</span>
            </div>
          </div>
          <v-card-title>
            <v-spacer/>
            <v-btn small class="primary">+ nouvelle offre</v-btn>
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
              <v-btn @click="nombre_escale++" small color="green" dark>ajouter escale a ce plan</v-btn>
              <v-spacer/>
              <v-icon small color="red">mdi-delete</v-icon>
            </v-card-title>
            <v-card-text>
              <v-autocomplete dense label="Compagnie de voyage" outlined/>
              <v-text-field label="Prix d'achat du billet" outlined dense/>
              <v-text-field label="Prix de revente du billet" outlined dense/>

              <div v-for="i in nombre_escale" :key="i" class="tw-flex tw-items-center tw-justify-between tw-px-2 tw-border tw-border-gray-900 tw-rounded-lg tw-gap-4 tw-mb-6">
                <span
                  class="tw-rounded-full tw-p-2 tw-h-8 tw-w-8 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-bg-blue-800">{{ i }}</span>
                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="loadingDeparts"
                  :search-input.sync="searchDeparts"
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
                        Tapez le nom de l'aéroport
                        <strong>Aéroport</strong>
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
                <v-datetime-picker outlined ships v-model="datetime"></v-datetime-picker>
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-btn color="red" class="tw-text-white tw-hidden">Enrégistrer et envoyer au client</v-btn>
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
    }
  }
}
</script>

<style scoped>

</style>
