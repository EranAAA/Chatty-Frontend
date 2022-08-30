import React from 'react'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'

export const ChattyBoardHeader = ({ chat, loggedInUser, setBacking }) => {

   const getFriendUserInfo = (userInfo) => {
      return userInfo.filter(user => user._id !== loggedInUser._id)
   }

   const onBack = () => {
      setBacking(true)
   }

   return (
      <div className='board-header'>
         <div className="chat-container">
            <FaArrowLeft onClick={onBack} className="back"/>
            <img className="image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile pic"></img>
            {chat && <h1 className="username">{getFriendUserInfo(chat.userInfo)[0].username}</h1>}
            {!chat && <h1 className="username">Chat Title</h1>}
         </div>
         <BsThreeDotsVertical />
      </div>
   )
}