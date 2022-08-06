import React, { useState, useEffect } from 'react'

import { MessageBox } from './template/message-box.jsx'
import { ChatList } from './chat-list.jsx';
export const ChattyBoard = ({ chat }) => {

   if (!chat) return

   return (
      <>
         {chat && <ChatList chats={chat} />}

         <div className="message-box-container">
            <MessageBox />
         </div>
      </>
   )
}