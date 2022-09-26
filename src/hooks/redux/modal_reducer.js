import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
  modal: {
    state: false,
    data: {
      title: null,
      content: null,
      validation: null,
      url: null,
      method: null,
      mutation: null,
      values: null,
      action: null
    }
  },
  
  step_modal: {
    state: false,
    data: {
      title: null,
      content: null,
      validation: null,
      url: null,
      method: null,
      mutation: null,
      values: null,
      action: null
    }
  },

  notice: {
    state: false,
    data: {
      title: null,
      content: null,
      action: null,
      button: null
    }
  },
  auth_modal: {
    state: false,
    data: {
      title: null,
      content: null,
      validation: null,
      url: null,
      values: null
    }
  }
}

const ModalReducer = createSlice({
  name: 'modalReducer',
  initialState, 
  reducers: {
    show_modal: (state, {payload}) => {
      return { 
        ...state,
        modal: payload === 'close' ? 
        initialState.modal : 
        {
          state: true, 
          data: payload
        }
      }
    },

    show_auth_modal: (state, {payload}) => {
      return { 
        ...state,
        auth_modal: payload === 'close' ? 
        initialState.auth_modal : 
        {
          state: true, 
          data: payload
        }
      }
    },

    step_modal: (state, {payload}) => {
      console.log('step modal payload', payload)
      return { 
        ...state,
        step_modal: payload === 'close' ? 
        initialState.step_modal : 
        {
          state: true, 
          data: payload
        }
      }
    },

    show_notice: (state, {payload})   => {
      return { 
        ...state,
        notice: payload === 'close' ? 
        initialState.notice : 
        {
          state: true, 
          data: payload
        }
      }
    }
  }
}) 


export const { show_modal, show_notice, step_modal, show_auth_modal } = ModalReducer.actions
export default ModalReducer.reducer