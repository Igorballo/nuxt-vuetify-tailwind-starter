<template>
  <v-container fluid>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
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
       items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/admin/dashboard',
        },
        {
          text: 'Reservation Vols',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

    }
  },
  methods: {
  },
};
</script>
