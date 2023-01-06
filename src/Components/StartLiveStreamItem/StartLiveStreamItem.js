import React from 'react'
import './StartLiveStreamItem.css'
const StartLiveStreamItem = (props) => {
  return (
    <>
    <div className='start-live-stream-item'>
        <img src={props.image} className="start-live-stream-item-image"/>
        <h4 className='start-live-stream-item-title'>{props.title}</h4>
        <p className='start-live-stream-item-description'>{props.description}</p>
    </div>
    
    </>
  )
}

export default StartLiveStreamItem