<template>
  <div class="tw-bg-white tw-flex tw-flex-col">

    <div class="tw-w-full tw-h-full tw-bg-center tw-bg-cover"
         style="background-image: url(https://res.cloudinary.com/tourhq/image/upload/fl_progressive,g_auto,q_auto:best,f_auto,h_600,w_1600,c_fill/toxbluxsyq8hgdy3fjxt);">
      <div class="tw-w-full tw-h-full tw-py-20 tw-flex tw-flex-col tw-items-center lg:tw-flex-row lg:space-x-6 lg:tw-space-x-12 tw-justify-center tw-bg-gray-900 tw-bg-opacity-50">
        <div class="tw-flex tw-flex-col tw-w-full tw-max-w-md md:tw-max-w-xl tw-px-4">
          <div class="tw-flex">
            <a
              class="tw-flex tw-w-36 tw-items-center tw-py-4 tw-border-r-2 tw-border-gray-300 tw-rounded-tl-lg tw-text-center tw-text-gray-700 tw-bg-white tw-px-2 sm:tw-px-4 tw-whitespace-nowrap focus:tw-outline-none">
              <svg class="tw-w-6 tw-h-6 tw-flex-none" fill="none" stroke="#eab308" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
              </svg>
              <span class="tw-mx-1 tw-text-sm sm:tw-text-base tw-text-green-800 tw-font-semibold">Tickets Bus</span>
            </a>
            <a
              class="tw-flex tw-w-36 tw-items-center tw-py-4 tw-rounded-tr-lg tw-text-center tw-text-gray-700 tw-bg-white tw-px-2 sm:tw-px-4 tw-whitespace-nowrap cursor-base focus:tw-outline-none">
              <svg class="tw-w-6 tw-h-6" fill="none" stroke="#eab308" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span class="tw-mx-1 tw-text-sm sm:tw-text-base tw-text-green-800 tw-font-semibold">Hôtels</span>
            </a>
          </div>
          <div class="tw-w-full tw-bg-white lg:tw-pb-8 tw-pt-4 tw-px-4 lg:tw-px-6 tw-shadow shadow-gray-700 tw-rounded tw-rounded-tl-none">
            <p class="tw-text-blue-800 tw-text-xl tw-font-semibold tw-uppercase tw-mb-4 tw-text-left">Aller</p>
            <form action="" method="post" class="tw-text-sm">
              <div class="tw-flex tw-flex-col tw-w-full md:tw-gap-4 md:tw-items-center md:tw-flex-row">

                <v-autocomplete label="Adresse de départ" return-object v-model="selected_depart" :items="departs" outlined>
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click:close="removeSelectedDepart(data.item)"
                    >
                      <v-avatar left>
                        <v-icon>mdi-home</v-icon>
                      </v-avatar>
                      {{ data.item.adresse }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-item-content v-text="data.item"></v-list-item-content>
                    </template>
                    <template v-else>
                      <v-list-item-avatar>
                        <v-icon>mdi-home</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.adresse"></v-list-item-title>
                        <v-list-item-subtitle v-html="data.item.ville?.nom"></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>

                <span class="tw-hidden md:tw-inline-flex tw-items-center tw-justify-center tw-pb-6">
                    <svg class="tw-w-8 tw-h-8 tw-col-span-1 tw-rounded-full tw-border tw-border-green-800 tw-p-1"
                         fill="none" stroke="#065f46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </span>

                <v-autocomplete label="Adresse d'arrivée" :items="destinations" return-object v-model="selected_destinantion" outlined>
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click="data.select"
                      @click:close="removeSelectedDestination(data.item)"
                    >
                      <v-avatar left>
                        <v-icon>mdi-home</v-icon>
                      </v-avatar>
                      {{ data.item.adresse }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-item-content v-text="data.item"></v-list-item-content>
                    </template>
                    <template v-else>
                      <v-list-item-avatar>
                        <v-icon>mdi-home</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.adresse"></v-list-item-title>
                        <v-list-item-subtitle v-html="data.item.ville?.nom"></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </div>


              <div class="tw-grid tw-grid-cols-1">
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-dialog
                      ref="dialog"
                      v-model="modalDay"
                      :return-value.sync="date_depart"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          outlined
                          v-model="date_depart"
                          label="Date de départ"
                          hint="AAAA-MM-JJ"
                          readonly
                          v-bind="attrs"
                          v-on="on"

                        >
                        </v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date_depart"
                        scrollable

                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="modalDay = false"
                        >
                          Annuler
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date_depart)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
              </div>


              <div class="tw-mt-4 md:tw-mt-0 tw-flex tw-flex-col tw-gap-4 md:tw-mx-8 md:tw-flex-row md:tw-justify-center tw-mb-6">
                <button @click.prevent="rechercherTickets"
                        class="tw-w-full tw-px-6 tw-whitespace-nowrap tw-py-2 tw-text-white md:tw-text-lg tw-font-semibold tw-bg-yellow-500 tw-rounded tw-text-center">
                  Rechercher des voyages
                </button>
                <a href="#"
                   class="tw-w-full tw-px-6 tw-whitespace-nowrap tw-py-2 tw-text-green-800 md:tw-text-lg tw-font-semibold tw-bg-white tw-rounded tw-border tw-border-yellow-500 focus:tw-bg-yellow-500 tw-text-center">Planifier un voyage</a>
              </div>
            </form>
          </div>
        </div>


        <div class="tw-max-w-full  tw-mx-auto tw-pt-20">
          <div class="tw-w-full tw-bg-center tw-shadow-md">
            <img class="tw-h-full tw-w-full tw-rounded-lg" src="../assets/images/file-icons/pub1.svg">
          </div>
        </div>
      </div>
    </div>

    <div class="tw-mx-6 lg:tw-mx-16 tw-my-16">
      <img class="tw-shadow-sm tw-shadow-gray-400 tw-h-full tw-w-[100vw] tw-rounded" src="../assets/images/file-icons/pub-fdkm.svg">
    </div>

    <div class="tw-px-6 lg:tw-px-20">
      <div class="tw-flex tw-flex-col tw-space-y-8 tw-mb-6">
        <div class="tw-grid md:tw-grid-cols-3 tw-gap-8">
          <div class="col-span-1 tw-h-56 tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg" style="background-image: url(https://togoenlive.info/wp-content/uploads/2019/07/5-1.jpg);">
            <span class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-italic tw-rounded tw-bg-yellow-400 tw-p-2">Place de l'indépendence</span>
          </div>

          <div class="col-span-1 tw-h-56 tw-w-full tw-relative tw-bg-cover tw-bg-center tw-rounded-lg" style="background-image: url(https://www.lenouveaugabon.com/images/djmediatools/10-photos-monuments-et-immeubles-lome/180212001_colombe_de_la_paix_lome_-_togo.jpg);">
            <span class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-italic tw-rounded tw-bg-yellow-400 tw-p-2">Colombe de la Paix</span>
          </div>

          <div class="col-span-1 tw-h-56 tw-w-full tw-relative tw-bg-cover tw-rounded-lg" style="background-image: url(https://www.sedibasafaris.com/mes-upla/2020/03/Lom%C3%A9-togo.jpg);">
            <span class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-italic tw-rounded tw-bg-yellow-400 tw-p-2">Hôtel 2 Février</span>
          </div>
        </div>
        <div class="tw-grid md:tw-grid-cols-2 tw-gap-8">
          <div class="col-span-1 tw-h-72 tw-w-full tw-relative tw-bg-cover tw-rounded-lg" style="background-image: url(https://beninwebtv.com/wp-content/uploads/2021/08/lome5-1.png);">
            <span class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-italic tw-rounded tw-bg-yellow-400 tw-p-2">Lomé</span>
          </div>

          <div class="col-span-1 tw-h-72 tw-w-full tw-relative tw-bg-cover tw-rounded-lg" style="background-image: url(https://beninwebtv.com/wp-content/uploads/2021/08/lome5-1.png);">
            <span class="tw-absolute tw-left-6 tw-bottom-4 tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-white tw-italic tw-rounded tw-bg-yellow-400 tw-p-2">Siège BTCI</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Call To Action Section -->
    <CallToAction/>

    <!--  Tickets Populaire section  -->
    <section class="tw-mt-12 tw-mb-12 tw-mx-6 md:tw-mx-12 lg:tw-mx-20">
      <p class="tw-mb-6 tw-text-red-500 tw-text-lg md:tw-text-2xl lg:tw-text-3xl tw-font-extrabold tw-uppercase">Tickets populaire</p>
      <div class="tw-flex tw-flex-col tw-space-y-4 md:space-y-0 xl:space-y-0 md:tw-flex-row tw-items-center tw-justify-evenly md:tw-space-x-12 md:tw-space-x-8">
        <div class="tw-w-full md:tw-w-1/3 tw-py-4 tw-px-4 tw-whitespace-nowrap tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-text-white tw-text-lg lg:tw-text-2xl tw-font-semibold tw-rounded tw-shadow-lg tw-text-center">Lomé-Kara</div>
        <div class="tw-w-full md:tw-w-1/3 tw-py-4 tw-px-4 tw-whitespace-nowrap tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-text-white tw-text-lg lg:tw-text-2xl tw-font-semibold tw-rounded tw-shadow-lg tw-text-center">Lomé-Sokodé</div>
        <div class="tw-w-full md:tw-w-1/3 tw-py-4 tw-px-4 tw-whitespace-nowrap tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-text-white tw-text-lg lg:tw-text-2xl tw-font-semibold tw-rounded tw-shadow-lg tw-text-center">Lomé-Tsévié</div>
        <div class="tw-w-full md:tw-w-1/3 tw-py-4 tw-px-4 tw-whitespace-nowrap tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-text-white tw-text-lg lg:tw-text-2xl tw-font-semibold tw-rounded tw-shadow-lg tw-text-center">Lomé-Kpalimé</div>
        <div class="tw-w-full md:tw-w-1/3 tw-py-4 tw-px-4 tw-whitespace-nowrap tw-bg-gradient-to-r tw-from-red-600 tw-to-yellow-500 tw-text-white tw-text-lg lg:tw-text-2xl tw-font-semibold tw-rounded tw-shadow-lg tw-text-center">Lomé-Dapaong</div>
      </div>
    </section>

  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  layout: "karaevents",
  data() {
    return {
      payInProgress: false,
      selected_depart: null,
      selected_destinantion: null,
      destinations: [],
      departs: [],
      station: [],
      ticket: [],
      menu: false,
      modal: false,
      menu2: false,
      errors: [],
      date_depart: null,
      modalDay: false,
      my_tickets: [],
      loadingTicket: false,
      loadingStation: false,
      ticketError: false,
      stationError: false
    }
  },
  // Fetches posts when the component is created.
  async created(data) {
    await this.getPlanVoyage()
    this.selected_depart = this.selected_recherche_ticket_adresse_depart
    this.date_depart = this.selected_recherche_ticket_date_depart
    this.selected_destination = this.selected_recherche_ticket_adresse_destination
  },

  methods: {
    removeSelectedDepart (item) {
      this.selected_depart = null
    },
    removeSelectedDestination (item) {
      this.selected_destinantion = null
    },
    getPlanVoyage(){
      axios.get('/user/plan-voyages')
        .then(response => {
          this.departs = response.data.adresses.departs
          this.destinations = response.data.adresses.destionations
        })
    },
    reserverTicket(ticket) {
      if (!this.isAuthenticated) {
        // save the reservation in state
        this.$store.commit('ticket_bus/SET_TEMP_TICKET', ticket)

        // set state message
        const message = {
          type: 'warning',
          text: 'Veuillez vous connecter ou vous inscrire pour continuer'
        }
        this.$store.commit('global/SET_TEMP_MESSAGE', message)

        //redirect to login
        this.$router.push('/login')
      } else {
        Swal.fire({
          icon: 'question',
          title: "",
          text: "Nous allons demander la réservation de ce ticket dans votre compte a la station. Veuillez cliquer sur Ok pour continuer",
          reverseButtons: true,
          showCancelButton: true,
          confirmButtonText: "Ok",
          cancelButtonText: "annuler",
          preConfirm: async () => {
            Swal.showLoading()
            const response = await axios.post(`/ticket/reservation/${ticket.id}`)
            Swal.hideLoading()
          },
          allowOutsideClick: () => !Swal.isLoading()
        })
      }
    },
    async payerTicket(reservation) {
      this.payInProgress = true
      const response = await axios.post('/buy-ticket-bus/' + reservation.id)
        .then(resp => {
          if (!resp.error) {
            window.open(resp.data.transaction_link, '_blank');

          }
          this.payInProgress = true
        })
        .catch(error => {
          this.payInProgress = true
        })
    }
  },
  computed: {
    ...mapGetters('ticket_bus', [
      'temp_ticket'
    ])
  }

}
</script>

<style lang="scss" scoped>

</style>
