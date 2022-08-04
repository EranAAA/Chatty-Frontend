import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { loadChats } from '../store/actions/chat.action'

import { ChattyHeader } from '../cmps/chatty-header'
import { ChattySideBar } from '../cmps/chatty-side-bar'
import { ChattyBoard } from '../cmps/chatty-board.jsx'


export const ChattyApp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { users, loggedInUser } = useSelector(({ userModule }) => userModule)
    const { chats } = useSelector(({ chatModule }) => chatModule)

    useEffect(() => {
        if (!loggedInUser) return navigate(`../`);
        loadData()
    }, [])

    const loadData = async () => {
        await dispatch(loadChats())
    }

    return (
        <section className="app-chatty-grid">

            <header className="chatty-header">
                <ChattyHeader />
            </header>

            <aside className="chatty-side">
                <ChattySideBar loggedInUser={loggedInUser} chats={chats}/>
            </aside>

            <main className='chatty-board'>
                <ChattyBoard chats={chats}/>
            </main>

        </section>
    )
}





