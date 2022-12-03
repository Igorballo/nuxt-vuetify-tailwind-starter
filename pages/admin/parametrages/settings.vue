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

      }
    }
  }

</script>

<style scoped>

</style>
