<template>
  <v-app class="pa-6">
    <v-app-bar
      class="main-header"
      height="75"
      fixed
      color='yellow'
      dark>
      <v-toolbar-title class="ml-4">
            <v-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer" x-large class="mr-4" color="black">
              mdi-menu
            </v-icon>
          <img v-if="$vuetify.breakpoint.mdAndUp" src="~/assets/images/MET.svg" alt="">
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        offset-y
        bottom
        nudge-bottom="10"
        left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="notificationsBadge ? notificationsBadge = !notificationsBadge : ''"
            v-bind="attrs"
            v-on="on"
            style="font-size: 28px"
            icon
            class="mr-2">
            <v-badge
              :value="notificationsBadge"
              color="error"
              :content="notifications.length"
              overlap>
              <v-icon
                style="font-size: 28px"
                color="black">mdi-bell-outline
              </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in notifications"
              :key="i">
              <v-list-item-icon class="mr-4 mb-1">
                <v-icon
                  :color="'black'"
                  v-text="item.icon">
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-menu
        min-width="180"
        offset-y
        bottom
        left
        nudge-bottom="10">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mr-0"
            icon
            v-bind="attrs"
            v-on="on">
            <v-icon
              color="black"
              style="font-size: 28px">mdi-account
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <div class="text-h5 grey--text text--darken-3 px-4 pt-4">{{ `${ user.nom } ${ user.prenom }` }}</div>
          <div class="subtitle-2 primary--text font-weight-regular px-4">{{ `${user.email}` }}</div>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in account"
              :key="i">
              <v-list-item-icon class="mr-4">
                <v-icon
                  :color="item.color"
                  v-text="item.icon">
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <div class="d-flex justify-center my-3">
            <v-btn
              width="80%"
              large
              outlined
              color="primary"
              class="text-capitalize"
              @click="logoutUser">Déconnexion
            </v-btn>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>


    <v-navigation-drawer
      app
      clipped
      color="accent"
      v-model="drawer"
      :mini-variant="!drawer"
      :width="sidebarWidth"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      :mini-variant-width="sidebarMinWidth"
      :class="{'drawer-mini': !drawer}">

      <v-row class="tw-mt-24 px-6" justify="center">
        <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12">
          <img src="~/assets/images/Ok.png" alt="">
        </v-col>
        <v-avatar
          color="white"
          size="73"
        >
          <v-img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></v-img>
        </v-avatar>
        <v-col>
          <span class="whitespace-nowrap tw-text-white uppercase">{{ `${ user.email }` }}</span>
          <v-chip>Super Admin</v-chip>
        </v-col>
      </v-row>
      <v-list class="mt-6">
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center">
            <v-col cols="6" class="py-5">
            <span
              style="padding-left: 32px"
              class="text-body-1 subheader tw-text-white"
              :class="(item.heading && drawer) ? 'show ' : 'hide'">
              {{ item.heading }}
              </span>
            </v-col>
            <v-col
              cols="6"
              class="text-center">
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-group
            color="primary"
            v-else-if="item.children && drawer"
            :key="item.title"
            v-model="item.model"
            append-icon="">
            <template v-slot:prependIcon>
              <v-icon color="white" size="28">{{ item.icon }}</v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  class="tw-text-white">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-slot:appendIcon>
              <v-icon color="white" size="28">mdi-menu-down</v-icon>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              link>
              <v-list-item-action v-if="child.icon">
                <v-icon color="white" size="">{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="tw-text-white">
                  {{ child.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            color="primary"
            v-else
            :key="item.text"
            :href="item.href ? item.href : null"
            :to="item.link === '#' ? null : item.link"
            link>
            <v-list-item-action>
              <v-icon
                size="28"
                color="white"
              >{{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="tw-text-white"
                link>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>


    <v-main class="tw-pt-28 px-6" :class="{ 'tw-ml-64': $vuetify.breakpoint.mdAndUp }">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "admin",
  data: () => ({
    drawer: true,
    searchCollapse: true,
    items: [
      {
        title: "Tableau de bord",
        icon: 'mdi-view-dashboard', link: '/admin/dashboard'
      },
      {
        title: "Services",
        icon: "mdi-grid-large",
        model: false,
        children: [
          {
            title: 'Stations de bus',
            icon: 'mdi-home-modern',
            link: '/admin/stations-bus',
          }

        ]
      },
      {
        title: "Blog",
        icon: "mdi-newspaper",
        model: false,
        children: [
          {
            title: 'Catégories d\'article',
            icon: 'mdi-folder-multiple-outline',
            link: '/admin/blog/categories',
          },
          {
            title: 'Articles',
            icon: 'mdi-message-bulleted',
            link: '/admin/stations-bus',
          },
          {
            title: 'Tags',
            icon: 'mdi-home',
            link: '/admin/stations-bus',
          }
        ]
      },
      {
        title: "Publicités",
        icon: "mdi-poll",
        model: false,
        children: [
          {
            title: 'Gérer les pubs',
            icon: 'mdi-settings-box',
            link: '/admin/stations-bus',
          },
        ]
      },
      {
        title: "Parametres",
        icon: 'mdi-cog',
        link: '/admin/settings'
      },


      {divider: true},
      {heading: 'Aide'},
      {title: 'Support', icon: 'mdi-forum', href: 'https://flatlogic.com/forum/'},
      {title: 'FAQ', icon: 'mdi-help-circle-outline', href: 'https://flatlogic.com/templates/vue-material-template'},
    ],
    sidebarWidth: 240,
    sidebarMinWidth: 96,
    notifications: [],
    messages: [],
    account: [
    ],
    notificationsBadge: true,
    messageBadge: true
  }),
  methods: {
    logOut: function () {
      window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
