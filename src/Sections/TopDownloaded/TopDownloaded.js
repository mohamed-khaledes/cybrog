import React from 'react'
import './TopDownloaded.css'
import { SectionHeader, SectionWrapper, TopDownloadedItem } from '../../Components'
import TopDownloadedData from '../../Data/TopDownloadedData'
const TopDownloaded = () => {
  const card = TopDownloadedData.map((card) =>{
return <TopDownloadedItem
key={card.id}
title={card.title}
subtitle={card.subtitle}
image={card.image}
rate={card.rate}
download={card.download}
          />
  })
  return (
    <div className='top-downloaded'>
      <SectionWrapper>
      <SectionHeader>Top <span>Downloaded</span></SectionHeader>
        <div className='top-downloaded-content'>
        <ul className='top-downloaded-list'>
          {card}
        </ul>
        <div className='view-all-games'>
        <a href='/#'>View All Games</a>
        </div>
        </div>
    </SectionWrapper>
    </div>
  )
}

export default TopDownloaded