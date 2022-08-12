import React from 'react'
import { ChatPreview } from './chat-preview'

export const ChatList = ({ chats }) => {

   return (
      <div className="chat-list flex flex-column" >
         {chats.map((chat, idx) => <ChatPreview key={idx} chat={chat} chats={chats} isLast={chats.length - 1 === idx} />)}
      </div>
   )
}