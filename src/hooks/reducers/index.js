import * as types from "./types_&_actions";

export const initialState = {
  modal: {
    title: null,
    content: null,
    validation: null,
    url: null,
    method: null,
    mutation: null,
    action: null
  },

  notice: {
    title: null,
    content: null,
    action: null,
    button: null
  }
}

const reducer = (state = initialState, { type, payload }) => {

  switch (type) {

  case types.SHOW_MODAL:
    return { 
      ...state,
      modal: payload === 'close' 
        ? initialState.modal : payload
    }

  case types.SHOW_NOTICE:
    alert('notice action')
    return { 
      ...state,
      notice: payload === 'close' 
        ? initialState.notice : payload
    }

  default:
    return state
  }
}

export default reducer