<template>
  <material-card class="card-tabs" color="primary">
    <template v-slot:header>
      <v-tabs v-model="tabsReservationVols" background-color="transparent" slider-color="white">
        <span class="subheading font-weight-light mx-3" style="align-self: center">Dernieres reservations de vols </span>
        <v-tab class="mr-3">
          <v-icon class="mr-2">mdi-bug</v-icon>
          En attente
        </v-tab>
        <v-tab class="mr-3">
          <v-icon class="mr-2">mdi-check</v-icon>
          En cours de traitement
        </v-tab>
        <v-tab>
          <v-icon class="mr-2">mdi-cloud</v-icon>
          Déjà traité
        </v-tab>
        <v-spacer/>
        <v-btn v-if="!getall" @click="$router.push('/admin/reservation')" text class="mr-2">Voir tout</v-btn>
      </v-tabs>
    </template>

    <v-tabs-items v-model="tabsReservationVols">
      <v-tab-item>
        <v-list class="py-0">
          <v-list-item
            v-for="reservation in reservationsvolsData"
            :key="reservation._id"
          >
            <v-list-item-avatar>
              <v-icon
                class="grey lighten-1"
                dark
              >
                mdi-folder
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{reservation.customer.firstname}} {{reservation.customer.lastname}}, {{reservation.customer.lastPhoneNumber.code }} {{reservation.customer.lastPhoneNumber.number }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{reservation.typeClasse}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                class="tw-text-white"
                :color="reservation.processedBy ? 'green darken-2': 'primary darken'"
                small
                @click="getReservationDetail(reservation._id)"
              >
                <v-icon small color="">mdi-hand-back-left</v-icon>
                <span v-if="reservation.processedBy">continuer le traitement</span>
                <span v-else>commencer le traitement</span>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <div v-if="getall" class="text-center">
          <v-pagination
            v-model="reservationsvols.page"
            :length="reservationsvols.totalPages"
            :total-visible="5"
            @next="nextPageReservationsvols"
            @input="numberPageReservationsvols"
            @previous="prevPageReservationsvols"
          ></v-pagination>
        </div>
      </v-tab-item>

      <v-tab-item>
        <v-list class="py-0">
          <v-list-item
            v-for="reservation in procesessings_reservationsvols"
            :key="reservation._id"
          >
            <v-list-item-avatar>
              <v-icon
                class="grey lighten-1"
                dark
              >
                mdi-folder
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{reservation.customer.firstname}} {{reservation.customer.lastname}}, {{reservation.customer.lastPhoneNumber.code }} {{reservation.customer.lastPhoneNumber.number }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{reservation.typeClasse}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                class="tw-text-white"
                :color="reservation.processedBy ? 'green darken-2': 'primary darken'"
                small
                @click="getReservationDetail(reservation._id)"
              >
                <v-icon small color="">mdi-hand-back-left</v-icon>
                <span v-if="reservation.processedBy">continuer le traitement</span>
                <span v-else>commencer le traitement</span>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-tab-item>

      <v-tab-item>
        <v-list class="py-0">
          <v-list-item
            v-for="reservation in processed_reservationsvols"
            :key="reservation._id"
          >
            <v-list-item-avatar>
              <v-icon
                class="grey lighten-1"
                dark
              >
                mdi-folder
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{reservation.customer.firstname}} {{reservation.customer.lastname}}, {{reservation.customer.lastPhoneNumber.code }} {{reservation.customer.lastPhoneNumber.number }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{reservation.typeClasse}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                class="tw-text-white"
                :color="reservation.processedBy ? 'green darken-2': 'primary darken'"
                small
                @click="getReservationDetail(reservation._id)"
              >
                <v-icon small color="">mdi-hand-back-left</v-icon>
                <span v-if="reservation.processedBy">continuer le traitement</span>
                <span v-else>commencer le traitement</span>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </material-card>
</template>

<script>
import Pusher from "pusher-js";
import sound from '../assets/beep.mp3'
export default {
  name: "ReservationsVols",
  props: {
    getall: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      errorMsg: null,
      tabsReservationVols: null,
      pusher: new Pusher('e81f2769b500679d8e80', {
        cluster: 'mt1'
      }),
      reservationsvols: [],
      procesessings_reservationsvols: [],
      flightReservationSound: null,
      processed_reservationsvols: []
    }
  },
  computed: {
    reservationsvolsData(){
      if(this.getall)
        return this.reservationsvols.docs

      return this.reservationsvols
    },
  },
  mounted() {
    this.flightReservationSound = new Audio(sound);
    this.getLatestFlightReservation()
    this.getLatestProcessingsFlightReservation()
    this.suscribeToReceiveNewRequests()
  },
  methods: {
    async nextPageReservationsvols(){
      await this.getLatestFlightReservation(`page=${this.reservationsvols.nextPage}`)
    },
    async numberPageReservationsvols(page){
      await this.getLatestFlightReservation(`page=${this.reservationsvols.nextPage}`)
    },
    async prevPageReservationsvols(){
      await this.getLatestFlightReservation(`page=${this.reservationsvols.prevPage}`)
    },
    async getLatestFlightReservation(query = null){
      const url = this.getall?`/reservation-vol/admin-get-latest-flight-reservation?getall=${true}`:"/reservation-vol/admin-get-latest-flight-reservation?getall=false"
      const response = await axios.get(url)
        .then(res => res.data)
        .catch(error => error.response)

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      this.reservationsvols = response.latestreservations
    },
     async getLatestProcessingsFlightReservation(){
      const response = await axios.get("/reservation-vol/admin-get-latest-processing-flight-reservation")
        .then(res => res.data)
        .catch(error => error.response)

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      this.procesessings_reservationsvols = response.latestreservations
    },
    async getLatestProcessedFlightReservation(){
      const response = await axios.get("/reservation-vol/admin-get-latest-processed-flight-reservation")
        .then(res => res.data)
        .catch(error => error.response)

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      this.processed_reservationsvols = response.latestreservations
    },
    suscribeToReceiveNewRequests(){
      let self = this
      let channel = this.pusher.subscribe('reservationvol');
      channel.bind('new', (data) => {
        self.getLatestFlightReservation()
      });

      channel.bind('beginprocess', (data) => {
        console.log(data)
        self.getLatestFlightReservation()
      });
    },
  }
}
</script>

<style scoped>

</style>
