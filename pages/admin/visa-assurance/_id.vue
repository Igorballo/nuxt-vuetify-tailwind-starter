<template>
  <v-container fluid>
     <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-overlay v-if="!demande_visa"/>
    <v-row v-else>
      <v-col cols="12">
        <material-card class="card-tabs" color="primary">
          <h2 class="text-center tw-text-2xl">Demande de Réservation no</h2>
        </material-card>
      </v-col>

      <v-col class="tw-flex tw-flex-col tw-gap-4">
        <v-card v-if="demande_visa">
          <v-card-title>
            Informations du client
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Numéro Passport</span>
                <span class="tw-text-lg">{{ demande_visa.customer.passportId }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Nom</span>
                <span class="tw-text-lg">{{ demande_visa.customer.lastname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Prénoms</span>
                <span class="tw-text-lg">{{ demande_visa.customer.firstname }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Téléphone</span>
                <span
                  class="tw-text-lg">
                  <a :href="`tel:${demande_visa.customer.lastPhoneNumber.number }`">{{
                      demande_visa.customer.lastPhoneNumber.code
                    }} {{ demande_visa.customer.lastPhoneNumber.number }}</a>
                  </span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Email</span>
                <span
                  class="tw-text-lg">
                   <a :href="`mailto:${demande_visa.customer.email }`">{{ demande_visa.customer.email }}</a>
                    </span>
              </div>
            </div>

          </v-card-text>
        </v-card>

        <v-card v-if="demande_visa" class="tw-mb-6">
          <v-card-title class="mb-4">
            <h2 class="tw-text-xl">Informations du voyage de la demande de Visa</h2>
            <v-spacer/>
          </v-card-title>
          <v-card-text class="tw-px-8 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport de départ</span>
                <v-chip>{{ demande_visa.airportDepart?.name }}, {{
                    demande_visa.airportDepart?.country
                  }}
                </v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Aéroport d'arrivée</span>
                <v-chip>{{ demande_visa.airportDestination?.name }}, {{ demande_visa.airportDestination?.country }}
                </v-chip>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de départ</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip>{{ demande_visa.dateDepart|moment('DD / MM / YYYY') }}</v-chip>
                </div>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Date de retour</span>
                <div class="tw-flex tw-gap-2">
                  <v-chip v-if="demande_visa.comebackDate !== null">{{ demande_visa.comebackDate|moment('DD / MM / YYYY') }}</v-chip>
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
                    demande_visa.passengers.adultes + demande_visa.passengers.bebes + demande_visa.passengers.enfants
                  }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Adultes</span>
                <span class="tw-text-lg">{{ demande_visa.passengers.adultes }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Enfants</span>
                <span class="tw-text-lg">{{ demande_visa.passengers.enfants }}</span>
              </div>
            </div>
            <v-divider/>

            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-justify-between">
                <span class="tw-font-semibold tw-text-lg">Bébé</span>
                <span class="tw-text-lg">{{ demande_visa.passengers.bebes }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="4" class="tw-flex tw-flex-col tw-gap-4 tw-text-sm md:tw-sticky md:tw-top-20">
        <v-card v-if="demande_visa" class="">
          <v-card-title class="mb-4">
            <span>Liste des offres</span>
            <v-spacer/>
            <v-btn small color="primary">Ajouter une offre</v-btn>
          </v-card-title>
          <v-card-text class="tw-px-4 tw-flex tw-flex-col tw-gap-4">
            <v-card>
               <input outlined label="Photos" placeholder="Les Photos de l'Hôtel" multiple
                               @change="handleUploadChange" id="images-upload" type="file" accept="image/*"
                               style="display:none" multiple hidden/>
                        <div
                          class="tw-my-4 tw-flex tw-justify-center tw-h-[fit-content] tw-border tw-rounded tw-bg-white">
                          <div @click="triggerUpload" class="tw-w-full tw-bg-slate-100 tw-mx-1 tw-my-1 tw-rounded-md">
                            <div v-if="media.length === 0"
                                 class="tw-grid tw-justify-items-center tw-py-2 tw-my-2 hover:tw-cursor-pointer">
                              <div class="tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                              <p class="tw-text-md tw-font-weight">
                                Ajouter des photos ou vidéos
                              </p>
                              <p class="tw-text-sm">
                                ou faites glisser-deposer
                              </p>
                            </div>

                            <div class="tw-flex tw-gap-2 tw-flex-wrap tw-p-4" v-else>
                              <div class="tw-relative tw-p-2 tw-rounded-md tw-border tw-bg-white"
                                   v-for="(image, index) in media">
                                    <span @click.stop="removeImageUploaded(index)" class="tw-absolute tw-cursor-pointer tw-shadow-md tw-right-4 hover:tw-bg-red-700 tw-top-4 tw-rounded-full tw-bg-red-500 tw-text-white tw-text-sm tw-h-6 tw-w-6 tw-text-center">
                                      x
                                  </span>
                                <img class="tw-w-32 tw-h-32 tw-rounded-lg" :src="image.url">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
          text: 'Liste de Demande de Visa & Assurance',
          disabled: false,
          href: '/admin/visa-assurance/',
        },
        {
          text: 'Demande de Visa & Assurance',
          disabled: true,
          href: '/admin/location-voiture/',
        },
      ],
      media: [],
      selectedFile: null,
      demande_visa_loading: false,
      demande_visa: null,
    }
  },

  async mounted() {
    await this.getVisaById()
  },

  methods: {
    async getVisaById() {
      await axios.get(`/visa-request/${this.$route.params.id}`)
        .then(response => {
          this.demande_visa = response.data?.reservation
          console.log(this.demande_visa)
        }).catch(error => {

          console.log(error)
      })
    },
  triggerUpload() {
      let inputImage = document.getElementById("images-upload")
      inputImage.click()
    },
    removeImageUploaded(index) {
      this.media.splice(index, 1)
    },
    async handleUploadChange($event) {
      let files = $event.target.files
      for (var i = 0; i < files.length; i++) {
        let formData = new FormData
        let url = URL.createObjectURL(files[i])
        formData.set('image', files[i])

        let mediadata = {url: url, size: files[i].size, type: files[i].type, file: files[i]};
        console.log(mediadata)

        this.media.push(mediadata);

      }
    },
}
}
</script>

<style scoped>

</style>
