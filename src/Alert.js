import React from 'react'
import './Components/alert.css'

function Alert(props) {
  return (
    <div className='space'>
    {props.showAlert && <div className='alert' style={{backgroundColor: props.mode==='dark'?'#D4E7DE': '#D4E7DE', color: props.mode==='dark'?'#014d29': '#014d29'}}><div className='margin'><b>{props.message.type}</b> {props.message.message}</div></div>}
    </div>
  )
    
  
}

export default Alert