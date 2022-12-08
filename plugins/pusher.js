import Vue from "vue";

Vue.use(require('vue-pusher'), {
  api_key: 'e81f2769b500679d8e80',
  options: {
    cluster: 'mt1',
    encrypted: true,
  }
});
