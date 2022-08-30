import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { loadChats, updateChat } from '../store/actions/chat.action'

import { ChattySideBar } from '../cmps/chatty-side-bar'
import { ChattySideHeader } from '../cmps/chatty-side-header'

import { ChattyBoard } from '../cmps/chatty-board.jsx'
import { ChattyBoardHeader } from '../cmps/chatty-board-header.jsx'
import { DynamicPopUp } from '../cmps/template/dynamic-popup'

export const AppChatty = () => {

   const dispatch = useDispatch()

   const { loggedInUser } = useSelector(({ userModule }) => userModule)
   const { chats } = useSelector(({ chatModule }) => chatModule)

   const [chatIdDisplay, setChatIdDisplay] = useState('')
   const [firstMsgVisible, setFirstMsgVisible] = useState('')

   const [isHideSide, setIsHideSide] = useState(false);
   const [isHideMain, setIsHideMain] = useState(false);
   const [backing, setBacking] = useState(false);
   const [desktopSize, setDesktopSize] = useState('');

   useEffect(() => {
      if (loggedInUser) loadData()
      window.addEventListener('resize', autoResize)
      autoResize()
      return () => window.removeEventListener('resize', autoResize);
   }, [loggedInUser])

   useEffect(() => {
      if (window.innerWidth <= 550) {
         if (backing) {
            setIsHideSide(false)
            setIsHideMain(true)
         } else {
            setIsHideSide(true)
            setIsHideMain(false)
         }
      }

   }, [backing])

   useEffect(() => {
      if (window.innerWidth <= 550) {
         setIsHideSide(false)
         setIsHideMain(true)
         setBacking(false)
      }

   }, [chatIdDisplay])

   const autoResize = () => {
      setDesktopSize(window.innerWidth)
      // console.log(window.innerWidth);
      if (window.innerWidth <= 750) {
         setIsHideSide(false)
         setIsHideMain(true)
      } else {
         setIsHideSide(false)
         setIsHideMain(false)
      }
   }

   const loadData = async () => {
      if (loggedInUser._id) {
         await dispatch(loadChats(loggedInUser._id))
      }
   }

   const getDisplayChat = () => {
      if (!chatIdDisplay) return
      if (!chats.length) return

      let chat = chats.filter(chat => chat._id === chatIdDisplay)
      return chat[0]
   }

   const onUpdateChat = async (text) => {
      const date = Date.now()
      let chatIdx = chats.findIndex((chat) => chat._id === chatIdDisplay)
      const updatedChat = chats[chatIdx]

      updatedChat.msgs.push({
         text,
         isSeen: false,
         userId: loggedInUser._id,
         createdAt: date
      })
      await dispatch(updateChat(updatedChat))
   }

   // if (!chats) return

   return (
      <section className="app-chatty">

         <aside className={`chatty-side ${isHideSide ? 'hide' : ''}`}>
            <ChattySideHeader loggedInUser={loggedInUser} />
            <ChattySideBar loggedInUser={loggedInUser} chats={chats} setChatIdDisplay={setChatIdDisplay} />
         </aside>

         <main className={`chatty-main ${isHideMain ? 'hide' : ''}`}>
            {/* NEED TO ADD USE_MEMO BECAUSE ITES MAKE IT ALL RENDEERD  */}
            <ChattyBoardHeader chat={getDisplayChat()} loggedInUser={loggedInUser} setBacking={setBacking} />
            <DynamicPopUp firstMsgVisible={firstMsgVisible} />
            <ChattyBoard chat={getDisplayChat()} onUpdateChat={onUpdateChat} setFirstMsgVisible={setFirstMsgVisible} />
         </main>

      </section>
   )
}





