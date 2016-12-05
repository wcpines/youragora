import { combineReducers } from 'redux'

function currentUser(state = {making_user: false, userId: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'FETCH_USER':
      return {...state, userId: action.currentUserId}
    case 'LOGIN_USER':
      return {...state, making_user: false, userId: action.currentUser}
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

const rootReducer = combineReducers({ articles, currentUser })

export default rootReducer
