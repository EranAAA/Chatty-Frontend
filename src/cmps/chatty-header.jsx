import React, { useState, useEffect } from 'react';
import { ChatBoard } from './chatty-board.jsx'
import { MessageBox } from './message-box.jsx'

export const ChattyHeader = () => {

   return (
      <>
         <header class="common-header">
            <h1>chatty-header</h1>
         </header>
         <div class="messenger">
            <ChatBoard />
            <div class="message-box">
               <MessageBox />
            </div>
         </div>
      </>
   )
}