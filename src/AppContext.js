import React, { createContext, useReducer } from 'react'
import { generateTodos } from './generateTodos'
import log from './log'

export const AppContext = createContext()

// generate some random todos to display on app start
const { entities, keys } = generateTodos()

const initialState = {
  // use a flattened, "normalized" pattern for our todos
  todoEntities: entities,
  todoKeys: keys
}

const reducer = function(state, action) {
  const { type, payload } = action

  switch(type) {
    default:
      return state

  }
}

export default function Context({ children }) {
  const [ state, dispatch ] = useReducer( reducer, initialState )

  log(state)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

