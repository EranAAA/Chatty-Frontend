import React from 'react'
import {Link} from 'react-router-dom'

export const Homepage = () => {
    return (
        <div>
            <h1>Hello from homepage</h1>
            <Link to="/signIn-signUp">LogIn</Link>
        </div>
    )
}