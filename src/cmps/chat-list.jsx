import React from 'react'

import { ChatPreview } from './chat-preview'

export const ChatList = ({ chat }) => {

   return (
      < >
         {chat.msgs.map((msg, idx) => <ChatPreview key={idx} msg={msg} userInfo={chat.userInfo} isLast={chat.msgs.length - 1 === idx} />)}
      </>
   )
}