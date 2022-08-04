import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { setLoggedUser, signup } from '../store/actions/user.action.js'

export const SignUp = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate();

   const { users } = useSelector(({ userModule }) => userModule)

   useEffect(() => {
      if(!users) return navigate(`../`);
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
      <section className="app-sign-up">
         <h1>Hello from Signup</h1>
         <input type="text" name='username' value={username} placeholder='Username' onChange={handleChange} required autoComplete="off"/>
         <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} required autoComplete="off"/>
         <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} required autoComplete="off"/>
         <button onClick={onSignup}>Submit</button>
         {isExist &&
            <div>
               You already a user, move to
               <Link to="/sign-in"> Login</Link>
            </div>}
      </section>
   )

}