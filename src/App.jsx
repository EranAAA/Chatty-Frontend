import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { useDispatch } from 'react-redux/es/exports'

import { loadUsers } from './store/actions/user.action'

import { AppChatty } from './pages/app-chatty'
import { AppHome } from './pages/app-home'

import '../src/assets/scss/main.scss'

export const App = () => {

   const dispatch = useDispatch()

   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<AppHome />} />
            <Route path='/chatty-app' element={<AppChatty />} />
         </Routes>
      </div>
   )
}