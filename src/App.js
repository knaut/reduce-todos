import React from 'react'
import { Grommet, grommet } from 'grommet'
import './index.css'

import AppContext from './AppContext'
import Container from './components/Container'
import TodoList from './components/TodoList'
import TodoMeter from './components/TodoMeter'

export const App = () => (
  <Grommet 
    theme={grommet}
    full
  >
    <AppContext>
      <Container>
        <TodoMeter/>
        <TodoList/>
      </Container>
    </AppContext>
  </Grommet>
)