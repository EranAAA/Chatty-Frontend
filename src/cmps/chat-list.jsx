import React from 'react'

import { ChatPreview } from './chat-preview'

export const ChatList = ({ chats }) => {

   return (
      <div className="chat-list">
         {chats.map((chat, idx) => <ChatPreview key={idx} chat={chat} />)}
      </div>
   )
}