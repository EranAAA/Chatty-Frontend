import React, { useState, useEffect } from 'react'
import { MessageBox } from './message-box.jsx'

export const ChatBoard = () => {

   return (
      <>
         <h1>Hello chat board</h1>
         <ol class="messenger-list">
            <li class="common-message time is-you">
               <p class="common-message-content">
                  This is Today
               </p>
               <span class="status is-seen">✔️✔️</span>
               <time datetime>14:11</time>
            </li>
         </ol>
         <div class="message-box">
            <MessageBox />
         </div>
      </>
   )
}