import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'


export const SignIn = () => {
   let { users } = useSelector(({ userModule }) => userModule)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)

   const handleChange = ({ target, users }) => {
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onLogIn = () => {
      console.log('login')
   }

   // const isUserExist = () => {
   //    return users.some(user => user.email === email)
   // }

   return (
      <section className="sign-up">
         <h1>Hello from Signup</h1>
         <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
         <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />
         <button onClick={onLogIn}>Submit</button>
         {!isExist && <Link to="/sign-up">Sign In</Link> }
      </section>
   )

}