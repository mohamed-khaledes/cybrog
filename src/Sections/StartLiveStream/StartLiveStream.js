import React from 'react'
import { SectionHeader, StartLiveStreamItem,PrimaryButton } from '../../Components/index'
import './StartLiveStream.css'
import StartLiveStreamItemData from '../../Data/StartLiveStreamItemData'
const StartLiveStream = () => {
    const card = StartLiveStreamItemData.map((card) =>{
        return <StartLiveStreamItem 
        key={card.id}
        image={card.image}
        title={card.title}
        description={card.description}
        />
    })
  return (
    <div className='start-live-stream'>
        <SectionHeader>How To Start Your <span>Live Stream</span></SectionHeader>
        <div className='start-live-stream-content'>
        {card}
        </div>
        <PrimaryButton className='primary btn'>Go To Profile</PrimaryButton>
    </div>
  )
}

export default StartLiveStream