import React from 'react'
import './YourInformation.css'
import {SectionWrapper,PrimaryButton} from '../../Components/index'
import {MostPopularClips} from '../../Sections/index'
import profile_info from '../../assets/images/profile.jpg'
const YourInformation = (props) => {
  return (
    <div className='information-parent'>
    <SectionWrapper>
        <div className='your-information'>
        <div className='left-section'>
            <div className='image'>
                <img src={profile_info} alt='profile-img'/>
            </div>
            <div className='text'>
                <p className='first-p'>Offline</p>
                <h4>Alan Smithee</h4>
                <p className='second-p'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <PrimaryButton className='main-button primary your-info-btn'>
                Start Live Stream
                </PrimaryButton>
            </div>
        </div>
        <div className='right-section'>
            <ul>
                <li>
                    <p>Games Downloaded</p>
                    <span>3</span>
                </li>
                <li>
                    <p>Friends Online</p>
                    <span>16</span>
                </li>
                <li>
                    <p>Live Stream2</p>
                    <span>None</span>
                </li>
                <li>
                    <p>Clips</p>
                    <span>29</span>
                </li>
            </ul>
        </div>
        </div>
    <MostPopularClips />
    </SectionWrapper>
    </div>
  )
}

export default YourInformation