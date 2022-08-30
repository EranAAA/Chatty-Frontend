import React from 'react'
import { Routes, Route } from 'react-router'

import { ChattyApp } from './pages/app-chatty'

import '../src/assets/scss/main.scss'

export const App = () => {
   return (
      <div className="App">

         <main className="routes-container">
            <Routes>
               <Route path='/' element={<ChattyApp />} />
            </Routes>
         </main>

      </div>
   )
}

