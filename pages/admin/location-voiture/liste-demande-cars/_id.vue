<template>
  <v-container fluid>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-overlay v-if="!demande_car"/>
    <v-row v-else>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>

      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="demande_car">
          <v-card-title>
            Informations du client
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">{{ demande_car.customer.passportId }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom</span>
                <span class="tw-text-lg">{{ demande_car.customer.lastname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Prénoms</span>
                <span class="tw-text-lg">{{ demande_car.customer.firstname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Téléphone</span>
                <span
                  class="tw-text-lg">
                  <a :href="`tel:${demande_car.customer.lastPhoneNumber.number }`">{{
                      demande_car.customer.lastPhoneNumber.code
                    }} {{ demande_car.customer.lastPhoneNumber.number }}</a>
                  </span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Email</span>
                <span
                  class="tw-text-lg">
                   <a :href="`mailto:${demande_car.customer.email }`">{{ demande_car.customer.email }}</a>
                    </span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card v-if="demande_car" class="tw-mb-6">
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations du Reservation de Voiture</h2>
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date d'Arrivé </span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_car.dateDebut|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

           
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4 tw-text-sm md:tw-sticky md:tw-top-20">
        <v-card v-if="demande_car" class="">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small color="primary">Ajouter une offre</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-card>
              <v-file-input outlined v-model="selectedFile" accept="application/pdf" multiple @change="handleFileChange" />
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
       items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/admin/dashboard',
        },
        {
          text: 'Liste des Voitures',
          disabled: false,
          href: '/admin/location-voiture/',
        },

         {
          text: 'Liste de Demande de Reservation de Voiture',
          disabled: false,
          href: '/admin/location-voiture/liste-demande-cars/',
        },
        {
          text: 'Demande de Reservation de Voiture',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      selectedFile: null,
      demande_car_loading: false,
      demande_car: null,
    }
  },

  async mounted() {
    await this.getCarById()
  },

  methods: {
    async getCarById() {
      await axios.get(`/reservation-car/${this.$route.params.id}`)
        .then(response => {
          this.demande_car = response.data?.reservation
        }).catch(error => {

          console.log(error)
      })
    },
  watch: {

  },
}
}
</script>

<style scoped>

</style>
