<template>
  <div>
    <v-row class="ma-2">
      <v-col sm="12" md="3" cols="12">
        <v-card dark color="#607d8b">
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Stations de voyages
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="blue">mdi-city</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Publicités actives
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="orange">mdi-account-group-outline</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Evenements à venir
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Services
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Services
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Services
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Services
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card color="#607d8b" dark>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-card-title>
                Services
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold">
                0
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-avatar
                size="80"
                color="#fff"
              >
                <v-icon x-large size="100" color="green">mdi-account</v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-4 mt-4 fill-height">
      <v-card elevation="2" width="100%">
        <v-card-title>
          <h1 class="text-h4 text-dark">Calendrier des évenements à venir</h1>
          <v-spacer/>
          <v-btn large color="accent" class="tw-py-2 tw-rounded-full">
            <v-icon size="25" color="white">
              mdi-calendar
            </v-icon>
            <v-spacer/>
            <span class="mx-2">Nouvel Evenement</span>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-col cols="12">
            <v-sheet height="64">
              <v-toolbar
                flat
              >
                <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
                >
                  Aujourd'hui
                </v-btn>
                <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="prev"
                >
                  <v-icon small>
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="next"
                >
                  <v-icon small>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu
                  bottom
                  right
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Jour</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Semaine</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Mois</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                      <v-list-item-title>4 jours</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
              ></v-calendar>
              <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
              >
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    :color="selectedEvent.color"
                    dark
                  >
                    <v-btn icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text>
                    <span v-html="selectedEvent.details"></span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="secondary"
                      @click="selectedOpen = false"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  layout: 'admin',
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Ce Mois',
      week: 'Cette Semaine',
      day: 'Ce Jour',
      '4day': 'Dans 4 Jours',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = 4

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style scoped>

</style>
