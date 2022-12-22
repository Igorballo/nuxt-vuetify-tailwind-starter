<template>
  <v-container fluid>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-overlay v-if="!demande_tourisme"/>
    <v-row v-else>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>

      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="demande_tourisme">
          <v-card-title>
            Informations du client
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">{{ demande_tourisme.customer.passportId }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom</span>
                <span class="tw-text-lg">{{ demande_tourisme.customer.lastname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Prénoms</span>
                <span class="tw-text-lg">{{ demande_tourisme.customer.firstname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adresse</span>
                <span class="tw-text-lg">{{ demande_tourisme.adresse }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Téléphone</span>
                <span
                  class="tw-text-lg">
                  <a :href="`tel:${demande_tourisme.customer.lastPhoneNumber.number }`">{{
                      demande_tourisme.customer.lastPhoneNumber.code
                    }} {{ demande_tourisme.customer.lastPhoneNumber.number }}</a>
                  </span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Email</span>
                <span
                  class="tw-text-lg">
                   <a :href="`mailto:${demande_tourisme.customer.email }`">{{ demande_tourisme.customer.email }}</a>
                    </span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card v-if="demande_tourisme" class="tw-mb-6">
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations de la demande de Tourisme</h2>
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_tourisme.dateDepart|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de retour</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip v-if="demande_tourisme.comebackDate !== null">{{ demande_tourisme.comebackDate|moment('DD / MM / YYYY') }}</v-chip>
                  <v-chip v-else>Aller simple</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Passagers</span>
                <span
                  class="tw-text-lg">{{
                    demande_tourisme.passengers.adultes + demande_tourisme.passengers.bebes + demande_tourisme.passengers.enfants
                  }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adultes</span>
                <span class="tw-text-lg">{{ demande_tourisme.passengers.adultes }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Enfants</span>
                <span class="tw-text-lg">{{ demande_tourisme.passengers.enfants }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Bébé</span>
                <span class="tw-text-lg">{{ demande_tourisme.passengers.bebes }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4 tw-text-sm md:tw-sticky md:tw-top-20">
        <v-card v-if="demande_tourisme" class="">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small color="primary">Ajouter une offre</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-card>
              <v-file-input outlined v-model="files" multiple label="Sélectionner les fichiers" />
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
          text: 'Liste de Demande de Tourisme',
          disabled: false,
          href: '/admin/tourisme/',
        },
        {
          text: 'Demande de Tourisme',
          disabled: true,
          href: '',
        },
      ],
      selectedFile: null,
      demande_tourisme_loading: false,
      demande_tourisme: null,
      files: []
    }
  },

  async mounted() {
    await this.getTourismeById()
  },

  methods: {
    async getTourismeById() {
      await axios.get(`/tourisme-request/${this.$route.params.id}`)
        .then(response => {
          this.demande_tourisme = response.data?.reservation
        }).catch(error => {

          console.log(error)
      })
    },
   async sendSupplyToClient() {
      const formData = new FormData();
  this.files.forEach((file) => {
    formData.append('files', file);
  });
    await  axios.post('/send-tourisme-offer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    },
}
}
</script>

<style scoped>

</style>
