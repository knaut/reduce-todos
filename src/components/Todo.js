import React from 'react'
import { Box, Heading, Text, Checkbox } from 'grommet'

const TodoText = ({ name, description }) => (
  <>
    <Box>
      <Heading
        level={3}
        margin='none'
      >
        {name}
      </Heading>
    </Box>
    <Box>
      <Text
        size='small'
      >
        {description}
      </Text>
    </Box>
  </>
)


const TodoItem = ({ name, description }) => (
  <Box as='li'>
    <TodoText name={name} description={description}/>
  </Box>
)

export default TodoItem