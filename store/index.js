import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {
  nuxtClientInit ({ commit }, context) {
    const token = Cookies.get('token')
    const user = Cookies.get('user')
    const recherche_ticket_adresse_depart = Cookies.get('recherche_ticket_adresse_depart')
    const recherche_ticket_adresse_destination = Cookies.get('recherche_ticket_adresse_destination')
    const recherche_ticket_date_depart = Cookies.get('recherche_ticket_date_depart')

    const recherche_car_date_debut = Cookies.get('recherche_car_date_debut')
    const recherche_car_date_fin = Cookies.get('recherche_car_date_fin')
    const recherche_car_heure_debut = Cookies.get('recherche_car_heure_debut')
    const recherche_car_heure_fin = Cookies.get('recherche_car_heure_fin')
    const recherche_car_lieu_prise_en_charge = Cookies.get('recherche_car_lieu_prise_en_charge')
    const recherche_car_lieu_restitution = Cookies.get('recherche_car_lieu_restitution')
    const recherche_car_autre_lieu_restitution = Cookies.get('recherche_car_autre_lieu_restitution')


    if(recherche_car_date_debut){
      commit('recherche-cars/SET_RECHERCHE_CAR_DATE_DEBUT', JSON.parse(recherche_car_date_debut))
    }
    if(recherche_car_date_fin){
      commit('recherche-cars/SET_RECHERCHE_CAR_DATE_FIN', JSON.parse(recherche_car_date_fin))
    }
    if(recherche_car_heure_debut){
      commit('recherche-cars/SET_RECHERCHE_CAR_HEURE_DEBUT', JSON.parse(recherche_car_heure_debut))
    }
    if(recherche_car_heure_fin){
      commit('recherche-cars/SET_RECHERCHE_CAR_HEURE_FIN', JSON.parse(recherche_car_heure_fin))
    }
    if(recherche_car_lieu_prise_en_charge){
      commit('recherche-cars/SET_RECHERCHE_CAR_LIEU_PRISE_EN_CHARGE', JSON.parse(recherche_car_lieu_prise_en_charge))
    }
    if(recherche_car_lieu_restitution){
      commit('recherche-cars/SET_RECHERCHE_CAR_LIEU_RESTITUTION', JSON.parse(recherche_car_lieu_restitution))
    }
    if(recherche_car_autre_lieu_restitution){
      commit('recherche-cars/SET_RECHERCHE_CAR_AUTRE_LIEU_RESTITUTION', JSON.parse(recherche_car_autre_lieu_restitution))
      commit('recherche-cars/SET_RECHERCHE_CAR_LIEU_RESTITUTION', JSON.parse(recherche_car_lieu_restitution))
    }




    if(recherche_ticket_adresse_depart){
      commit('user/SET_RECHERCHE_TICKET_ADRESSE_DEPART', JSON.parse(recherche_ticket_adresse_depart))
    }

    if(recherche_ticket_adresse_destination){
      commit('user/SET_RECHERCHE_TICKET_ADRESSE_DESTINATION', JSON.parse(recherche_ticket_adresse_destination))
    }

    if(recherche_ticket_date_depart){
      commit('user/SET_RECHERCHE_TICKET_DATE_DEPART', JSON.parse(recherche_ticket_date_depart))
    }

    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    if (user) {
      commit('auth/UPDATE_USER', JSON.parse(user))
    }

    const order_ticket = Cookies.get('temp_ticket')
    if(order_ticket){
      commit('ticket_bus/SET_TEMP_TICKET', JSON.parse(order_ticket))
    }

  }
}

export const state = () => ({
  sidebar: false,
});

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  },
};
