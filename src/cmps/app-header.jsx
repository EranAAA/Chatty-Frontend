import React from 'react'
import { LogoBlue } from '../services/svg-service.js'
import { NavLink } from 'react-router-dom'


export const AppHeader = () => {

   return (
      <>
         <div className="header-container">
            <div className="logo">
               
               <NavLink to="/"><LogoBlue /></NavLink>
            </div>
            <div className="nav-bar">
               <NavLink to="/chatty-app">Chatty</NavLink>
               <NavLink to="/sign-in">Sign in</NavLink>
               <NavLink to="/sign-up">Sign up</NavLink>
            </div>
         </div>
      </>
   )
}