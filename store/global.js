export const state = () => ({
  globalStateMessage: {
    type: 'info',
    text: '',
    show: false,
  }
});

export const getters = {
  globalStateMessage: state => state.globalStateMessage
}

export const mutations = {
  SET_TEMP_MESSAGE(state, { type, text }){
    alert(text)
    state.globalStateMessage.type = type;
    state.globalStateMessage.text = text;
    state.globalStateMessage.show = true;
  }
}
