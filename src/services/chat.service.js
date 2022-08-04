
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
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '102',
               msg: 'hey!',
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '101',
               msg: 'bye!',
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '102',
               msg: 'bye fucker',
               createdAt: '',
               isSeen: true,
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
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '102',
               msg: 'hey!',
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '103',
               msg: 'bye!',
               createdAt: '',
               isSeen: true,
            },
            {
               userId: '102',
               msg: 'bye fucker',
               createdAt: '',
               isSeen: true,
            }
         ]
      },

   ]
}


