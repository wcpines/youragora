import { combineReducers } from 'redux'

// function users(state = [], action){
//   switch (action.type) {
//     case "FETCH_VIDEOS":
//       return action.payload.videos
//     default:
//       return state
//   }
// }


function mainArticle(state = {}, action){
 switch (action.type) {
   case "FETCH_ARTICLE":
        return action.payload
    default:
         return state
    }
}

const rootReducer = combineReducers({ mainArticle })

export default rootReducer
