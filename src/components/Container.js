import React from 'react'

import { Box } from 'grommet'

export const Container = ({ children }) => (
  <Box
    align='center'
    justify='center'
    pad='medium'
    fill
  >
    <Box
      background='light-6'
      width='large'
      height='medium'
      align='center'
      justify='center'
      round='small'
    >
      {children}
    </Box> 
  </Box>
)