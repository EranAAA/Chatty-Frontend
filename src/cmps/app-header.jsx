import React from 'react'
import { LogoBlue } from '../services/svg-service.js'
import { NavLink } from 'react-router-dom'


export const AppHeader = () => {

   return (
      <>
         <div className="header-container flex">
            <div className="logo">
               <LogoBlue />
            </div>
            <div className="nav-bar flex">
               <NavLink to="/chatty-app">Chatty</NavLink>
               <NavLink to="/sign-in">Sign in</NavLink>
               <NavLink to="/sign-up">Sign up</NavLink>
            </div>
         </div>
      </>
   )
}