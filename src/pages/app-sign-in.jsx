import React, { useState, useEffect } from 'react'
import { loadUsers, setLoggedUser, login } from '../store/actions/user.action.js'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { LogoBlue } from '../services/svg-service.js'

export const SignIn = () => {
   // const { users } = useSelector(({ userModule }) => userModule)
   const { users } = useSelector((storeState) => storeState.userModule)

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)
   const [checked, setChecked] = useState(false)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      loadData()
      // if (!users) return navigate(`../`);
   }, [])


   const loadData = async () => {
      await dispatch(loadUsers())
   }

   const handleChange = ({ target, users }) => {
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
      dispatch(setLoggedUser({ email: email, password: password }))
   }

   const onLogIn = async () => {
      isUserExist()
      const loggedUser = await dispatch(login({ email, password }))
      if (loggedUser) navigate('/chatty-app')
      else console.log("Wrong password or email")
   }

   const isUserExist = () => {
      setIsExist(users.some(user => user.email === email))
      if (!isExist) navigate('/sign-up')
   }

   return (

      <section className="app-sign-in flex flex-column">

         <div className="sign-in-card flex flex-column">
            <div className="card-title flex flex-column">
               <div className="logo-text flex flex-column">
                  <LogoBlue />
                  <div className="welcome-text">Welcome Back</div>
               </div>
               <span className="text-redirect flex">Don't have an account?
                  <a href="/sign-up" className="create-text">Create today!</a>
               </span>
            </div>

            <div className="signin-input flex flex-column">
               <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />

               <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />
            </div>
            <div className="remember-me flex">
               <div className="remember-me-checked flex">
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