<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="green"
          icon="mdi-airplane-takeoff"
          title="Reservations"
          sub-text="Ce mois"
          value="25"
          sub-icon="mdi-calendar"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="orange"
          icon="mdi-store"
          title="Hébergements"
          value="12"
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
          value="75"
          sub-icon="mdi-tag"
          sub-text="Ce mois"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
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
              <v-btn @click="$router.push('/admin/reservation')" text class="mr-2">Voir tout</v-btn>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabsReservationVols">
            <v-tab-item v-for="n in 3" :key="n">
              <v-list three-line class="py-0">
                <v-list-item @click="complete(0)">
                  <v-list-item-action class="align-self-center">

                  </v-list-item-action>

                  <v-list-item-title>
                    Sign contract for "What are conference organized afraid of?"
                  </v-list-item-title>

                  <v-btn
                    class="tw-text-white"
                    color="primary"
                    small
                    @click="$router.push('reservation-vol/sjsjsk1882828')"
                  >
                    <v-icon small color="">mdi-hand-back-left</v-icon>
                    commencer le traitement
                  </v-btn>
                </v-list-item>
                <v-divider />
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

export default {
  // components: { Editor },
  layout: "admin",
  data() {
    return {
      tabsReservationVols: null
    };
  },
  mounted(){
    this.getLatestFlightReservation()
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
    async getLatestFlightReservation(){
      const response = await axios.get("/reservation-vol/admin-get-latest-flight-reservation")
    }
  },
};
</script>
