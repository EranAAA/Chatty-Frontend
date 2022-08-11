import React, {useEffect} from 'react'
import { ChatPreview } from './chat-preview'

export const ChatList = ({ chats }) => {

   // useEffect(() => {
   //    const timer = setTimeout(() => {
   //       chats.forEach((chat) =>
   //       chat.isSeen=true)
   //    }, 2000)
   //    return () => clearTimeout(timer);
   //  }, []);


   return (
      <div className="chat-list flex flex-column">
               { chats.map((chat, idx) => <ChatPreview key={idx} chat={chat} chats={chats} />
            )}
      </div>
   )
}