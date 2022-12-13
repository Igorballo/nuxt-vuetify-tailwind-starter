import {mapGetters} from "vuex";
import Swal from "sweetalert2";

export default {
  layout: "bus-manager",
  mounted() {
    // if(this.globalStateMessage.show)
    // Swal.fire({
    //   icon: 'warning',
    //   title: "",
    //   text: "Veuillez vous inscrire ou vous connecter pour continuer",
    //   reverseButtons: true,
    //   confirmButtonText: "Ok",
    // })
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
    rechercherTickets(){
      this.$store.dispatch('user/setRechercheTicketAdresseDepart', this.selected_depart)
      this.$store.dispatch('user/setRechercheTicketAdresseDestination', this.selected_destinantion)
      this.$store.dispatch('user/setRechercheTicketDateDepart', this.date_depart)

      this.$router.push('/filter-reservation')
    },
    async logoutUser(){
      await this.$store.dispatch('auth/logout')
      window.location = '/login'
    }
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
