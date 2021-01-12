import React from 'react'

import { Box } from 'grommet'

const Container = ({ children }) => (
  <Box
    align='center'
    justify='center'
    pad='medium'
    fill
  >
    <Box
      background='light-6'
      width='large'
      align='center'
      justify='center'
      round='small'
    >
      {children}
    </Box> 
  </Box>
)

export default Container