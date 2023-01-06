import React from 'react'
import './TopStreamers.css'
import { SectionHeader, SectionWrapper, TopStreamersListItem } from '../../Components'
import TopStreamersListItemData from '../../Data/TopStreamersListItemData'
const TopStreamers = () => {
  const listItem = TopStreamersListItemData.map((item) =>{
return <TopStreamersListItem 
          key={item.id}
          number={item.number}
          avatar={item.avatar}
          name={item.name}
          />
  })
  return (
    <div className='top-streamers'>
      <SectionWrapper>
      <SectionHeader>Top <span>Streamers</span></SectionHeader>
        <div className='top-streamers-content'>
        <ul className='top-streamers-list'>
          {listItem}
        </ul>
        </div>
    </SectionWrapper>
    </div>
  )
}

export default TopStreamers