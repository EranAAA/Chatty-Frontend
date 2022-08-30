import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import { BsThreeDotsVertical } from 'react-icons/bs'

import { loadUsers } from '../store/actions/user.action.js'
import { SignIn_SignUp } from './signin_signup'

export const ChattySideHeader = ({ loggedInUser }) => {

   const dispatch = useDispatch()
   const { users } = useSelector((storeState) => storeState.userModule)

   const [isCloseModalSign, setIsCloseModalSign] = useState(false)

   useEffect(() => {
      loadData()
   }, [])

   const loadData = async () => {
      await dispatch(loadUsers())
   }

   const onSign = () => {
      setIsCloseModalSign(true)
   }

   return (
      <div className="side-header">

         <div className="profile-container">
            {loggedInUser && <img className="image" src={loggedInUser.imgUrl} alt={loggedInUser.username}></img>}
            {loggedInUser && <h1 className="username">{loggedInUser.username}</h1>}
         </div>

         <BsThreeDotsVertical onClick={onSign} />

         <div className="signup_login">
            {isCloseModalSign && <SignIn_SignUp setIsCloseModal={setIsCloseModalSign} users={users} />}
         </div>
      </div>
   )
}


