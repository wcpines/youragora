import { combineReducers } from 'redux'

function authenticatedUsers(state = {making_user: false, currentUser: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'LOGIN_USER':
      return {...state, making_user: false, currentUser: action.currentUser}
    default:
      return state
  }
}


function articles(state = [], action){
  switch (action.type) {
    case "FETCH_ARTICLE":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, authenticatedUsers })

export default rootReducer
