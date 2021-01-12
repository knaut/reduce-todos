import React from 'react'
import { Grommet, grommet } from 'grommet'
import AppContext from './AppContext'
import { Container } from './components/Container'

import './index.css'

export const App = () => (
  <Grommet 
    theme={grommet}
    full
  >
    <AppContext>
      <Container>
        start
      </Container>
    </AppContext>
  </Grommet>
)