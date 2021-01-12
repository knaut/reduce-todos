import React from 'react'
import { Box } from 'grommet'

const TodoText = ({ name, description }) => (
  <Box as='li'>
    {name}
    {description}
  </Box>
)

export default TodoText