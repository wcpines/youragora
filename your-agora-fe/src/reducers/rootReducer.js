import { combineReducers } from 'redux'
import { browserHistory } from 'react-router'

function currentUser(state = {making_user: false, userId: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'FETCH_USER':
      return {...state, userId: action.currentUser.id, userName: action.currentUser.name, userEmail: action.currentUser.email} 
    case 'SIGNIN_USER':
      return {...state, making_user: false, userId: action.currentUser.id, userName: action.currentUser.name, userEmail: action.currentUser.email}
    case 'SIGN_OUT':
      return {making_user: false, userId: null}
    default:
      return state
  }
}


function articles(state = {fetched: [], fetching: false}, action){
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {...state, fetching: true}
    case "FETCH_ARTICLES":
      return {...state, fetched: action.payload, fetching: false}
    default:
      return state
  }
}

function stashes(state = [], action){
  switch (action.type) {
    case "STASH_ARTICLE":
      return [...state, action.payload]
    case "FETCH_STASHES":
      return action.payload
    default:
      return state
  }
}

function mainArticle(state = {article: {title: "", content: ""}, must: "Stash"}, action ){
  switch (action.type) {
    case "FETCH_ARTICLES":
      return Object.assign({}, state, action.payload[0])
    case "STASH_ARTICLE":
      return {...state, must: "Stashed"}
    case "NEXT_ARTICLE":
      browserHistory.push(`/articles/random/teaser`)
      var payload = action.payload 
      return Object.assign({}, state, {payload, must: "Stash"})
      // return {...state, action.payload, must: "Stash"}
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, currentUser, mainArticle, stashes })

export default rootReducer


