import React from 'react'

import { MessageBox } from './template/message-box.jsx'
import { ChatList } from './chat-list.jsx';

export const ChattyBoard = ({ chat, onUpdateChat }) => {

   // if (!chat) return

   return (
      <>
         <div className="message-list">
            {chat && <ChatList chats={chat} />}
         </div>

         <div className="message-box-container">
            <MessageBox onUpdateChat={onUpdateChat} />
         </div>
      </>
   )
}