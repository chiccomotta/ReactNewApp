import { createStore, applyMiddleware } from 'redux'
import update from 'immutability-helper'
import thunkMiddleware from 'redux-thunk'

// ActionTypes constants
import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  ADD_CREDITS,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from 'store/actionTypes'

// Creo lo stato iniziale
const initialState = {
  counter: 0,
  name: 'Cristiano Motta',
  role: 'Developer',
  files: [],
  credits: 0,
  todos: [],
  loading: false,
  user: {},
  error: null
}

// Reducer
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.value
      }

      break
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.value
      }
      break

    case ADD_TODO:
      return update(state, { todos: { $push: [action.value] } })
      break

    case ADD_CREDITS:
      return update(state, { credits: { $set: state.credits + action.credits } })
      break

    case FETCH_USER_START:
      return {
        ...state,
        loading: true
      }
      break

    case FETCH_USER_SUCCESS:
      return update(state, { loading: { $set: false }, user: { $set: action.result } })

    case FETCH_USER_FAILURE:
      return update(state, { loading: { $set: false }, error: { $set: action.error } })

    default:
      return state
  }
}

// Creo lo store (gli passo il middleware thunkMiddleware per le action asincrone)
const store = createStore(mainReducer, initialState, applyMiddleware(thunkMiddleware))
export default store
