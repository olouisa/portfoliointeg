import React from 'react'

function ModalMsg({onChangeValue}) {
  return (
    <div className='modalWork-background'>
    <div className='modalWork-container'>
        <button onClick={onChangeValue } className='close'>X</button>
        <p className='send-msg'>Message envoyé!</p>
    </div>
</div>
  )
}

export default ModalMsg
