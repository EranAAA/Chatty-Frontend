import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports'

import { BiCheckDouble, BiCheck } from 'react-icons/bi'

export const ChatPreview = ({ chats, chat }) => {
   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   useEffect(() => {
      // setTimeout(() => {
      //    if (chat.userId !== loggedInUser) chats.forEach((chat) =>
      //       chat.isSeen = true)
      // }, 3000)
   }, [])

   const isUserLogged = () => {
      if (chat.userId === loggedInUser._id) return true
   }

   const dateDisplayed = (createdAt) => {
      const date = new Date(createdAt)
      return date.toLocaleTimeString('he-IL', {hour: 'numeric', minute: 'numeric'})
   }

   return (
      <div className="chat-preview" style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}` }}>
         {isUserLogged() &&
            <div className='msg user-msg'>
               <span>Name1</span>
               <p>{chat.msg}</p>
               <div className='time-isseen flex'>
                  <p className="time-text">{dateDisplayed(chat.createdAt)}</p>
               </div>
            </div>}
         {!isUserLogged() &&
            <div className='msg friend-msg'>
               <span>Name1</span>
               <p>{chat.msg}</p>
               <div className='time-isseen flex'>
                  <p className="time-text">{dateDisplayed(chat.createdAt)}</p>
                  {chat.isSeen ? <div className="isSeen"><BiCheckDouble /></div> : <div className=""><BiCheck/></div>}
               </div>
            </div>}
      </div>
   )
}