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
        todoKeys.map(todoKey => {
          const todo = todoEntities[todoKey]
          const { id, name, description } = todo

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