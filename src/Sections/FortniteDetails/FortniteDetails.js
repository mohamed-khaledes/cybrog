import React from 'react'
import './FortniteDetails.css'
import feature_left from '../../assets/images/feature-left.jpg'
import feature_right from '../../assets/images/feature-right.jpg'
const FortniteDetails = () => {
  return (
    <div className='fortnite-details'>
        <div className='features'>
        <div className='feature-left'>
            <img src={feature_left} alt="feature-left"/>
        </div>
        <div className='feature-right'>
            <img src={feature_right} alt="feature-right"/>
        </div>
        </div>
        <h2 className='fortnite-details-title'>FORTNITE DETAILS</h2>
    </div>
  )
}

export default FortniteDetails