export const state = () => ({
  currentStation: {}
});

export const getters = {
  currentStation: state => state.currentStation
}

export const mutations = {
  SET_CURRENT_STATION(state, station){
    state.currentStation = station;
  },
}

export const actions = {
  getCurrentStation: ({commit}) => {
    axios.get('current-bus-station').then(res => commit('SET_CURRENT_STATION', res.data.station))
  }
}
