import React, { useState, useEffect } from 'react'
import { MessageBox } from './message-box.jsx'

export const ChattyBoard = () => {

   return (
      <>
         <h1>Hello chat board</h1>
         <ol className="messenger-list">
            <li className="common-message time is-you">
               <p className="common-message-content">
                  This is Today
               </p>
               <span className="status is-seen">✔️✔️</span>
               <time dateTime='true'>14:11</time>
            </li>
         </ol>
         <div className="message-box">
            <MessageBox />
         </div>
      </>
   )
}