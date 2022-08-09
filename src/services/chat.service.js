import { httpService } from './http.service'
const axios = require('axios').default;

export const chatService = {
   createChat,
   getChats,
   updateChat
}

async function updateChat(chat) {
   try {
      return await httpService.put(`chat/${chat._id}`, chat)
   } catch (err) {
      console.log('cant update chat')
      throw err
   }
}



async function getChats(userID = {}) {
   try {
      return await httpService.get(`chat`, { userID })
   } catch (err) {
      console.log('cant chat query')
      throw err
   }
}

function createChat() {
   return {
      createdAt: '',
      chat: []
   }
}

