export default function(state, action) {
  logOldState(state)
  logAction(action)

  const { type, payload } = action

  const newState = {
    ...state
  }

  switch(type) {
    // add cases to modify newState here
    case CHECKED_TODO: {

      logOldState(state)
      logAction(action)

      const { type, payload } = action

      const newState = {
        ...state
      }

      switch(type) {
        // add cases to modify newState here
        case CHECKED_TODO: {

          const { id } = payload
          const { todoEntities } = state

          const newTodoEntities = {}
          
          for (let key in todoEntities) {
            const entity = todoEntities[key]

            if (entity.id === id) {

              newTodoEntities[ id ] = {
                ...entity,
                isCompleted: !entity.isCompleted
              }
              
            } else {

              newTodoEntities[ entity.id ] = { ...entity }

            }
          }

          newState.todoEntities = newTodoEntities

        }

      }

      logNewState(newState)
      return newState

    }

  }

  logNewState(newState)
  return newState
}
