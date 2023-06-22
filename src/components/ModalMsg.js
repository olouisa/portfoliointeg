import React from 'react';
import "../styles/modalMsg.css";
import "../styles/modalWork.css"

function ModalMsg({onChangeValue}) {
  return (
    <div className='modalWork-background'>
    <div className='modalMsg-container'>
        <button onClick={onChangeValue } className='closeMsg'>X</button>
        <p className='send-msg'>Message envoyé!</p>
    </div>
</div>
  )
}

export default ModalMsg
