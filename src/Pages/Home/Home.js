import React from 'react'
import './Home.css'
import {Hero,MostPopular,GamingLibrary} from '../../Sections/index'
const Home = () => {
  return (
    <>
        <Hero />
        <MostPopular />
        <GamingLibrary />
    </>
  )
}

export default Home