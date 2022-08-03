import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const SignUp = ({ signUp, users }) => {

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)

   const handleChange = ({ target, users }) => {
      if (target.name === 'username') setUsername(target.value)
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
   }

   const onSignup = () => {
      if (isUserExist()) return setIsExist(true)
      signUp({ fullname: username, username: email, password })
   }

   const isUserExist = () => {
      return users.some(user => user.email === email)
   }

   return (
      <section className="sign-up">
         <h1>Hello from Signup</h1>
         <input type="text" name='username' value={username} placeholder='Username' onChange={handleChange} />
         <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
         <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />
         <button onClick={onSignup}>Submit</button>
         {isExist && <Link to="user-auth/sign-in">LogIn</Link> }
      </section>
   )

}