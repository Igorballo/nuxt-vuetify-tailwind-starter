import {mapGetters} from "vuex";
import Swal from "sweetalert2";

export const busMixin = {
  layout: "bus-manager",
  created(){
    this.$store.dispatch('bus_station/getCurrentStation')
  },
  mounted() {

  },
  computed: {
    ...mapGetters('bus_station', [
      'currentStation'
    ]),
  }
}
