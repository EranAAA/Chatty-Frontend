
export const chatService = {
   getChats
}

function getChats() {
   return [
      {
         _id: 'msg101',
         createdAt: '',
         chat: [
            {
               userId: '101',
               msg: 'hey',
               createdAt: ''
            },
            {
               userId: '102',
               msg: 'hey!',
               createdAt: ''
            },
            {
               userId: '101',
               msg: 'bye!',
               createdAt: ''
            },
            {
               userId: '102',
               msg: 'bye fucker',
               createdAt: ''
            }
         ]
      },
      {
         _id: 'msg102',
         createdAt: '',
         chat: [
            {
               userId: '103',
               msg: 'hey',
               createdAt: ''
            },
            {
               userId: '102',
               msg: 'hey!',
               createdAt: ''
            },
            {
               userId: '103',
               msg: 'bye!',
               createdAt: ''
            },
            {
               userId: '102',
               msg: 'bye fucker',
               createdAt: ''
            }
         ]
      },

   ]
}


