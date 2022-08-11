import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export const ChatPreview = ({ chat }) => {

   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   const isUserLogged = () => {
      if (chat.userId === loggedInUser._id) return true
   }

   return (
      <div className="chat-preview" style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}` }}>
         {isUserLogged() &&
            <p className='msg user-msg'>
               <span>Name1</span>
               <div>{chat.msg}</div>
            </p>}
         {!isUserLogged() &&
            <p className='msg friend-msg'>
               <span>Name1</span>
               <div>{chat.msg}</div>
            </p>}
      </div>
   )
}