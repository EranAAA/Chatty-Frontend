import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { SignIn_SignUp } from './signin_signup'

export const ChattySideHeader = ({ loggedInUser }) => {

   const { users } = useSelector((storeState) => storeState.userModule)
   const [isCloseModalSign, setIsCloseModalSign] = useState(true)

   const onSign = () => {
      setIsCloseModalSign(false)
   }

   return (
      <div className="side-header">

         <div className="profile-container">
            {loggedInUser && <img className="image" src={loggedInUser.imgUrl} alt={loggedInUser.username}></img>}
            {loggedInUser && <h1 className="username">{loggedInUser.username}</h1>}
         </div>

         <BsThreeDotsVertical onClick={onSign} />

         {!isCloseModalSign && <SignIn_SignUp setIsCloseModal={setIsCloseModalSign} users={users} />}
      </div>
   )
}


