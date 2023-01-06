import React from 'react'
import './Stream.css'
import {LiveStreams, MostPopularLiveStream, TopStreamers} from '../../Sections/index'
const Streams = () => {
  return (
    <>
        <div className='streams-header'>
        <LiveStreams />
        <TopStreamers />
        </div>
        <MostPopularLiveStream />
    </>
  )
}

export default Streams