import Cookies from "js-cookie";

export const state = () => ({
  criteres_recherche_car: {
    date_debut: null,
    date_fin: null,
    heure_debut: null,
    heure_fin: null,
    autre_lieu_restitution: null,
    lieu_prise_en_charge: null,
    lieu_de_restitution: null,
  }
});

export const getters = {
  criteres_recherche_car: state => state.criteres_recherche_car,
  selected_recherche_car_date_debut: state => state.criteres_recherche_car.date_debut,
  selected_recherche_car_date_fin: state => state.criteres_recherche_car.date_fin,
  selected_recherche_car_heure_debut: state => state.criteres_recherche_car.heure_debut,
  selected_recherche_car_heure_fin: state => state.criteres_recherche_car.heure_fin,
  selected_recherche_car_autre_lieu_restitution: state => state.criteres_recherche_car.autre_lieu_restitution,
  selected_recherche_car_lieu_prise_en_charge: state => state.criteres_recherche_car.lieu_prise_en_charge,
  selected_recherche_car_lieu_de_restitution: state => state.criteres_recherche_car.lieu_de_restitution,
}

export const actions = {
  setRechercheCarDateDebut: ({commit}, date_debut) => {
    commit('SET_RECHERCHE_CAR_ADRESSE_DEPART', date_debut)
    if(!!date_debut)
      Cookies.set('recherche_car_date_debut', JSON.stringify(date_debut), { expires: false ? 365 : null })
  },
}

export const mutations = {
  SET_RECHERCHE_CAR_DATE_DEBUT(state, date_debut) {
    state.criteres_recherche_car.date_debut = date_debut
  },
}
