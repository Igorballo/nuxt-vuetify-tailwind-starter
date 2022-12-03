import Vue from "vue"
import FunctionalCalendar from 'vue-functional-calendar';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import DatetimePicker from 'vuetify-datetime-picker'
// (Optional) import 'vuetify-datetime-picker/src/stylus/main.styl'

import { abilitiesPlugin } from "@casl/vue";
//import ability from './services/ability';
const ability = new Ability()

Vue.use(abilitiesPlugin, ability)

Vue.use(DatetimePicker)
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.use(FunctionalCalendar, {
  dayNames: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
});
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);

import Swal from 'sweetalert2'
import {Ability} from "@casl/ability";

window.Swal = Swal;
