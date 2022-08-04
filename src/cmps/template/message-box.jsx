import React from 'react';

import { MdSend, MdSettingsVoice } from 'react-icons/md';

export const MessageBox = () => {

   return (
      <section className="message-box">

         <div className="text-input" id="message-box" placeholder="Type a message" contentEditable></div>

         <div className="button-container">
            <button id="voice-button" className="common-button">
               <span className="icon"><MdSettingsVoice/></span>
            </button>

            <button id="submit-button" className="common-button">
               <span className="icon"><MdSend/></span>
            </button>
         </div>

      </section>
   )
}