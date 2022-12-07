<template>
 <v-container fluid>
    <div>
   
    <v-data-table no-data-text="aucune donneé" :headers="headers" :items="cars" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>La Liste de Toutes Les Voitures</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="mx-2" @click="initialize">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-btn @click="handleCreate" color="primary" dark class="mb-2">
            Ajouter Une Voiture
          </v-btn>
          <v-dialog v-model="dialog" max-width="700px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter Une Voiture</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="formBus" v-model="formCar">
                    <div class="">

                         <v-text-field :rules="nomRules" outlined required label="Nom" placeholder="Nom de la Voiture" v-model="form.name"></v-text-field>
                         <v-text-field :rules="marqueRules" outlined required  label="Marque" placeholder="Marque de la Voiture" v-model="form.marque"></v-text-field>
                         <v-text-field  outlined required :rules="prixRules"  label="Prix" placeholder="Le Prix" v-model="form.prix"></v-text-field>
                         <v-text-field  outlined required  label="Description" placeholder="Description de la Voiture" v-model="form.description"></v-text-field>
                         <v-file-input  outlined required label="Photos" placeholder="Les Photos de la Voiture" multiple></v-file-input>
                          
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
        <td class="text-xs-right">{{ props.item.photo }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.marque }}</td>
        <td class="text-xs-right">{{ props.item.prix }}</td>
        <td class="text-xs-right">{{ props.item.description }}</td>
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
        v => !!v || 'Nom de la Voitures est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      marqueRules: [
        v => !!v || 'La Marque de la voiture est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      prixRules: [
        v => !!v || 'Le prix de la Voiture est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
     dialog: false,
    form: {
     name: "",
     marque: "",
     prix: "",
     description: "",
     photo: ""
    },
    formCar: false,
    dialogDelete: false,
    users: [],
    headers: [
      {
        text: 'Photos',
        value: 'photo'
      },
      {
        text: 'Nom de la Voiture',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Marque de la Voiture',
        value: 'marque'
      },
      {
        text: 'Le Prix',
        value: 'prix'
      },
      {
        text: 'Description',
        value: 'description'
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
          marque: "",
          prix: "",
          description: "",
          photo: ""
      }
    },
     getCar() {
      axios.get('/cars')
        .then(response => {
          console.log(response);
          this.cars = response.data.docs;
        })
    },
    initialize() {
      this.getCar();
    
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
          await axios.delete('/cars/'+ item.id)
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
      this.cars.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    complete(index) {
      this.list[index] = !this.list[index];
    },
      save() {
      this.btnloading = true
      if (this.$refs.formBus.validate()) {
        axios.post(`/cars`, this.form)
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
               marque: "",
               prix: "",
               description: "",
               photo: ""
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
