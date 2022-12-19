<template>
  <v-container fluid>
    <div>
   
    <v-data-table no-data-text="aucune donneé" :headers="headers" :items="contacts" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>La Liste de Tous Les Messages</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="mx-2" @click="initialize">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          
        </v-toolbar>
      </template>

      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.number }}</td>
        <td class="text-xs-right">{{ props.item.message }}</td>
      </template>


      <template v-slot:[`item.actions`]="{ item }">
        <div class="tw-inline-block">
         <v-icon small color="red"  @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
          {{item.nom}} (<span class="tw-text-red-600 tw-text-md"><a :href="`mailto:${item.email }`">{{ item.email }}</a></span>, <a :href="`tel:${item.phone}`">{{item.phone}}</a>)
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

export default {
  // components: { Editor },
  layout: "admin",
  data() {
    return {
    showMessage: false,
    contacts: [],
    headers: [
      {
        text: 'Nom Complet',
        align: 'start',
        sortable: false,
        value: 'nom',
      },
      {
        text: 'Email',
        value: 'email'
      },
      {
        text: 'Numéro de Telephone',
        value: 'phone'
      },
      {
        text: 'Message',
        value: 'message'
      },

      { text: 'Actions', value: 'actions', sortable: false },
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
  methods: {
  
     getMessage() {
      axios.get('/contacts/get-contacts')
        .then(response => {
          console.log(response);
          this.contacts = response.data.contacts;
        })
    },
    initialize() {
      this.getMessage();
    
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

