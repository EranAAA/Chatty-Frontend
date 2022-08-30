import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router'

import { setLoggedUser, login, signup, logout, clearUser } from '../store/actions/user.action.js'
import { clearChat } from '../store/actions/chat.action.js'

import { LogoBlue } from '../services/svg-service.js'

export const SignIn_SignUp = ({ setIsCloseModal, users }) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { loggedInUser } = useSelector(({ userModule }) => userModule)

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const [isExist, setIsExist] = useState(false)
   const [isSignin, setIsSignin] = useState(true)

   const handleChange = ({ target }) => {
      if (target.name === 'username') setUsername(target.value)
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onLogIn = async () => {
      await dispatch(clearUser())
      await dispatch(clearChat())
      dispatch(setLoggedUser({ email, password }))
      setIsCloseModal(true)
      const loggedUser = await dispatch(login({ email, password }))
      if (loggedUser) console.log("Successfully logged in")
      else console.log("Wrong password or email")
      navigate('/chatty-app')  

   }

   const onSignup = async () => {
      if (isUserExist()) return setIsExist(true)
      await dispatch(signup({ username, email, password }))
      setIsCloseModal(true)
      setIsExist(false)
      navigate('/chatty-app')  
   }

   const onLogout = async () => {
      await dispatch(logout())
      await dispatch(clearChat())
      await dispatch(clearUser())
      navigate('/')  
   }

   const isUserExist = () => {
      setIsExist(users.some(user => user.email === email))
      if (!isExist) console.log("User already exists")
      setIsCloseModal(true)
   }

   return (
      <section className="signin_signup">
         <div className="signin_signup_content">
            <div className="card-title ">
               <div className="logo-text "> <LogoBlue /></div>
               {isSignin && !loggedInUser && <div className="method-text">Welcome Back</div>}
               {!isSignin && !loggedInUser && <div className="method-text">Pleas SignUp!</div>}
               {loggedInUser && <div className="method-text">{`Goodbye ${loggedInUser.username}`}</div>}
            </div>

            <div className="signin-input ">
               {!isSignin && !loggedInUser && <input type="text" name='username' value={username} placeholder='Username' onChange={handleChange} required autoComplete="off" />}
               {!loggedInUser && <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />}
               {!loggedInUser && <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />}
            </div>

            <div className="btns">
               {isSignin && !loggedInUser && <button className="signin" onClick={onLogIn}>Sign In</button>}
               {isSignin && !loggedInUser && <div onClick={() => setIsSignin(false)} className="toggle">Change To SignUp</div>}
               {!isSignin && !loggedInUser && <button className="signup" onClick={onSignup}>Sign Up</button>}
               {!isSignin && !loggedInUser && <div onClick={() => setIsSignin(true)} className="toggle">Change To LogIn</div>}
               {loggedInUser && <button className="logout" onClick={onLogout}>Log Out</button>}

            </div>

            <div className="close" onClick={() => setIsCloseModal(true)}>X</div>
         </div>
      </section>
   )
}