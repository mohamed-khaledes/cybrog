import React from 'react'
import './TopStreamersListItem.css'
import PrimaryButton from '../Buttons/Buttons'
import { FaThumbsUp } from 'react-icons/fa'
const TopStreamersListItem = (props) => {
  return (
    <>
    <li>
            <ul className='top-streamer-list-item'>
              <li>{props.number} <img src={props.avatar} alt='top-streamers'/></li>
              <li className='name'> <FaThumbsUp /> {props.name}</li>
              <li> <PrimaryButton className='main-button primary live-streams-btn'>Follow</PrimaryButton> </li>
            </ul>
          </li>
    </>
  )
}

export default TopStreamersListItem