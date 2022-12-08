<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="green"
          icon="mdi-airplane-takeoff"
          title="Reservations"
          sub-text="Ce mois"
          :value="currentMonthFlightReservationCount"
          sub-icon="mdi-calendar"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="orange"
          icon="mdi-store"
          title="Hébergements"
          value="0"
          sub-icon="mdi-calendar"
          sub-icon-color="error"
          sub-text="Ce mois"
          sub-text-color="text-primary"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="red"
          icon="mdi-car"
          title="Location voitures"
          subText="Ce mois"
          value="0"
          sub-icon="mdi-tag"
          sub-text="Ce mois"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="info"
          icon="mdi-cash"
          title="Chiffre d'affaire"
          value="0"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-col>
    </v-row>

    <v-row class="">
      <v-col cols="12" lg="12">
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
                Déjà traité
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>
                Rejetés
              </v-tab>
              <v-spacer/>
              <v-btn text class="mr-2">Voir tout</v-btn>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabsReservationVols">
            <v-tab-item v-for="n in 3" :key="n">
              <v-list class="py-0">
                <v-list-item
                  v-for="reservation in reservationsvols"
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
                      Hello world
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      class="tw-text-white"
                      color="primary darken-2"
                      small
                      @click="$router.push(`reservation-vol/${reservation._id}`)"
                    >
                      <v-icon small color="">mdi-hand-back-left</v-icon>
                      commencer le traitement
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Editor from '../components/helper/Editor.vue';
import Pusher from "pusher-js"
import sound from '../../assets/beep.mp3'
export default {
  // components: { Editor },
  layout: "admin",
  data() {
    return {
      flightReservationSound: null,
      currentMonthFlightReservationCount: 0,
      tabsReservationVols: null,
      reservationsvols: [],
      pusher: new Pusher('e81f2769b500679d8e80', {
        cluster: 'mt1'
      }),
      errorMsg: null,
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: 'Photos',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Recipes',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Work',
        },
      ],
    };
  },
  mounted(){
    this.flightReservationSound = new Audio(sound);
    this.getLatestFlightReservation()
    this.currentMonthFlightReservation()
    this.suscribeToReceiveNewRequests()
  },
  methods: {
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
    async currentMonthFlightReservation(){
      const response = await axios.get("/dashboard/get-this-month-flight-reservation")
        .then(res => res.data)
        .catch(error => error.response)

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      this.currentMonthFlightReservationCount = response.count
    },
    complete(index) {
      this.list[index] = !this.list[index];
    },
    async getLatestFlightReservation(){
      const response = await axios.get("/reservation-vol/admin-get-latest-flight-reservation")
      .then(res => res.data)
      .catch(error => error.response)

      if (response.data?.errors) {
        this.errorMsg = response.data.errors.msg
        return
      }

      this.reservationsvols = response.latestreservations
    }
  },
};
</script>
