import React, { useState, useEffect } from 'react';

export const ChattySideBar = ({ loggedInUser, chats }) => {

   if (!chats) return
   console.log('loggedInUser', loggedInUser);
   console.log('chat', chats);

   return (
      <>
         <div className='friends-list'>
            Friends List
            {loggedInUser.friends.map(friend => <div key={friend}>{friend}</div>)}
         </div>

         <br />

         <div className='chat-list'>
            Chat List
            {loggedInUser.msgId.map(msg => <div key={msg}>{msg}</div>)}
         </div>
      </>
   )

}