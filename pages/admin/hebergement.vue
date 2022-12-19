<template>
  <v-container fluid>
    <div>

    <v-data-table no-data-text="aucune donneé" :headers="headers" :items="hotels" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>La Liste de Tous Les Hébergement</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
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

                         <v-text-field :rules="nomRules" outlined required label="Nom de l'Hôtel" placeholder="Nom de l'Hôtel" v-model="form.nom"></v-text-field>
                         <v-text-field :rules="adresseRules" outlined required label="Adresse" placeholder="Adresse de l'Hôtel" v-model="form.adresse"></v-text-field>
                         <v-text-field :rules="villeRules" outlined required label="Ville" placeholder="Ville de l'Hôtel" v-model="form.ville"></v-text-field>
                         <v-text-field :rules="prixMinRules" outlined required label="Prix Minimum" placeholder="Le prix minimum de l'Hôtel " v-model="form.prix_min"></v-text-field>
                         <v-text-field :rules="prixMaxRules" outlined required label="Prix Maximum" placeholder="Le prix Maximum de l'Hôtel " v-model="form.prix_max"></v-text-field>
                         <v-textarea :rules="descriptionRules" outlined required label="Description" placeholder="Description" v-model="form.description"></v-textarea>
                         <v-text-field :rules="nombreEtoileRules" outlined required label="Le Nombre d'Etoile" placeholder="Le nombre d'Etoile" v-model="form.nombre_etoile"></v-text-field>
                         <input outlined label="Photos" placeholder="Les Photos de l'Hôtel" multiple  @change="handleUploadChange" id="images-upload" type="file" accept="image/*" style="display:none" multiple hidden />
                         <div class="tw-my-4 tw-flex tw-justify-center tw-h-[fit-content] tw-border tw-rounded tw-bg-white">
            <div @click="triggerUpload" class="tw-w-full tw-bg-slate-100 tw-mx-1 tw-my-1 tw-rounded-md">
              <div v-if="media.length === 0" class="tw-grid tw-justify-items-center tw-py-2 tw-my-2 hover:tw-cursor-pointer">
                <div class="tw-bg-slate-200 tw-py-2 tw-rounded-full tw-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p class="tw-text-md tw-font-weight">
                  Ajouter des photos ou vidéos
                </p>
                <p class="tw-text-sm">
                  ou faites glisser-deposer
                </p>
              </div>

              <div class="tw-flex tw-gap-2 tw-flex-wrap tw-p-4" v-else>
                <div class="tw-relative tw-p-2 tw-rounded-md tw-border tw-bg-white" v-for="(image, index) in media">
                  <span @click.stop="removeImageUploaded(index)" class="tw-absolute tw-cursor-pointer tw-shadow-md tw-right-4 hover:tw-bg-red-700 tw-top-4 tw-rounded-full tw-bg-red-500 tw-text-white tw-text-sm tw-h-6 tw-w-6 tw-text-center">
                    x
                  </span>
                  <img class="tw-w-32 tw-h-32 tw-rounded-lg" :src="image.url">
                </div>
              </div>
            </div>
          </div>
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

     <template v-slot:item.images="{ item }">
        <v-avatar  height="60" width="60">
          <v-img :src="showImages(item)" :lazy-src="showImages(item)"></v-img>
        </v-avatar>
      </template>
      <template slot="items" slot-scope="props">

        <td class="text-xs-right">{{ props.item.nom }}</td>
        <td class="text-xs-right">{{ props.item.ville }}</td>
        <td class="text-xs-right">{{ props.item.adresse }}</td>
        <td class="text-xs-right">{{ props.item.prixMin }}</td>
        <td class="text-xs-right">{{ props.item.prixMax }}</td>
        <td class="text-xs-right">{{ props.item.nombre_etoile }}</td>
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
 import config from "../../config";
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
      villeRules: [
        v => !!v || 'Ville est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      adresseRules: [
        v => !!v || 'Adresse est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      prixMinRules: [
        v => !!v || 'Le prix Minimum est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
       prixMaxRules: [
        v => !!v || 'Le prix Maximum est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      descriptionRules: [
        v => !!v || 'Description est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],
      nombreEtoileRules: [
        v => !!v || 'Nombre d\'Etoile est requis',
        /* v => (v && v.length <= 10) || 'Name must be less than 10 characters', */
      ],

    dialog: false,
    form: {
     nom: "",
     ville: "",
     prix_min: "",
     prix_max: "",
     description: "",
     nombre_etoile: "",
     adresse: ""
    },
    formHotel: false,
    dialogDelete: false,
    hotels: [],
    media: [],
    headers: [
       {
        text: 'Photo',
        value: 'images'
      },
      {
        text: 'Nom de l\'Hôtel',
        align: 'start',
        sortable: false,
        value: 'nom',
      },
      {
        text: 'Ville',
        value: 'ville'
      },
       {
        text: 'Adresse',
        value: 'adresse'
      },
      {
        text: 'Prix Minimum',
        value: 'prixMin'
      },
       {
        text: 'Prix Maximum',
        value: 'prixMax'
      },
      {
        text: 'Nombre d\'Etoile ',
        value: 'nombreEtoile'
      },
      {
        text: 'Description',
        value: 'description'
      },



      { text: 'Actions', value: 'actions', sortable: false },
    ],

    editedIndex: -1,
    isEditing: false,
    closeDelete: '',
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
    showImages(item) {
     const url = config.app_local ?`${config.app_back_debug_url}/${item.images[0]}`:`${config.app_back_url}/${item.images[0]}` 
      return url
    },
     handleCreate() {
      this.isEditing = false

      this.dialog = true
      this.form = {
          nom: "",
          ville: "",
          prix_min: "",
          prix_max: "",
          description: "",
          nombre_etoile: "",
          adresse: ""
      }
    },
     getHotel() {
      axios.get('/hotels/get-hotels')
        .then(response => {
          console.log(response);
          this.hotels = response.data.hotels;
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
          await axios.delete('/hotels/delete-hotel/'+ item._id)
            .then(response => {
              this.showToast('success', 'Hotel supprimé avec succès')
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
        let formData = new FormData()
        formData.append('nom', this.form.nom)
        formData.append('ville', this.form.ville)
        formData.append('prix_min', this.form.prix_min)
        formData.append('prix_max', this.form.prix_max)
        formData.append('description', this.form.description)
        formData.append('adresse', this.form.adresse)
        formData.append('nombre_etoile', this.form.nombre_etoile)
        this.media.forEach(media => {
          formData.append("medias", media.file)
        })
        axios.post(`/hotels/save-hotel`, formData)
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
              nom: "",
              ville: "",
              prix_min: "",
              prix_max: "",
              description: "",
              nombre_etoile: "",
              adresse: ""
            }
          }).catch(error => {
            this.btnloading = false
          return false
          console.log(error)
        })
      


    },
 triggerUpload(){
      let inputImage = document.getElementById("images-upload")
      inputImage.click()
    },
    removeImageUploaded(index){
      this.media.splice(index, 1)
    },
  async handleUploadChange($event){
      let files = $event.target.files
      for(var i=0; i < files.length; i++){
        let formData = new FormData
        let url = URL.createObjectURL(files[i])
        formData.set('image', files[i])

        let mediadata = {url:url, size:files[i].size, type:files[i].type, file: files[i]};
        console.log(mediadata)

        this.media.push(mediadata);

      }
    },

  },


};
</script>

