import React, { useState } from 'react'


export const DynamicPopUp = ({ firstMsgVisible }) => {


   return (
      <section className="dynamic-popup">
        { firstMsgVisible && <p>{firstMsgVisible}</p>}
        { !firstMsgVisible && <p>Date</p>}
      </section>
   )
}