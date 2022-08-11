import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { LogoBlue } from '../services/svg-service.js'
import { setLoggedUser, signup } from '../store/actions/user.action.js'

export const SignUp = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate();

   const { users } = useSelector(({ userModule }) => userModule)

   useEffect(() => {
      if (!users) return navigate(`../`);
   }, [])

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)

   const handleChange = ({ target, users }) => {
      if (target.name === 'username') setUsername(target.value)
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onSignup = async () => {
      if (isUserExist()) return setIsExist(true)
      const newUser = await dispatch(signup({ username, email, password }))
      // dispatch(setLoggedUser({ username, email  }))
      // navigate(`../chatty-app/${/*newUser._id*/ 123548654}`, { replace: true });
      navigate(`../chatty-app`);
      setIsExist(false)


   }

   const isUserExist = () => {
      return users.some(user => user.email === email)
   }

   return (
      <section className="app-sign-up flex flex-column">
         <div className="sign-up-card flex flex-column">
            <div className="card-title flex flex-column">
               <div className="logo-text flex flex-column">
                  <LogoBlue />
                  <div className="welcome-text">Welcome!</div>
               </div>
               <span className="text-redirect flex">Already have an account?
                  <a href="/sign-in" className="create-text">Sign in</a>
               </span>
            </div>

            <div className="signup-input flex flex-column">
               <input type="text" name='username' value={username} placeholder='Username' onChange={handleChange} required autoComplete="off" />
               <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} required autoComplete="off" />
               <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} required autoComplete="off" />
            </div>
            <div className="btn-signup">
               <button onClick={onSignup}>Signup</button>
            </div>

            {isExist &&
               <div className="text-redirect">
                  You already have an account
                  <Link to="/sign-in">Sign in</Link>
               </div>}
         </div>
      </section>
   )

}