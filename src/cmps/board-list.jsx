import React from 'react'

import { BoardPreview } from './board-preview'

export const BoardList = ({ chats }) => {

   console.log('chats', chats);

   return (
      <div className="board-list">
         {chats.map((chat, idx) => <BoardPreview key={idx} chat={chat}/>)}
      </div>
   )
}