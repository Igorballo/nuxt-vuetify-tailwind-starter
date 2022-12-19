<template>
  <v-container fluid>
    <div>
   
    <v-data-table no-data-text="aucune donneé" :headers="headers" :items="visa" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>La Liste de Tous Les Demandes de Reservations de Visa & Assurance</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="mx-2" @click="initialize">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          
        </v-toolbar>
      </template>

      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.customer.lastname }}</td>
        <td class="text-xs-right">{{ props.item.customer.firstname }}</td>
        <td class="text-xs-right">{{ props.item.customer.email }}</td>
        <td class="text-xs-right">{{ props.item.customer.phone }}</td>
        <td class="text-xs-right">{{ props.item.customer.passportId }}</td>
      </template>


      <template v-slot:[`item.actions`]="{ item }">
        <div class="tw-inline-block">
         
    <v-dialog
      v-model="showMessage"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          v-on="on"
        >
        <v-icon small color="primary">
          mdi-eye
        </v-icon>
        
        </v-btn>
        
      </template>

      <v-card>
      
        <v-card-title class="text-h5 grey lighten-2">
          {{item.customer.lastname}} {{item.customer.firstname}} (<span class="tw-text-red-600 tw-text-md"><a :href="`mailto:${item.customer.email }`">{{ item.customer.email }}</a></span>, <a :href="`tel:${item.phone}`">{{item.phone}}</a>)
        </v-card-title>

        <v-card-text class="text-h6 white lighten-2 tw-pt-2">
         {{ item.message}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="showMessage = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        
       
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Rafraîchir
        </v-btn>
      </template> -->
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
        text: 'Nom',
        value: 'customer.lastname',
      },
       {
        text: 'Prenoms',
        value: 'customer.lastname',
      },
      {
        text: 'Email',
        value: 'customer.email'
      },
      {
        text: 'Numéro de Telephone',
        value: 'customer.lastPhoneNumber.number'
      },
      {
        text: 'ID Passport',
        value: 'customer.passportId'
      },
     
      {
        text: 'Airport de Depart',
        value: 'airportDepart.name'
      },
       {
        text: 'Airport de Destination',
        value: 'airportDestination.name'
      },
      {
        text: 'Date d\'Arrivé',
        value: 'dateDepart'
      },
      {
        
        text: 'Date de Depart',
        value: 'comebackDate'
      },
      {
        
        text: 'Nombre de Passagers',
        value: 'passengers.adultes'
      },
      

    ],
    
    editedIndex: -1,
    isEditing: false,
    btnloading: false,
      
    };
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
   created () {
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
     
  
    suscribeToReceiveNewRequests(){
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
          await axios.delete('/contacts/delete-contacts'+ item._id)
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
    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    complete(index) {
      this.list[index] = !this.list[index];
    },
    
  },
};
</script>

