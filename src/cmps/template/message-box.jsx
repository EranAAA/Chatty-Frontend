import React, { useState } from 'react'

import { MdSend, MdSettingsVoice } from 'react-icons/md'

export const MessageBox = ({onUpdateChat}) => {
   const [msgText, setMsgText] = useState('')

   const handleChange = (ev) => {
      setMsgText(ev.target.value)
   }

   const onSendMsg = () => {
      onUpdateChat(msgText)
   }


   return (
      <section className="message-box">

         <input type="text" value={msgText} onChange={handleChange} className="text-input" placeholder="Type a message"></input>
         {/* <div className="text-input" id="message-box" placeholder="Type a message" contentEditable></div> */}

         <div className="button-container">
            <button id="voice-button" className="common-button">
               <span className="icon"><MdSettingsVoice /></span>
            </button>

            <button onClick={onSendMsg} id="submit-button" className="common-button">
               <span className="icon"><MdSend /></span>
            </button>
         </div>

      </section>
   )
}