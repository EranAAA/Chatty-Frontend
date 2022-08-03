import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'

import { loadUsers } from '../store/actions/user.action.js'
import { SignUp } from '../cmps/sign-up'

export const UserAuth = () => {
   const dispatch = useDispatch()
   const { users } = useSelector(({ userModule }) => userModule)
   
   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }

   const signUp = (newUser) => {
      console.log(newUser);
   }

   return (
      <div>
         <h1>Hello from SignInUp</h1>
         <SignUp signUp={signUp} users={users} />
         <Link to="user-auth/sign-up"></Link>
      </div>
   )
}