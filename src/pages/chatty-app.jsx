import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { ChattyHeader } from '../cmps/chatty-header'
import { ChattySideBar } from '../cmps/chatty-side-bar'


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
        <section class="main-grid container">
            <aside class="main-side">
                <ChattySideBar />
            </aside>
            <main class="main-content">
                <ChattyHeader />
            </main>

            <h1>Hello from ChattApp</h1>
            <h1>{loggedInUser.username}</h1>
            <h1>{loggedInUser.email}</h1>
        </section>
    )
}





