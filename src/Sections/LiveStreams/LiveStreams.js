import React from 'react'
import { LiveStreamsCard, SectionHeader, SectionWrapper  } from '../../Components'
import './LiveStreams.css'
import LiveStreamsData from '../../Data/LiveStreamsData'

const LiveStreams = () => {
    const card = LiveStreamsData.map((card) =>{
        return <LiveStreamsCard
    key={card.id}
    title={card.title}
    subtitle={card.subtitle}
    image={card.image}
    rate={card.rate}
    download={card.download}
    />
    })
  return (
    <div className='live-streams'>
    <SectionWrapper>
            <SectionHeader>Live <span>Streams</span></SectionHeader>
            <div className='live-streams-items'>
            {card}
            </div>
    </SectionWrapper>
    </div>
  )
}

export default LiveStreams