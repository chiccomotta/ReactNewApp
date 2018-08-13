import { createStore, applyMiddleware } from 'redux'
import update from 'immutability-helper'
import thunkMiddleware from 'redux-thunk'

// Creo lo stato iniziale
const initialState = {
  counter: 0,
  name: 'Cristiano Motta',
  role: 'Developer',
  files: [],
  credits: 0,
  todos: [],
  loading: false,
  users: {}
}

// Reducer
const mainReducer = (state = initialState, action) => {
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
      return update(state, { todos: { $push: [action.value] } })
      break

    case 'ADD_CREDITS':
      return update(state, { credits: { $set: state.credits + action.credits } })
      break

    case 'FETCH_USER_START':
      return {
        ...state,
        loading: true
      }
      break

    case 'FETCH_USER_SUCCESS':
      return update(state, { loading: { $set: false }, users: { $set: action.result } })

    default:
      return state
  }
}

// Creo lo store (gli passo il middleware thunkMiddleware per le action asincrone)
const store = createStore(mainReducer, initialState, applyMiddleware(thunkMiddleware))

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

// store.dispatch(decrement)
// console.log(store.getState())

console.log('------------------')
store.dispatch(increment)
console.log(store.getState())

export default store
