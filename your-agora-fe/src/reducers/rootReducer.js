import { combineReducers } from 'redux'

// function users(state = [], action){
//   switch (action.type) {
//     case "FETCH_VIDEOS":
//       return action.payload.videos
//     default:
//       return state
//   }
// }


function mainArticle(state = "", action){
 switch (action.type) {
   case "FETCH_CONTENT":
        let content = action.payload.content
        return content
    default:
         return state
    }
}

const rootReducer = combineReducers({ mainArticle })

export default rootReducer
