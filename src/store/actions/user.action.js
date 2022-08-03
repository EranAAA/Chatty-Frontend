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

export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.error('Error - cannot login:', err)
            console.log('Username or password invalid')
            setTimeout(() => {
                console.log('user error msg')
            }, 3000)
            throw err
        }
    }
}