import React, { useContext } from 'react'
import { Box, Heading, Text, CheckBox, Grid } from 'grommet'

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
  <Box as='li' pad={{vertical: 'small'}}>
    <Grid
      fill
      columns={[
        'xxsmall',
        'flex'
      ]}
    >
      <Box
        align='left'
        justify='center'
      >
        <TodoCheckbox id={id}/>
      </Box>
      <Box>
        <TodoText name={name} description={description}/>
      </Box>
    </Grid>
  </Box>
)

export default TodoItem