
const initialState = {
    chats: [],
}

export function chatReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case 'SET_CHATS':
            newState = { ...state, chats: action.chats }
            break
        case 'UPDATE_CHAT':
            // console.log(' state.chats', state.chats )
            // console.log(' action', action )
            newState = {
                ...state, chats:
                    state.chats.map(chat => chat._id === action.updatedChat._id ? action.updatedChat : chat)
            }
            break
        default:
    }
    // For debug:
    window.userState = newState
    return newState
}
