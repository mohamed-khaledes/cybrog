import React from 'react'
import './Browse.css'
import {MostPopularLiveStream,FeaturedGames, TopDownloaded, StartLiveStream} from '../../Sections/index'
const Browse = () => {
  return (
    <>
    <div className='streams-header'>
        <FeaturedGames />
        <TopDownloaded />
        </div>
        <StartLiveStream />
        <MostPopularLiveStream />
    </>
  )
}

export default Browse