<template>
  <div>
    <ul class="tw-flex tw-flex-col tw-my-4 tw-items-center tw-gap-2">
      <li class="tw-text-lg tw-p-2 tw-shadow-lg tw-bg-gray-200" v-for="i in 2">Pays</li>
    </ul>

    <TestComponent/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contries: [],
    }
  },

  mounted(){
    this.getContries()
  },

  methods: {
    async getContries(){
      await $axios.get('https://restcountries.com/v3.1/all').then(res => {
        this.contries = res.data.countries
      }).catch(error => {
        console.log(error)
      } )

    }
  },
}
</script>

<style scoped>

</style>
