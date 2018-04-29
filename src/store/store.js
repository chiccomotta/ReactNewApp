import { createStore } from 'redux'

// Creo lo stato iniziale
const initialState = {
  counter: 0,
  name: 'Cristiano Motta',
  role: 'Developer',
  files: [],
  credits: 0,
  todos: []
}

// Creo lo store (createStore accetta una funziona con 2 parametri: lo stato iniziale e una action)
const store = createStore((state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.value
      }

      break
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - action.value
      }
      break

    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.value)
      }

    case 'ADD_CREDITS':
      return {
        ...state,
        credits: state.credits + action.credits
      }

    default:
      return state
  }
})

// ACTIONS: sono oggetti che vengono passati allo store e che descrivono come cambiare lo stato, es:
var increment = {
  type: 'INCREMENT',
  value: 1
}

var decrement = {
  type: 'DECREMENT',
  value: 1
}
// Per passare una action allo store si utilizza il metodo dispatch.
// Si dice che si dispatcha una action allo store, es:

// store.dispatch(increment)
// console.log(store.getState())

// store.dispatch(increment)
// console.log(store.getState())

// store.dispatch(decrement)
// console.log(store.getState())

export default store
