import React, {useEffect} from 'react'
import { useSelector } from 'react-redux/es/exports'

export const ChatPreview = ({ chats, chat }) => {
   const { loggedInUser } = useSelector(({ userModule }) => userModule)

useEffect(() => {
   setTimeout(() => {
      if (chat.userId !== loggedInUser) chats.forEach((chat) =>
          chat.isSeen = true)
  }, 3000)
    }, [])

   const isUserLogged = () => {
      if (chat.userId === loggedInUser._id) return true
   }

   return (
      <div className="chat-preview" style={{ textAlign: `${isUserLogged() ? 'right' : 'left'}` }}>
         {isUserLogged() &&
            <div className='msg user-msg'>
               <span>Name1</span>
               <p>{chat.msg}</p>
               <div className='time-isseen flex'>
                  <p className="time-text">{chat.createdAt}</p>
                  {chat.isSeen ? <div className="isSeen">VV</div> : <div className="">VV</div>}
               </div>
            </div>}
         {!isUserLogged() &&
            <div className='msg friend-msg'>
               <span>Name1</span>
               <p>{chat.msg}</p>
               <div className='time-isseen flex'>
                  <p className="time-text">{chat.createdAt}</p>
                  {chat.isSeen && <span className="isSeen">vv</span>}
               </div>
            </div>}
      </div>
   )
}