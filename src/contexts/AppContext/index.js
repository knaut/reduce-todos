import React, { createContext, useReducer } from 'react'
import { generateTodos } from './generateTodos'
import { logOldState, logNewState, logAction } from './log'

import { CHECKED_TODO } from './actions'

export const AppContext = createContext()

// generate some random todos to display on app start
const { entities, keys } = generateTodos()

const initialState = {
  // use a flattened, "normalized" pattern for our todos
  todoEntities: entities,
  todoKeys: keys
}


export default function Context({ children }) {
  const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}




