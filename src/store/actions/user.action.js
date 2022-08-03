import { userService } from "../../services/user.service.js"

export const loadUsers = () => {
   try {
      return async (dispatch) => {
         const users = await userService.getUsers()
         console.log(users);
         dispatch({ type: 'SET_USERS', users })
         return users
      }
   } catch (err) {
      console.log('UserActions: err in loadUsers', err)
   }
}
