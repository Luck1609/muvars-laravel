import React, { useReducer } from 'react'
import reducers, { initialState } from './reducers'



export default function useSelector() {
  const [state, dispatch] = useReducer(reducers, initialState)

  return { state, dispatch }
}
