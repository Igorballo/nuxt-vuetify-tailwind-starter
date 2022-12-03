import Cookies from "js-cookie";

export const state = () => ({
  criteres_recherche_ticket_bus: {
    adresse_depart: null,
    adresse_destination: null,
    date_depart: null,
  }
});

export const getters = {
  criteres_recherche_ticket_bus: state => state.criteres_recherche_ticket_bus,
  selected_recherche_ticket_adresse_destination: state => state.criteres_recherche_ticket_bus.adresse_destination,
  selected_recherche_ticket_adresse_depart: state => state.criteres_recherche_ticket_bus.adresse_depart,
  selected_recherche_ticket_date_depart: state => state.criteres_recherche_ticket_bus.date_depart,
}

export const mutations = {
  SET_RECHERCHE_TICKET_ADRESSE_DEPART(state, adresse_depart) {
    state.criteres_recherche_ticket_bus.adresse_depart = adresse_depart
  },
  SET_RECHERCHE_TICKET_ADRESSE_DESTINATION(state, adresse_destination) {
    state.criteres_recherche_ticket_bus.adresse_destination = adresse_destination
  },
  SET_RECHERCHE_TICKET_DATE_DEPART(state, date_depart) {
    state.criteres_recherche_ticket_bus.date_depart = date_depart
  },
}

export const actions = {
  setRechercheTicketAdresseDepart: ({commit}, adresse_depart) => {
    commit('SET_RECHERCHE_TICKET_ADRESSE_DEPART', adresse_depart)
    if(!!adresse_depart)
    Cookies.set('recherche_ticket_adresse_depart', JSON.stringify(adresse_depart), { expires: false ? 365 : null })
  },
  setRechercheTicketAdresseDestination: ({commit}, adresse_destination) => {
    commit('SET_RECHERCHE_TICKET_ADRESSE_DESTINATION', adresse_destination)
    if(!!adresse_destination)
    Cookies.set('recherche_ticket_adresse_destination', JSON.stringify(adresse_destination), { expires: false ? 365 : null })
  },
  setRechercheTicketDateDepart: ({commit}, date_depart) => {
    commit('SET_RECHERCHE_TICKET_DATE_DEPART', date_depart)
    if(!!date_depart)
    Cookies.set('recherche_ticket_date_depart', JSON.stringify(date_depart), { expires: false ? 365 : null })
  }


}
