import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux/es/exports'
import moment from 'moment';

import { BiCheckDouble, BiCheck } from 'react-icons/bi'

export const ChatPreview = ({ msg, userInfo, isLast }) => {

   // console.log(msg);
   // console.log(userInfo);

   const elmRef = useRef(null);
   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   useEffect(() => {
      if (isLast) elmRef.current?.scrollIntoView(true);
      if (isLast) elmRef.current?.scrollIntoView({ block: "end" });
   }, [msg])

   const isUserLogged = () => {
      if (msg.userId === loggedInUser._id) return true
   }

   const dateDisplayed = (createdAt) => {
      const date = new Date(createdAt)
      return date.toLocaleTimeString('he-IL', { hour: 'numeric', minute: 'numeric' })
   }

   const getMonthCreated = () => {
      moment.locale('he');
      return moment(msg.createdAt).format('DD/MM/YYYY')
   }

   const getFriendsName = (userId) => {
      const user = userInfo.filter(user => user._id === userId)
      return user[0].username
   }

   return (
      <div className="chat-preview" ref={elmRef} id={getMonthCreated()} style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}` }}>
         {isUserLogged() &&
            <div className='msg user-msg'>
               <span>{loggedInUser.username}</span>
               <p>{msg.text}</p>
               <div className='time-isseen'>
                  <p className="time-text">{dateDisplayed(msg.createdAt)}</p>
               </div>
            </div>}
         {!isUserLogged() &&
            <div className='msg friend-msg'>
               <span>{getFriendsName(msg.userId)}</span>
               <p>{msg.text}</p>
               <div className='time-isseen'>
                  <p className="time-text">{dateDisplayed(msg.createdAt)}</p>
                  {msg.isSeen ? <div className="isSeen"><BiCheckDouble /></div> : <div className=""><BiCheck /></div>}
               </div>
            </div>}

      </div>
   )
}


