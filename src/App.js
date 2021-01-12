import React from 'react'
import { Grommet, grommet, Heading } from 'grommet'
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
        <Heading level={2}>
          🚦☑️ Reduce Todos
        </Heading>
        <TodoMeter/>
        <TodoList/>
      </Container>
    </AppContext>
  </Grommet>
)