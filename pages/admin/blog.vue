<template>
  <div>

    <div class="tw-m-4">
      <div class="tw-flex tw-justify-end tw-mb-2">
        <v-btn @click="showTopicForm =! showTopicForm" color="red" class="tw-text-white">Faire une publication</v-btn>
      </div>

      <v-card v-show="showTopicForm"
        elevation="2" class="tw-mb-8"
      >
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="topic.domaine"
              label="Domaine"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="topic.title"
              label="Titre de la publication"
              required
              outlined
            ></v-text-field>
            <v-textarea
              v-model="topic.description"
              outlined
              name="input-7-4"
              label="Description"
              value=""
            ></v-textarea>

            <input outlined label="Photos" placeholder="Les Photos de l'Hôtel" multiple
                               @change="handleUploadChange" id="images-upload" type="file" accept="image/*"
                               style="display:none" multiple hidden/>
                        <div
                          class="tw-my-4 tw-flex tw-justify-center tw-h-[fit-content] tw-border tw-rounded tw-bg-white">
                          <div @click="triggerUpload" class="tw-w-full tw-bg-slate-100 tw-mx-1 tw-my-1 tw-rounded-md">
                            <div v-if="media.length === 0"
                                 class="tw-grid tw-justify-items-center tw-py-2 tw-my-2 hover:tw-cursor-pointer">
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
                              <div class="tw-relative tw-p-2 tw-rounded-md tw-border tw-bg-white"
                                   v-for="(image, index) in media">
                                    <span @click.stop="removeImageUploaded(index)" class="tw-absolute tw-cursor-pointer tw-shadow-md tw-right-4 hover:tw-bg-red-700 tw-top-4 tw-rounded-full tw-bg-red-500 tw-text-white tw-text-sm tw-h-6 tw-w-6 tw-text-center">
                                      x
                                  </span>
                                <img class="tw-w-32 tw-h-32 tw-rounded-lg" :src="image.url">
                              </div>
                            </div>
                          </div>
                        </div>
                      



            <v-btn color="red" class="tw-text-white tw-mt-4 tw-w-full" @click="save">Publier cette article</v-btn>
          </v-form>
        </v-card-text>
      </v-card>


        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
          :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
        ></v-data-table>
    </div>

  </div>
</template>

<script>
import config from "../../config";
export default {
  layout: "admin",
  data() {
    return {
      media: [],
      showTopicForm: false,
      topic: {
        domaine: "",
        title: "",
        description: "",
        media: ""
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          value: 'name',
        },
        { text: 'Category', value: 'category' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          category: 'Ice cream',
        },
        {
          name: 'Ice cream sandwich',
          category: 'Ice cream',
        },
        {
          name: 'Eclair',
          category: 'Cookie',
        },
        {
          name: 'Cupcake',
          category: 'Pastry',
        },
      ],
    };
  },


  mounted(){
    this.getUser()
  },

  methods: {
    async getUser() {
      await axios.get('/users')
        .then(response => {
          console.log(response);
          this.users = response.data.docs;
        })
    },

    save() {

      this.btnloading = true
      let formData = new FormData()
      formData.append('domaine', this.topic.domaine)
      formData.append('title', this.topic.title)
      formData.append('description', this.topic.description)
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
          this.media= ""
        }).catch(error => {
        this.btnloading = false
        return false
        console.log(error)
      })
    },


    triggerUpload() {
      let inputImage = document.getElementById("images-upload")
      inputImage.click()
    },
    removeImageUploaded(index) {
      this.media.splice(index, 1)
    },
    async handleUploadChange($event) {
      let files = $event.target.files
      for (var i = 0; i < files.length; i++) {
        let formData = new FormData
        let url = URL.createObjectURL(files[i])
        formData.set('image', files[i])

        let mediadata = {url: url, size: files[i].size, type: files[i].type, file: files[i]};
        console.log(mediadata)

        this.media.push(mediadata);

      }
    },
  },
}
</script>

<style scoped>

</style>
