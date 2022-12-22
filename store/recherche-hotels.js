import Cookies from "js-cookie";

export const state = () => ({
  criteres_recherche_hotel: {
    date_arrive: null,
    date_depart: null,
    adresse: null,
    passengers: null,
  }
});


export const getters = {
  criteres_recherche_hotel: state => state.criteres_recherche_hotel,
  selected_recherche_hotel_date_arrive: state => state.criteres_recherche_hotel.date_arrive,
  selected_recherche_hotel_date_depart: state => state.criteres_recherche_hotel.date_depart,
  selected_recherche_hotel_adresse: state => state.criteres_recherche_hotel.adresse,
  selected_recherche_hotel_passengers: state => state.criteres_recherche_hotel.passengers,
}

export const actions = {
  setRechercheHotelDateArrive: ({commit}, date_arrive) => {
    commit('SET_RECHERCHE_HOTEL_DATE_ARRIVE', date_arrive)
    if (!!date_arrive)
      Cookies.set('recherche_hotel_date_arrive', JSON.stringify(date_arrive), {expires: false ? 365 : null})
  },
  setRechercheHotelDateDepart: ({commit}, date_depart) => {
    commit('SET_RECHERCHE_HOTEL_DATE_DEPART', date_depart)
    if (!!date_depart)
      Cookies.set('recherche_hotel_date_depart', JSON.stringify(date_depart), {expires: false ? 365 : null})
  },
  setRechercheHotelAdresse: ({commit}, adresse) => {
    commit('SET_RECHERCHE_HOTEL_ADRESSE', adresse)
    if (!!adresse)
      Cookies.set('recherche_hotel_adresse', JSON.stringify(adresse), {expires: false ? 365 : null})
  },
  setRechercheHotelPassengers: ({commit}, passengers) => {
    commit('SET_RECHERCHE_HOTEL_PASSENGERS', passengers)
    if (!!passengers)
      Cookies.set('recherche_hotel_passengers', JSON.stringify(passengers), {expires: false ? 365 : null})
  },
}

export const mutations = {
  SET_RECHERCHE_HOTEL_DATE_ARRIVE(state, date_arrive) {
    state.criteres_recherche_hotel.date_arrive = date_arrive
  },
  SET_RECHERCHE_HOTEL_DATE_DEPART(state, date_depart) {
    state.criteres_recherche_hotel.date_depart = date_depart
  },
  SET_RECHERCHE_HOTEL_ADRESSE(state, adresse) {
    state.criteres_recherche_hotel.adresse = adresse
  },
  SET_RECHERCHE_HOTEL_PASSENGERS(state, passengers) {
    state.criteres_recherche_hotel.passengers = passengers
  },
}
