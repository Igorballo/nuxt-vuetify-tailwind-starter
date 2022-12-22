<template>
  <v-container fluid>
    <div>

      <v-data-table no-data-text="aucune donneé" :headers="headers" :items="visa" class="elevation-1 tw-text-sm">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>La Liste de Toutes Les Demandes de Reservations de Visa & Assurance</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" @click="initialize">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-toolbar>
        </template>

        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.customer.email }}</td>
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <td class="text-xs-right">{{ item.customer.lastname }} {{ item.customer.firstname }}</td>
        </template>

        <template v-slot:[`item.telephone`]="{ item }">
          <td class="text-xs-right">{{ item.customer.lastPhoneNumber.code }} {{ item.customer.lastPhoneNumber.number }}</td>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <td class="text-xs-right">
            <v-btn @click="$router.push(`/admin/visa-assurance/${item._id}`)" ><v-icon color="grey arken-1">mdi-eye</v-icon></v-btn>
          </td>
        </template>



      </v-data-table>
    </div>
  </v-container>
</template>

<script>
// import Editor from '../components/helper/Editor.vue';
import Pusher from "pusher-js";

export default {
  // components: { Editor },
  layout: "admin",
  data() {
    return {
      pusher: new Pusher('e81f2769b500679d8e80', {
        cluster: 'mt1'
      }),
      visa: [],
      headers: [
        {
          text: 'Nom & Prénoms',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'customer.email'
        },
        {
          text: 'Numéro de Telephone',
          value: 'telephone'
        },
        {
          text: 'Aéroport de Depart',
          value: 'airportDepart.name'
        },
        {
          text: 'Aéroport de Destination',
          value: 'airportDestination.name'
        },
        {
          text: 'Actions',
          value: 'actions'
        }
      ],

      editedIndex: -1,
      isEditing: false,
      btnloading: false,

    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  created() {
    this.initialize()
  },
  mounted() {
    this.suscribeToReceiveNewRequests()
  },
  methods: {

    getLatestVisaReservation() {
      axios.get('/visa-request')
        .then(response => {
          console.log(response);
          this.visa = response.data.latestreservations;
        })
    },
    initialize() {
      this.getLatestVisaReservation();

    },

    suscribeToReceiveNewRequests() {
      let self = this
      let channel = this.pusher.subscribe('visaRequest');
      channel.bind('new', (data) => {
        self.getLatestVisaReservation()
      });

    },
    deleteItem(item) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment supprimer ce message ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.delete('/contacts/delete-contacts' + item._id)
            .then(response => {
              this.showToast('success', 'Message supprimée avec succès')
              this.initialize()
            })
            .catch(error => {
              this.showToast('error', 'Une erreur s\'est produite')
            })
          Swal.hideLoading()
        },
        allowOutsideClick: () => !Swal.isLoading()
      })

    },
    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    complete(index) {
      this.list[index] = !this.list[index];
    },

  },
};
</script>

