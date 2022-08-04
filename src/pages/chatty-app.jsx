import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { ChattyHeader } from '../cmps/chatty-header'
import { ChattySideBar } from '../cmps/chatty-side-bar'
import { ChattyBoard } from '../cmps/chatty-board'

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
        <div className="chatty-app container">

            {/* AppHeader */}
            <ChattyHeader/>


            <ChattyBoard/>
            <p>loggedInUser: {loggedInUser.username}</p>
            <p>loggedInUser: {loggedInUser.email}</p>

            {/* SideBar */}
            <ChattySideBar/>
            {/* ChatBoard */}
        </div>
    )
}