
const initialState = {
    chats: [],
}

export function chatReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case 'SET_CHATS':
            newState = { ...state, chats: action.chats }
            break
        default:
    }
    // For debug:
    window.userState = newState
    return newState
}
