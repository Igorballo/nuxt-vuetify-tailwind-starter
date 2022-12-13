<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :src="image"
    app
    color="grey darken-2"
    dark
    floating
    mobile-breakpoint="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"/>
    </template>

    <v-list-item>
      <div class="tw-bg-white tw-px-3 tw-py-2 tw-mx-2 tw-my-2 tw-w-full tw-rounded-md">
        <img src="~/assets/img/logo.png" class="tw-h-24 tw-w-full" contain/>
      </div>
    </v-list-item>

    <v-divider class="mx-3 mb-3"/>

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div/>

      <v-list-item v-for="(link, i) in links" :key="i" :to="link.to" active-class="primary white--text">
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text"/>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list nav>
        <v-list-item to="#">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>

          <v-list-item-title class="font-weight-light">Paramètres</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {mapMutations, mapState} from 'vuex';

export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    links: [
      {
        to: '/admin/dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Tableau de bord',
      },
      {
        to: '/admin/reservation',
        icon: 'mdi-airplane-takeoff',
        text: 'Réservations',
      },
      {
        to: '/admin/hebergement',
        icon: 'mdi-store',
        text: 'Hébergements',
      },
      {
        to: '/admin/location-voiture',
        icon: 'mdi-car',
        text: 'Location voiture',
      },
      {
        to: '/admin/tourisme',
        icon: 'mdi-view-dashboard',
        text: 'Tourisme',
      },
      {
        to: '/admin/utilisateur',
        icon: 'mdi-account',
        text: 'Utilisateur',
      },
       {
        to: '/admin/contact',
        icon: 'mdi-message',
        text: 'Message',
      },

    ],
  }),

  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
  },
};
</script>
