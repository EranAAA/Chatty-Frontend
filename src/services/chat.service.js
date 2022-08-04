import { httpService } from './http.service'
const axios = require('axios').default;

export const chatService = {
   createChat,
   getChats
}

async function getChats() {
   try {
      return await httpService.get(`chat`)
   } catch (err) {
      console.log('cant chat query');
      throw err
   }
}

function createChat() {
   return {
      createdAt: '',
      chat: []
   }
}


