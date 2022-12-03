<template>
  <v-app>
    <div class="tw-relative tw-z-30">
      <Header></Header>

      <!--Aside Bar-->
      <div class=" tw-hidden lex tw-w-full tw-h-screen tw-absolute tw-inset-0" style="z-index: 998">
        <div class="tw-hidden md:tw-block tw-w-full tw-bg-gray-900 tw-bg-opacity-60"></div>
        <div class="tw-w-full md:tw-w-[52vh] tw-bg-white"></div>
      </div>

      <nuxt/>

      <Footer/>
    </div>
  </v-app>
</template>

<script>

import Header from "../components/Header";

export default {
  name: 'master',
  components: {Header}
}
</script>

<style>

</style>
