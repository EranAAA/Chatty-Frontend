import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { loadChats, updateChat } from '../store/actions/chat.action'

import { ChattyHeader } from '../cmps/chatty-header'
import { ChattySideBar } from '../cmps/chatty-side-bar'
import { ChattyBoard } from '../cmps/chatty-board.jsx'


export const ChattyApp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { users, loggedInUser } = useSelector(({ userModule }) => userModule)
    const { chats } = useSelector(({ chatModule }) => chatModule)

    const [chatIdDisplay, setChatIdDisplay] = useState('')

    useEffect(() => {
        if (!loggedInUser) return navigate(`../`)
        loadData()
    }, [])

    const loadData = async () => {
        await dispatch(loadChats(loggedInUser._id))
    }

    const getDisplayChat = () => {
        if (!chatIdDisplay) return
        let chat = chats.filter(chat => chat._id === chatIdDisplay)
        return chat[0].chat
    }

    const onUpdateChat = async (msg) => {
        let chatIdx = chats.findIndex((chat) => chat._id === chatIdDisplay)
        const updatedChat = chats[chatIdx]
        updatedChat.chat.push({
            msg,
            isSeen: false,
            userId: loggedInUser._id,
            createdAt: Date.now()
        })
        const beupdatedChat = await dispatch(updateChat(updatedChat))
        console.log('beupdatedChat', beupdatedChat)
    }

    console.log('loggedInUser', loggedInUser)
    return (
        <section className="app-chatty-grid">

            <header className="chatty-header">
                <ChattyHeader />
            </header>

            <aside className="chatty-side">
                <ChattySideBar loggedInUser={loggedInUser} chats={chats} setChatIdDisplay={setChatIdDisplay} />
            </aside>

            <main className='chatty-board'>
                <ChattyBoard chat={getDisplayChat()} onUpdateChat={onUpdateChat} />
            </main>

        </section>
    )
}





