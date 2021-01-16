import React, { useContext } from 'react'
import { Box, Heading, Text, CheckBox, Grid } from 'grommet'
import { Trash } from 'grommet-icons'

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

const TodoDelete = ({ id }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <Trash
      onClick={() => dispatch({
        type: 'TODO_DELETE',
        payload: id
      })}
    />
  )
}


const TodoItem = ({ id, name, description }) => (
  <Box as='li' pad={{vertical: 'small'}}>
    <Grid
      fill
      columns={[
        'xxsmall',
        'flex'
      ]}
    >
      <Box justify='center'>
        <TodoCheckbox id={id}/>
      </Box>
      <Box>
        <TodoText name={name} description={description}/>
      </Box>
      <Box justify="end">
        <TodoDelete id={id}/>
      </Box>
    </Grid>
  </Box>
)

export default TodoItem