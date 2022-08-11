import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export const ChatPreview = ({ chat }) => {

   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   const isUserLogged = () => {
      if (chat.userId === loggedInUser._id) return true
   }

   return (
      <div className="chat-preview" style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}`}}>
         {isUserLogged() && <p className='msg user-msg'>{chat.msg}</p>}
         {!isUserLogged() && <p className='msg friend-msg'>{chat.msg}</p>}
      </div>
   )
}