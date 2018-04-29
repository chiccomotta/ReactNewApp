export const actAddTodo = value => {
  return {
    type: 'ADD_TODO',
    value: value
  }
}

export const actAddCredits = credits => {
  return {
    type: 'ADD_CREDITS',
    credits
  }
}
