import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from './reducers/user.reducer.js'

export const store = configureStore({
  reducer: {
    userModule: userReducer
  }
})
