<template>
  <div>
    <utilisateurs :isAdmin="true"></utilisateurs>
    <h4 class="tw-text-2xl tw-uppercase tw-text-left tw-font-semibold mb-8 tw-py-4">Parametres & autres Informations</h4>
    <bus-station-settings :isAdmin="true"></bus-station-settings>

  </div>
</template>

<script>
export default {
  name: "settings",
  layout: 'admin',
  data() {
    return {
      station: null,
    }
  },

  mounted(){
    this.getStation()
  },

  methods: {
    async getStation(){
      await axios.get('/admin/get-bus-station-by-id/'+ this.$route.params.id).then( response => {
        this.station = response.data.station
      })
    }
  },
}

</script>

<style scoped>

</style>
