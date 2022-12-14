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
        <reservations-vols/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  // components: { Editor },
  layout: "admin",
  data() {
    return {
      currentMonthFlightReservationCount: 0,
      errorMsg: null,
    };
  },
  mounted(){
    this.currentMonthFlightReservation()
  },
  methods: {
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
  },
};
</script>
