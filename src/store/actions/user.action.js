import { userService } from "../../services/user.service.js"

export const loadUsers = () => {
   try {
      return async (dispatch) => {
         const users = await userService.getUsers()
         dispatch({ type: 'SET_USERS', users })
         return users
      }
   } catch (err) {
      console.log('UserActions: err in loadUsers', err)
   }
}

export const setLoggedUser = (user) => {
   try {
      return (dispatch) => {
         dispatch({ type: 'SET_LOGGED_USER', user })
      }
   } catch (err) {
      console.log('UserActions: err in loadUsers', err)
   }
}
