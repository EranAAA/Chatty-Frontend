import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { loadUsers } from '../store/actions/user.action.js'
import { LogoBlue } from '../services/svg-service.js'

import { SignUp } from '../cmps/app-sign-up'
import { SignIn } from '../cmps/app-sign-in'

export const AppHeader = () => {

   const dispatch = useDispatch()
   const { users } = useSelector((storeState) => storeState.userModule)

   const [isLooged, setIsLooged] = useState(false)
   const [isCloseModalSignin, setIsCloseModalSignin] = useState(false)
   const [isCloseModalSignup, setIsCloseModalSignup] = useState(false)

   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }

   const onLogin = () => {
      setIsCloseModalSignin(true)
      console.log('login');
   }

   const onSignup = () => {
      setIsCloseModalSignup(true)

      console.log('signup');
   }

   return (
      <>
         <div className="logo">Chatty{/*<LogoBlue />*/}</div>

         <div className="btns">
            <div className="login" onClick={onLogin}>Login</div>
            <div className="signup" onClick={onSignup}>Signup</div>
         </div>

         <div className="signup_login">
            {isCloseModalSignin && <SignIn setIsCloseModal={setIsCloseModalSignin} users={users} />}
            {/* {isCloseModalSignup && <SignUp setIsCloseModal={setIsCloseModalSignup} />} */}
         </div>
      </>
   )
}


