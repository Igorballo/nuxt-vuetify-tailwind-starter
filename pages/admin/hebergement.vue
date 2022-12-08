<template>
  <v-container fluid>
    <div>
   
    <v-data-table no-data-text="aucune donneé" :headers="headers" :items="hotels" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>La Liste de Tous Les Hébergement</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="mx-2" @click="initialize">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-btn @click="handleCreate" color="primary" dark class="mx-2">
            Ajouter Un Hôtel
          </v-btn>
          <v-btn @click="$router.push('/admin/hotels')" color="primary" dark class="mx-2">
            Les Demandes
          </v-btn>
          <v-dialog v-model="dialog" max-width="700px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter Un Hôtel</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="formBus" v-model="formHotel">
                    <div class="">

                         <v-text-field :rules="nomRules" outlined required label="Nom de l'Hôtel" placeholder="Nom de l'Hôtel" v-model="form.name"></v-text-field>
                          <v-file-input  outlined required label="Photos" placeholder="Les Photos de l'Hôtel" multiple></v-file-input>
                        </div>

                        


                  </v-form>

                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="close">
                  Annuler
                </v-btn>
                <v-btn v-if="!isEditing" :loading="btnloading" color="primary darken-1" @click="save">
                  Ajouter
                </v-btn>
                <v-btn v-if="isEditing" :loading="btnloading" color="primary darken-1" text @click="update">
                  Mettre à Jour
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.photo }}</td>
      </template>


      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small color="accent" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small color="red"  @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
      roles: ['admin', 'user'],
      nomRules: [
        v => !!v || 'Nom de l\'Hôtel est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
     
     dialog: false,
    form: {
     name: "",
     photo: ""
    },
    formHotel: false,
    dialogDelete: false,
    hotels: [],
    headers: [
       {
        text: 'Photo',
        value: 'photo'
      },
      {
        text: 'Nom de l\'Hôtel',
        align: 'start',
        sortable: false,
        value: 'name',
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
     handleCreate() {
      this.isEditing = false

      this.dialog = true
      this.form = {
         name: "",
         photo: ""
      }
    },
     getHotel() {
      axios.get('/hotel')
        .then(response => {
          console.log(response);
          this.hotels = response.data.docs;
        })
    },
    initialize() {
      this.getHotel();
    
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    
    deleteItem(item) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment supprimer cette station ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.delete('/hotel/'+ item.id)
            .then(response => {
              this.showToast('success', 'Station supprimée avec succès')
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
      save() {
      this.btnloading = true
      if (this.$refs.formBus.validate()) {
        axios.post(`/hotel`, this.form)
          .then(response => {
            console.log(response);
            if (response.data.error) {
              Swal.fire({
                title: 'Echec',
                text: 'Une Erreur s\'est produite',
                icon: 'error'
              })

            }

            this.btnloading = false
            this.dialog = false
            this.initialize()
            this.form = {
              name: "",
              email: "",
              phone: "",
              password: "",
              role: ""
            }
          }).catch(error => {
            this.btnloading = false
          return false
          console.log(error)
        })
      }


    },

  },
};
</script>

