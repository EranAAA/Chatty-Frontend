import React, { useState, useEffect } from 'react'
import { loadUsers } from '../store/actions/user.action.js'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate, Link } from 'react-router-dom'

export const SignIn = () => {
   // const { users } = useSelector(({ userModule }) => userModule)
   const { users } = useSelector((storeState) => storeState.userModule)

   const [data, setData] = useState({
      email: '',
      password: ''
   })
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isExist, setIsExist] = useState(false)
   const [isLogin, setIsLogin] = useState(false)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }

   const handleChange = ({ target, users }) => {
      if (target.name === 'email') setEmail(target.value)
      if (target.name === 'password') setPassword(target.value)
      // setData({ ...data, email: email, password: password })
      setData({ email: email, password: password })
   }

   const onLogIn = (users) => {
      const isLogin = users.find(user => (user.email === data.email && user.password === data.password))
      setIsLogin(true)
      if (isLogin) {
         navigate('/chat')
      } else {
         console.log("Wrong password or email");
      }
   }

   // const isUserExist = () => {
   //    return users.some(user => user.email === email)
   // }

   return (
      <section className="sign-up container">
         <h1>Hello from Signin</h1>
         <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
         <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} />
         <button onClick={() => onLogIn(users)}>Login</button>
         {!isExist && <Link to="/sign-up">Sign Up</Link>}
      </section>
   )

}