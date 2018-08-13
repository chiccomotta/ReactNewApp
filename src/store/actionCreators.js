// ACTIONS: sono oggetti che vengono passati allo store e che descrivono come cambiare lo stato.
// Se passo un oggetto il dispatch è sincrono
// Se passo una funzione il dispatch è asincrono (utilizo il middleware thunkMiddleware)

// Sync action
export const increment = {
  type: 'INCREMENT',
  value: 1
}

// Sync action
export const decrement = {
  type: 'DECREMENT',
  value: 1
}

// Sync action
export const actAddTodo = value => {
  return {
    type: 'ADD_TODO',
    value: value
  }
}

// Sync action
export const actAddCredits = credits => {
  return {
    type: 'ADD_CREDITS',
    credits
  }
}

// Async action (redux-thunk: thunkMiddleware)
export const fetchUser = userId => dispatch => {
  // prima dispatch della action di inizio fetch
  dispatch({ type: 'FETCH_USER_START' })

  // fetch API
  return fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(response => response.json())
    .then(json => {
      // ho la risposta, dispatch del'action success
      dispatch({ type: 'FETCH_USER_SUCCESS', result: json })
      return json // non necessario ma ci permette di concatenare altre promises
    })
    .catch(err =>
      dispatch({ type: 'FETCH_USER_FAILURE', error: 'ERROR calling remote API' })
    )
}
