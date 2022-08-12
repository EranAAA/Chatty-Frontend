import React, { useState, useEffect } from 'react';

export const ChattySideBar = ({ loggedInUser, chats, setChatIdDisplay }) => {

   if (!chats) return

   return (
      <>
         <div className='friends-list'>
            <span>Friends List</span>
            {loggedInUser.friends.map(friend => <div key={friend}>{friend}</div>)}
         </div>

         <div className='chat-list-side'>
            <span>Chat List </span>

            {chats.map(chat => <div onClick={() => setChatIdDisplay(chat._id)} key={chat._id}>{chat._id}</div>)}
         </div>
      </>
   )

}