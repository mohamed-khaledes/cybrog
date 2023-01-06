import React from 'react'
import './Buttons.css'
const PrimaryButton = (props) => {
  return (
    <div className={props.className}>
        <a href='/#'>{props.children}</a>
    </div>
  )
}


const SecondaryButton = (props) => {
  return (
    <div className='main-button secondary'>
        <a href='/#'>{props.children}</a>
    </div>
  )
}

export default PrimaryButton;
export {SecondaryButton};