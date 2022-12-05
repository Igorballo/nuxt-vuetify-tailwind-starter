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
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
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

          <v-tabs-items v-model="tabs">
            <v-tab-item v-for="n in 3" :key="n">
              <v-list three-line class="py-0">
                <v-list-item v-for="i in 3" @click="">
                  <div class="tw-flex tw-items-center tw-text-lg tw-gap-2 tw-pr-5">
                    <span class="">12/08/2022</span>
                    <span class="">16h45min</span>
                  </div>

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
  name: "dashboard",
  layout: "admin",
  data() {
    return {
      reservation_vols: [],
      editorText:
        '<h2>Material Dashboard</h2><blockquote><p>made by Rekryt (vk.com/krupkin.sergey)<br>sep 2019</p></blockquote><p>&nbsp;</p><p>Special thanks to:<br>https://nuxtjs.org<br>https://vuetifyjs.com<br>https://www.creative-tim.com</p>',
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 640px)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right',
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right',
        },
      ],
      items: [
        {
          id: 1,
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738',
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738',
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142',
        },
        {
          id: 4,
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735',
        },
        {
          id: 5,
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542',
        },
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false,
      },
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },

    async getAllVolsReservations() {
      const response = await axios.get('/bus-manager/reservations')
        .then(resp => resp.data)
        .catch(error => {
          return;
        })
      this.reservation_vols = response.reservations
    },
  },
};
</script>
