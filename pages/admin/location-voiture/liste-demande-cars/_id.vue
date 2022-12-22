<template>
  <div>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  data(){
    return {

    }
  },

  mounted() {
    this.getCarReservationById()
  },

  methods: {
    getCarReservationById() {
      axios.get(`/visa-request/${this.$route.params.id}`)
        .then(response => {
          console.log(response);
          // this.demande_visa = response.data.latestreservations;
        })
    },

},
}
</script>

<style scoped>

</style>
