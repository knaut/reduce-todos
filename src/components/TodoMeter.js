import React, { useContext } from 'react'

import { Box, Meter, Heading } from 'grommet'

import { AppContext } from '../AppContext'

const getCompletedTodosValue = function(entities, total) {
  let count = 0

  for (let key in entities) {
    const entity = entities[key]
    
    const { isCompleted } = entity

    if (isCompleted === true) {
      count = count + 1
    }
  }

  // assume the count is akin to a percentage
  const percentage = (Math.floor((100 / total) * count));

  return percentage
}

export default function TodoMeter() {
  const { state } = useContext(AppContext)
  const { todoEntities, todoKeys } = state

  const isCompletedValue = getCompletedTodosValue(todoEntities, todoKeys.length)

  return (
    <Box>
      <Heading level={4}>To-dos completed: {isCompletedValue}% of {todoKeys.length}</Heading>
      <Meter type='bar' background='light-2' values={[{ value: isCompletedValue }]} />
    </Box>
  )
}