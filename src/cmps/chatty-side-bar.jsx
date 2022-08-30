import React from 'react';
import { CgProfile } from 'react-icons/cg';

export const ChattySideBar = ({ loggedInUser, chats, setChatIdDisplay }) => {

   // if (!chats) return

   const getFriendUserInfo = (userInfo) => {
      return userInfo.filter(user => user._id !== loggedInUser._id)
   }

   return (
      <div className="side-bar">

         <section className="search">
            <input type="search" className="text-input" placeholder="Search or start new chat"></input>
         </section>

         <div className='chat-list-side'>
            {chats.map(chat =>
               <div className="chat-info-container" onClick={() => setChatIdDisplay(chat._id)} key={chat._id}>
                  <div className="img">
                     <CgProfile />
                  </div>
                  <div className="text-container">
                     <span className='name'>{getFriendUserInfo(chat.userInfo)[0].username}</span>
                     <span className='last-msg'>{chat.msgs[chat.msgs.length - 1].text}</span>
                  </div>
               </div>
            )}
         </div>
      </div>
   )

}