import axios from 'axios'
import Cookies from 'js-cookie'

export const state = () => ({
  temp_ticket: null,
})

export const mutations = {
  SET_TEMP_TICKET( state, ticket){
    Cookies.set('temp_ticket', JSON.stringify(ticket))
    state.temp_ticket = ticket
  }
}

export const getters = {
  temp_ticket: state => state.temp_ticket
}
