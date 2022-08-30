import React from 'react'

export const DynamicPopUp = ({ firstMsgVisible }) => {

   return (
      <div className="dynamic-popup">
        { firstMsgVisible && <p>{firstMsgVisible}</p>}
      </div>
   )
}