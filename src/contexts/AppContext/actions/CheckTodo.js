export const CHECKED_TODO(stata, payload) {
  const { id } = payload;
  const { todoEntities } = state;
  const newTodoEntities = {};

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

  return newState;
}