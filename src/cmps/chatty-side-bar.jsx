import React from 'react';
import { CgProfile } from 'react-icons/cg';

export const ChattySideBar = ({ loggedInUser, chats, setChatIdDisplay }) => {

   if (!chats) return
   console.log('chats', chats);

   const getFriendUserInfo = (userInfo) => {
      return userInfo.filter(user => user._id !== loggedInUser._id)
   }

   return (
      <>
         <div className='friends-list'>
            <span>Friends List</span>
            {/* {loggedInUser.friends.map(friend => <div key={friend}>{friend}</div>)} */}
         </div>

         <div className='chat-list-side'>
            <span className='title'>Chat List </span>

            {chats.map(chat =>
               <div className="chat-info-container" onClick={() => setChatIdDisplay(chat._id)} key={chat._id}>
                  <div className="img">
                     <CgProfile />
                  </div>
                  <div className="text-container">
                     <span className='name'>{getFriendUserInfo(chat.userInfo)[0].username}</span>
                     <span className='last-msg'>{chat.chat[chat.chat.length - 1].msg}</span>
                  </div>
               </div>
            )}
         </div>
      </>
   )

}