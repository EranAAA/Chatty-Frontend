import { chatService } from "../../services/chat.service.js"

export const loadChats = (userID) => {
   try {
      return async (dispatch) => {
         const chats = await chatService.getChats(userID)
         dispatch({ type: 'SET_CHATS', chats })
         return chats
      }
   } catch (err) {
      console.log('ChatActions: err in loadChats', err)
   }
}
