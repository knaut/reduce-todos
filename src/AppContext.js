import React, { createContext, useReducer } from 'react'
import { generateTodos } from './generateTodos'
import { logOldState, logNewState, logAction } from './log'

export const AppContext = createContext()

// generate some random todos to display on app start
const { entities, keys } = generateTodos()

const initialState = {
  // use a flattened, "normalized" pattern for our todos
  todoEntities: entities,
  todoKeys: keys
}

const reducer = function(state, action) {
  logOldState(state)
  logAction(action)

  const { type, payload } = action

  const newState = {
    ...state
  }

  switch(type) {
    // add cases to modify newState here
  }

  logNewState(newState)
  return newState
}

export default function Context({ children }) {
  const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

