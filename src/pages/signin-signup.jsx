import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { loadUsers } from '../store/actions/user.action.js'
import { userService } from "../services/user.service.js"

export const SignInUp = () => {
   const dispatch = useDispatch()
   // let {users} = useSelector((storeState) => storeState.userModule)
   let {users} = useSelector((userModule) => userModule)

   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }
   console.log(users)
   return (
      <div>
         <h1>Hello from SignInUp</h1>
      </div>
   )
}