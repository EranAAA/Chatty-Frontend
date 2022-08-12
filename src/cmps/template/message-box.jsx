import React, { useState } from 'react'

import { MdSend, MdSettingsVoice } from 'react-icons/md'

export const MessageBox = ({ onUpdateChat }) => {
   const [msgText, setMsgText] = useState('')

   const handleChange = ({ target }) => {
      setMsgText(target.value)
   }

   const onSendMsg = () => {
      onUpdateChat(msgText)
      setMsgText('')
   }

   const onSendMsgByKeyDown = ({ key }) => {
      if (key === 'Enter') {
         onUpdateChat(msgText)
         setMsgText('')
      }
   }

   return (
      <section className="message-box">

         <input type="text" value={msgText} onChange={handleChange} onKeyDown={onSendMsgByKeyDown} className="text-input" placeholder="Type a message"></input>

         <div className="button-container">
            <div className="button">
               <span className="icon"><MdSettingsVoice /></span>
            </div>

            <div onClick={onSendMsg} className="button">
               <span className="icon"><MdSend /></span>
            </div>
         </div>

      </section>
   )
}