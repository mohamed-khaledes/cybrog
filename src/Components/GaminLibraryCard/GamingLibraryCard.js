import React from 'react'
import { SecondaryButton } from '../Buttons/Buttons'
import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li> <img src={props.image} alt='gameImage' /></li>
            <li>Data2 <span>{props.title}</span></li>
            <li>Date Added <span>{props.date}</span></li>
            <li>Hours Played <span>{props.hours}</span></li>
            <li>Currently <span>{props.download}</span></li>
            <li>
              <SecondaryButton>
                Download
              </SecondaryButton>
            </li>
        </ul>
    </div>
  )
}

export default GamingLibraryCard