import React, { useState } from 'react'


export const DynamicPopUp = ({ firstMsgVisible }) => {


   return (
      <section className="dynamic-popup">
         <p>{firstMsgVisible}</p>
      </section>
   )
}