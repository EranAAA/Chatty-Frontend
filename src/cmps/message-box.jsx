import React, { useState, useEffect } from 'react';

export const MessageBox = () => {

   return (
      <>
         <h1>Hello message box</h1>

         <button className="common-button">
            <span className="icon">😃</span>
         </button>

         <div className="text-input" id="message-box" placeholder="Type a message" contentEditable></div>

         <button id="voice-button" className="common-button">
            <span className="icon">🎤</span>
         </button>

         <button id="submit-button" className="common-button">
            <span className="icon">➤</span>
         </button>
      </>
   )
}