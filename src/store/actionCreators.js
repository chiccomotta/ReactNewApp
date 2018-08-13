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

export const fetchUser = () => dispatch => {
  // prima dispatch della action di inizio fetch
  dispatch({ type: 'FETCH_USER_START' })

  // fetch API
  return fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(json => {
      // ho la risposta, dispatch del'action success
      dispatch({ type: 'FETCH_USER_SUCCESS', result: json })
      return json // non necessario ma ci permette di concatenare altre promises
    })
    .catch(err => console.log(err))
}
