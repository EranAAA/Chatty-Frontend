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

export const updateChat = (chat) => {
   try {
      return async (dispatch) => {
         const updatedChat = await chatService.updateChat(chat)
         dispatch({ type: 'UPDATE_CHAT', updatedChat })
         return updatedChat
      }
   } catch (err) {
      console.log('ChatActions: err in updateChat', err)
   }
}

export const clearChat = () => {
   try {
      return async (dispatch) => {
         dispatch({ type: 'CLEAR_CHATS' })
      }
   } catch (err) {
      console.log('Cannot clear chats', err)
   }
}


