<template>
  <div>
    <div
      class="tw-my-4 tw-flex tw-justify-center tw-h-[fit-content] tw-border tw-rounded tw-bg-white">
      <input outlined label="Photos" placeholder="Les Photos de l'Hôtel" multiple
             @change="handleUploadChange" id="images-upload" type="file"
             style="display:none" multiple hidden/>
      <div @click="triggerUpload" class="tw-w-full tw-bg-slate-100 tw-mx-1 tw-my-1 tw-rounded-md">
        <div v-if="medias.length === 0"
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
               v-for="(image, index) in medias">
                                    <span @click.stop="removeImageUploaded(index)"
                                          class="tw-absolute tw-cursor-pointer tw-shadow-md tw-right-4 hover:tw-bg-red-700 tw-top-4 tw-rounded-full tw-bg-red-500 tw-text-white tw-text-sm tw-h-6 tw-w-6 tw-text-center">
                                      x
                                  </span>
            <img class="tw-w-32 tw-h-32 tw-rounded-lg" :src="image.url">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropzone",
  data(){
    return {
      medias: []
    }
  },
  methods: {
    triggerUpload($event){
      let element = $event.target
      while (element) {
        console.log(element.tagName)
        if (element.tagName === 'INPUT') {
          element.click()
          break
        }
        element = element.previousElementSibling
      }
    },
    async handleUploadChange($event) {
      let files = $event.target.files
      let temp_files = []
      for (var i = 0; i < files.length; i++) {
        let formData = new FormData
        let url = URL.createObjectURL(files[i])
        formData.set('image', files[i])

        let mediadata = {url: url, size: files[i].size, type: files[i].type, file: files[i]};
        console.log(mediadata)
        temp_files.push(mediadata)
        this.medias.push(mediadata);
      }
      this.$emit('uploadchange', {alluploaded: this.medias})
    },
    removeImageUploaded(index) {
      this.media.splice(index, 1)
      this.$emit('uploadchange', {alluploaded: this.medias})
    },
  }
}
</script>

<style scoped>

</style>
