import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { setLoggedUser, login } from '../store/actions/user.action.js'
import { clearChat } from '../store/actions/chat.action.js'

import { LogoBlue } from '../services/svg-service.js'

export const SignIn = ({ setIsCloseModal, users }) => {

   const dispatch = useDispatch()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)
   const [checked, setChecked] = useState(false)


   const handleChange = ({ target }) => {
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onLogIn = async () => {
      isUserExist()
      dispatch(clearChat())
      dispatch(setLoggedUser({ email, password }))
      const loggedUser = await dispatch(login({ email, password }))
      if (loggedUser) console.log("Successfully logged in")
      else console.log("Wrong password or email")
      setIsCloseModal(false)
   }

   const isUserExist = () => {
      setIsExist(users.some(user => user.email === email))
      if (!isExist) console.log("User already exists")
      setIsCloseModal(false)
   }

   return (

      <section className="app-sign-in">

         <div className="close" onClick={() => setIsCloseModal(false)}>X</div>

         <div className="sign-in-card ">

            <div className="card-title ">
               <div className="logo-text ">
                  <LogoBlue />
                  <div className="welcome-text">Welcome Back</div>
               </div>
               <span className="text-redirect ">Don't have an account?
                  <a href="/sign-up" className="create-text">Create today!</a>
               </span>
            </div>

            <div className="signin-input ">
               <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
               <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />
            </div>

            <div className="remember-me ">
               <div className="remember-me-checked ">
                  <input type="checkbox" id="rememberme" name="rememberme" value={checked} checked={checked} onChange={e => setChecked(e.checked)} />
                  <label htmlFor="rememberme">Remember me</label>
               </div>
               <a href="/sign-up" className="forget-password">Forgot your password?</a>
            </div>

            <div className="btn-login">
               <button onClick={onLogIn}>Sign in</button>
            </div>

         </div>
      </section>
   )
}