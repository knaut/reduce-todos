import React, { useContext } from 'react'
import { Box, Heading, Text, CheckBox } from 'grommet'

import { AppContext } from '../AppContext'

import { checkedTodo } from '../actions'

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

const TodoCheckbox = ({ id }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <CheckBox
      onChange={() => dispatch(
        checkedTodo({
          id
        })
      )}
    />
  )
}


const TodoItem = ({ id, name, description }) => (
  <Box as='li'>
    <TodoCheckbox id={id}/>
    <TodoText name={name} description={description}/>
  </Box>
)

export default TodoItem