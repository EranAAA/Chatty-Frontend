import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { IoIosLogIn } from 'react-icons/io'

import { LogoBlue } from '../services/svg-service.js'
import { SignIn_SignUp } from '../cmps/signin_signup'

export const AppHome = () => {

   const { users } = useSelector((storeState) => storeState.userModule)

   const [isCloseModalSign, setIsCloseModalSign] = useState(true)

   const onSign = () => {
      setIsCloseModalSign(false)
   }
   return (
      <section className="app-home">
         <div className="logo-text "> <LogoBlue /></div>

         <h1 className="btn" onClick={onSign} >
            Clck here to login
            <IoIosLogIn />
         </h1>

         {!isCloseModalSign && <SignIn_SignUp setIsCloseModal={setIsCloseModalSign} users={users} />}

      </section>
   )
}





