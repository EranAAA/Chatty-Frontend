import React, { useState, useEffect } from 'react'

import { MessageBox } from './template/message-box.jsx'
import { ChatList } from './chat-list.jsx';
export const ChattyBoard = ({ chat, onUpdateChat }) => {

   if (!chat) return

   return (
      // <section className="chat-msg-board-container flex flex-column">
      <>
         <div className="message-list">
            {chat && <ChatList chats={chat} />}
         </div>

         <div className="message-box-container">
            <MessageBox onUpdateChat={onUpdateChat} />
         </div>
      </>
      // </section>
   )
}