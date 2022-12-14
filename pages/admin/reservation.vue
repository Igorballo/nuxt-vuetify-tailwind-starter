<template>
  <v-container fluid>
    <v-row class="">
      <v-col cols="12" lg="12">
        <reservations-vols getall/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {

    }
  },
  methods: {
  },
};
</script>
