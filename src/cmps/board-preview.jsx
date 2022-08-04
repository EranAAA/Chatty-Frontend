import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export const BoardPreview = ({ chat }) => {

   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   const isUserLogged = () => {
      if (chat.userId === loggedInUser._id) return true
   }

   return (
      <div className="board-preview" style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}`}}>
         {isUserLogged() && <p className='user-msg'>{chat.msg}</p>}
         {!isUserLogged() && <p className='friend-msg'>{chat.msg}</p>}
      </div>
   )
}