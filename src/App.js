import React from 'react'
import { Grommet, grommet } from 'grommet'
import './index.css'

import AppContext from './AppContext'
import Container from './components/Container'
import TodoList from './components/TodoList'

export const App = () => (
  <Grommet 
    theme={grommet}
    full
  >
    <AppContext>
      <Container>
        <TodoList/>
      </Container>
    </AppContext>
  </Grommet>
)