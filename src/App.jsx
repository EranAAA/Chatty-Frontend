import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from '../src/cmps/app-header.jsx'
import { AppFooter } from '../src/cmps/app-footer.jsx'
import { ChattyApp } from './pages/app-chatty'

import '../src/assets/scss/main.scss'

export const App = () => {
   return (
      <div className="App">
         <header className="app-header-container ">
            <AppHeader />
         </header>
         <main className="routes-container">
            <Routes>
               <Route path='/' element={<ChattyApp />} />
            </Routes>
         </main>
         <footer className="app-footer-container">
            <AppFooter />
         </footer>
      </div>
   )
}

