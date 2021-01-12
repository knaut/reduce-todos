import React, { useContext } from 'react'

import { Box } from 'grommet'

import Todo from './Todo'

import { AppContext } from '../AppContext'

const TodoList = ({ children }) => (
  <Box as='ul'>
    {children}
  </Box>
)

export default function TodoListWithContext() {
  const { state } = useContext(AppContext)
  const { todoEntities, todoKeys } = state

  return (
    <TodoList>
      {
        todoKeys.map(todo => {
          const { id, name, description } = todoEntities[todo]

          return (
            <Todo
              key={id}
              id={id}
              name={name}
              description={description}
            />
          )
        })
      }
    </TodoList>
  )
}