import React, { useState, useEffect } from 'react'

import { MessageBox } from './template/message-box.jsx'
import { BoardList } from './board-list'

export const ChattyBoard = ({ chats }) => {

   if (!chats.length) return

   return (
      <>
         <BoardList chats={chats[0].chat} />

         <div className="message-box-container">
            <MessageBox />
         </div>
      </>
   )
}