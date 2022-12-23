<template>
  <v-container fluid>
    <v-overlay v-if="!demande_hotel"/>
    <v-row v-else>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>

      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="demande_hotel">
          <v-card-title>
            Informations du client
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">{{ demande_hotel.customer.passportId }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom</span>
                <span class="tw-text-lg">{{ demande_hotel.customer.lastname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Prénoms</span>
                <span class="tw-text-lg">{{ demande_hotel.customer.firstname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Téléphone</span>
                <span
                  class="tw-text-lg">
                  <a :href="`tel:${demande_hotel.customer.lastPhoneNumber.number }`">{{
                      demande_hotel.customer.lastPhoneNumber.code
                    }} {{ demande_hotel.customer.lastPhoneNumber.number }}</a>
                  </span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Email</span>
                <span
                  class="tw-text-lg">
                   <a :href="`mailto:${demande_hotel.customer.email }`">{{ demande_hotel.customer.email }}</a>
                    </span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card v-if="demande_hotel" class="tw-mb-6">
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations de la demande d'hébergement</h2>
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom de l'hôtel</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>Nom de l'hôtel</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adresse de l'hôtel</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_hotel.adresse }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date d'arrivée</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_hotel.dateArrive|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_hotel.dateDepart|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Passagers</span>
                <span
                  class="tw-text-lg">{{
                    demande_hotel.passengers.adultes + demande_hotel.passengers.bebes + demande_hotel.passengers.enfants
                  }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adultes</span>
                <span class="tw-text-lg">{{ demande_hotel.passengers.adultes }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Enfants</span>
                <span class="tw-text-lg">{{ demande_hotel.passengers.enfants }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Bébé</span>
                <span class="tw-text-lg">{{ demande_hotel.passengers.bebes }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4 tw-text-sm md:tw-sticky md:tw-top-20">
        <v-card v-if="demande_hotel" class="">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small color="primary">Ajouter une offre</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-card>
              <BaseDropzone @uploadchange="handleUploadChange"/>
              <v-card-actions class="tw-mb-6" v-if="">
                <v-btn color="primary" @click="sendSupplyToClient()" block>Envoyer cette offre au client</v-btn>
              </v-card-actions>

            </v-card>
          </v-card-text>
          <v-container color="grey" class="tw-bg-gray-200 tw-text-sm tw-hidden">Aucune offre n'est
            proposée pour le moment
          </v-container>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

export default {
  layout: "admin",
  data() {
    return {
      demande_hotel: null,
      selectedFile: null,
      media: []
    }
  },

  async mounted() {
    await this.getHotelReservationById()
  },

  methods: {
    getHotelReservationById() {
      axios.get(`/reservation-hotel/${this.$route.params.id}`)
        .then(response => {
          this.demande_hotel = response.data.reservation;
        })
    },
    handleUploadChange(event){
      console.log("ev")
      console.log(event)
    },
    triggerUpload() {
      let inputImage = document.getElementById("images-upload")
      inputImage.click()
    },
    removeImageUploaded(index) {
      this.media.splice(index, 1)
    },

  }
}
</script>

<style scoped>

</style>
