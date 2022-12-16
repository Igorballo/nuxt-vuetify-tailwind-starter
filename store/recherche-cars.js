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
  selected_recherche_car_lieu_restitution: state => state.criteres_recherche_car.lieu_restitution,
}

export const actions = {
  setRechercheCarDateDebut: ({commit}, date_debut) => {
    commit('SET_RECHERCHE_CAR_DATE_DEBUT', date_debut)
    if (!!date_debut)
      Cookies.set('recherche_car_date_debut', JSON.stringify(date_debut), {expires: false ? 365 : null})
  },
  setRechercheCarDateFin: ({commit}, date_fin) => {
    commit('SET_RECHERCHE_CAR_DATE_FIN', date_fin)
    if (!!date_fin)
      Cookies.set('recherche_car_date_fin', JSON.stringify(date_fin), {expires: false ? 365 : null})
  },
  setRechercheCarHeureDebut: ({commit}, heure_debut) => {
    commit('SET_RECHERCHE_CAR_HEURE_DEBUT', heure_debut)
    if (!!heure_debut)
      Cookies.set('recherche_car_heure_debut', JSON.stringify(heure_debut), {expires: false ? 365 : null})
  },
  setRechercheCarHeureFin: ({commit}, heure_fin) => {
    commit('SET_RECHERCHE_CAR_HEURE_FIN', heure_fin)
    if (!!heure_fin)
      Cookies.set('recherche_car_heure_fin', JSON.stringify(heure_fin), {expires: false ? 365 : null})
  },
  setRechercheCarLieuPriseEnCharge: ({commit}, lieu_prise_en_charge) => {
    commit('SET_RECHERCHE_CAR_LIEU_PRISE_EN_CHARGE', lieu_prise_en_charge)
    if (!!lieu_prise_en_charge)
      Cookies.set('recherche_car_lieu_prise_en_charge', JSON.stringify(lieu_prise_en_charge), {expires: false ? 365 : null})
  },
  setRechercheCarLieuRestitution: ({commit}, lieu_restitution) => {
    commit('SET_RECHERCHE_CAR_LIEU_RESTITUTION', lieu_restitution)
    if (!!lieu_restitution)
      Cookies.set('recherche_car_lieu_restitution', JSON.stringify(lieu_restitution), {expires: false ? 365 : null})
  },
  setRechercheCarAutreLieuRestitution: ({commit}, autre_lieu_restitution) => {
    commit('SET_RECHERCHE_CAR_AUTRE_LIEU_RESTITUTION', autre_lieu_restitution)
    if (autre_lieu_restitution) {
      Cookies.set('recherche_car_autre_lieu_restitution', JSON.stringify(autre_lieu_restitution), {expires: false ? 365 : null})
    }
  },
}

export const mutations = {
  SET_RECHERCHE_CAR_DATE_DEBUT(state, date_debut) {
    state.criteres_recherche_car.date_debut = date_debut
  },
  SET_RECHERCHE_CAR_DATE_FIN(state, date_fin) {
    state.criteres_recherche_car.date_fin = date_fin
  },
  SET_RECHERCHE_CAR_HEURE_DEBUT(state, heure_debut) {
    state.criteres_recherche_car.heure_debut = heure_debut
  },
  SET_RECHERCHE_CAR_HEURE_FIN(state, heure_fin) {
    state.criteres_recherche_car.heure_fin = heure_fin
  },
  SET_RECHERCHE_CAR_LIEU_RESTITUTION(state, lieu_restitution) {
    state.criteres_recherche_car.lieu_restitution = lieu_restitution
  },
  SET_RECHERCHE_CAR_LIEU_PRISE_EN_CHARGE(state, lieu_prise_en_charge) {
    state.criteres_recherche_car.lieu_prise_en_charge = lieu_prise_en_charge
  },
  SET_RECHERCHE_CAR_AUTRE_LIEU_RESTITUTION(state, autre_lieu_restitution) {
    state.criteres_recherche_car.autre_lieu_restitution = autre_lieu_restitution
  },
}
