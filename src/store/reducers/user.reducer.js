import { userService } from '../../services/user.service.js'

const initialState = {
    // loggedInUser: userService.getLoggedinUser() || null,
    loggedInUser: '',
    users: [],
}

export function userReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
<<<<<<< HEAD
        // case 'SET_LOGGED_USER':
        //     newState = { ...state, loggedInUser: action.user }
        //     break
        case 'SET_USER':
            newState = { ...state, loggedInUser: action.user }
            break
=======
        case 'SET_LOGGED_USER':
            newState = { ...state, loggedInUser: action.user }
            break
        // case 'SET_USER':
        //     newState = { ...state, loggedInUser: action.user }
        //     break
>>>>>>> 185fd8b618da0e95bf5c8307a23cfe4234b1959b
        // case 'REMOVE_USER':
        //     newState = {
        //         ...state,
        //         users: state.users.filter(user => user._id !== action.userId)
        //     }
        //     break
        case 'SET_USERS':
            newState = { ...state, users: action.users }
            break
        default:
    }
    // For debug:
    window.userState = newState
    return newState
}
