import React, { useEffect, useRef } from 'react'

import { MessageBox } from './template/message-box.jsx'
import { ChatList } from './chat-list.jsx'

export const ChattyBoard = ({ chat, onUpdateChat, setFirstMsgVisible }) => {

   const elmRef = useRef(null);

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);

   }, [])

   const scrollHandler = () => {
      const nodeOffsetTop = elmRef.current.querySelectorAll('.chat-preview')
      const arrOffsetTop = Array.from(nodeOffsetTop)

      for (let i = 0; i < arrOffsetTop.length; i++) {
         if (arrOffsetTop[i].offsetTop >= (elmRef.current.scrollTop - 50)) {
            setFirstMsgVisible(arrOffsetTop[i].id)
            break
         }
      }
   }

   return (
      <div className="chatty-board">
         <div className="chat-list" ref={elmRef} onScroll={scrollHandler}>
            {chat && <ChatList chat={chat} />}
         </div>
         <MessageBox onUpdateChat={onUpdateChat} />
      </div>
   )
}