import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { setLoggedUser } from '../store/actions/user.action.js'

export const SignIn = () => {

   let { users } = useSelector(({ userModule }) => userModule)

   const dispatch = useDispatch()
   const navigate = useNavigate();

   useEffect(() => {
      if(!users) return navigate(`../`);
  }, [])

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)

   const handleChange = ({ target, users }) => {
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onLogIn = () => {
      console.log('login')
      // const user = await dispatch(signIn({ username, password,}))
      dispatch(setLoggedUser({ username: 'Test', email }))
      navigate(`../chatty-app`);
   }

   return (
      <section className="sign-up">
         <h1>Hello from Signin</h1>
         <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} required/>
         <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} required/>
         <button onClick={onLogIn}>Submit</button>
         {!isExist && <Link to="/sign-up">Sign Up</Link> }
      </section>
   )

}