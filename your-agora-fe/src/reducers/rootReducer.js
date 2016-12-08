import { combineReducers } from 'redux'
import { browserHistory } from 'react-router'

function currentUser(state = {making_user: false, userId: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'FETCH_USER':
      return {...state, userId: action.currentUser.id, userName: action.currentUser.name, userEmail: action.currentUser.email}
    case 'SIGNIN_USER':
      return {...state, userId: action.currentUser.id, userName: action.currentUser.name, userEmail: action.currentUser.email, making_user: false,}
    case 'SIGN_OUT':
      return {making_user: false, userId: null}
    default:
      return state
  }
}

function articles(state = {fetched: [], fetching: false, fetching_first_article: false}, action){
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {...state, fetching: true, fetching_first_article: true}
    case 'FETCH_FIRST_ARTICLE':
      return {...state, fetched: action.payload}
    case 'FETCHED_FIRST_ARTICLE':
      return {...state, fetching_first_article: false}
    case "FETCH_ARTICLES":
      return {...state, fetched: [...state.fetched, ...action.payload], fetching: false}
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

function mustStash(state = "Stash", action){
  switch (action.type) {
    case 'STASH_ARTICLE':
      return "Stashed"
    case 'NEXT_ARTICLE':
      return action.payload.stashes
    case 'FETCH_ARTICLES':
      return 'Stash'
    default:
      return state
  }
}

function mainArticle(state = {article: {title: "", content: ""}}, action ){
  switch (action.type) {
    case "FETCH_FIRST_ARTICLE":
      return action.payload[0]
    case "NEXT_ARTICLE":
      browserHistory.push(`/articles/random/teaser`)
      return action.payload.nextArticle
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, currentUser, mainArticle, stashes, mustStash })

export default rootReducer
