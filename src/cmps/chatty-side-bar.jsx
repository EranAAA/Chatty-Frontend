import React, { useState, useEffect } from 'react';

export const ChattySideBar = ({ loggedInUser, chats, setChatIdDisplay }) => {

   if (!chats) return
   // console.log('loggedInUser', loggedInUser);
   console.log('chats', chats);

   // const getUserChats = () => {
   //    const userChats = chats.filter(chats =>)
   // }

   return (
      <>
         <div className='friends-list'>
            Friends List
            {loggedInUser.friends.map(friend => <div key={friend}>{friend}</div>)}
         </div>

         <br />

         <div className='chat-list'>
            Chat List
            {chats.map(chat => <div onClick={() => setChatIdDisplay(chat._id)} key={chat._id}>{chat._id}</div>)}
         </div>
      </>
   )

}