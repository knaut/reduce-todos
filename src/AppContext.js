import React, { createContext, useContext, useReducer } from 'react'

export const AppContext = createContext()

const initialState = {
  // use a flattened, "normalized" pattern for our todos
  todoEntities: {},
  todoKeys: []
}

const reducer = function(state, action) {
  const { type, payload } = action

  switch(type) {
    default:
      return state

  }
}

export default function({ children }) {
  const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

