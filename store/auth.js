import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  token: null,
  darkMode: false,
  firebase_user: null,
  firebase_loggedin: false
})

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  isAuthenticated: state => state.user !== null,
  isBusStationPersonnel: state => state.user !== null && state.user.type_user === 3,
  darkMode: state => state.darkMode,
  firebase_user: state => state.firebase_user,
  firebase_loggedin: state => state.firebase_loggedin
}

// mutations
export const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_COUNTRY (state, country) {
    state.country = country
  },

  FETCH_USER_SUCCESS (state, user) {
    if (user.isadmin) {
      if (!JSON.parse(localStorage.getItem('country'))) { localStorage.setItem('country', JSON.stringify(user.pays)) }
    }
    state.user = user
  },

  FETCH_USER_FAILURE (state) {
    state.token = null
  },

  LOGOUT (state) {
    state.user = null
    state.token = null
    Cookies.remove('token', { path: '' })
    Cookies.remove('user', { path: '' })
  },

  SET_USER_FIREBASE_AUTH (state, { user }) {
    state.firebase_user = user
    state.firebase_loggedin = true
    Cookies.set('firebase_loggedin', true, { expires: 365 })
  },
  UPDATE_USER (state, user) {
    console.log(user, 'update user ')
    state.user = user
  },
  TOGGLE_DARKMOD (state) {
    state.darkMode = !state.darkMode
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, { token, user }) {

    console.log(user, 'Initial user')
    commit('SET_TOKEN', token)
    dispatch('saveUserToStore', user)
    Cookies.set('token', token, { expires: false ? 365 : null })
  },
  saveUserToStore({ commit }, user){
    commit('UPDATE_USER', user)
    Cookies.set('user', JSON.stringify(user), { expires: false ? 365 : null })
  },
  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/user')

      commit('FETCH_USER_SUCCESS', data)
    } catch (e) {
      Cookies.remove('token')

      commit('FETCH_USER_FAILURE')
    }
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },
  toggleDark ({ commit }) {
    commit('TOGGLE_DARKMOD')
  },
  async logout ({ commit }) {
    try {
      await axios.post('/auth/logout')
    } catch (e) { }

    Object.keys(Cookies.get()).forEach(function(cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      };
      Cookies.remove(cookieName, neededAttributes);
    });

    commit('LOGOUT')
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/oauth/${provider}`)

    return data.url
  }
}
