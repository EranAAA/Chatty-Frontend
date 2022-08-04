import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { ChattyHeader } from '../cmps/chatty-header'
import { ChattySideBar } from '../cmps/chatty-side-bar'
import { ChattyBoard } from '../cmps/chatty-board.jsx'


export const ChattyApp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { loggedInUser } = useSelector(({ userModule }) => userModule)

    useEffect(() => {
        if (!loggedInUser) return navigate(`../`);

        // loadData()
    }, [])

    const loadData = async () => {
        // await dispatch(loadUsers())
    }

    return (
        <section className="app-chatty-grid">

            <header className="chatty-header">
                <ChattyHeader />
            </header>

            <aside className="chatty-side">
                <ChattySideBar />
            </aside>

            <main className='chatty-board'>
                <ChattyBoard />
            </main>

        </section>
    )
}




