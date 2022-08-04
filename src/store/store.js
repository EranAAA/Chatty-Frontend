import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from './reducers/user.reducer.js'
import { chatReducer } from './reducers/chat.reducer.js'

const rootReducer = combineReducers({
   userModule: userReducer,
   chatModule: chatReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
