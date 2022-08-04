import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { loadUsers } from '../store/actions/user.action.js'
import { SignUp } from './sign-up'

export const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        loadData()
     }, [])
  
     const loadData = async () => {
        const users = await dispatch(loadUsers())
     }


    return (
        <div className="homepage container">
            <h1>Hello from homepage</h1>
            <Link to="/sign-in">LogIn</Link>
            <Link to="/sign-up">SignUp</Link>
        </div>
    )
}