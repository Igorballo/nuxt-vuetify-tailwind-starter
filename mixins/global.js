import {mapGetters} from "vuex";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  layout: "bus-manager",
  components: {
    'validation-observer': ValidationObserver,
    'validation-provider': ValidationProvider,
  },
  data(){
    return {
    }
  },
  mounted() {
  },
  methods: {
    disablePastDates(val) {
      return val > new Date().toISOString().substr(0, 10)
    },
    showToast(type, message){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: type,
        title: message
      })
    },
    async logoutUser(){
      await this.$store.dispatch('auth/logout')
      window.location = '/login'
    },
    async getReservationDetail(reservation_id){
      const response = await axios.post(`reservation-vol/begin-process/${reservation_id}`)
      this.$router.push(`reservation-vol/${reservation_id}`)
    },
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated',
      'isBusStationPersonnel',
      'user'
    ]),
    ...mapGetters('global', [
      'globalStateMessage'
    ]),
    ...mapGetters('user', [
      'selected_recherche_ticket_adresse_depart',
      'selected_recherche_ticket_adresse_destination',
      'selected_recherche_ticket_date_depart'
    ])
  }
}
