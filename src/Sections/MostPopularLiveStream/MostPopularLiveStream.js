import React from "react";
import { MostPopularLiveStreamCard, SectionHeader, SectionWrapper,PrimaryButton } from "../../Components/index";
import MostPopularLiveStreamData from '../../Data/MostPopularLiveStreamData'
import './MostPopularLiveStream.css'
const MostPopularLiveStream = (props) => {
  const cards = MostPopularLiveStreamData.map((card) => {
    return <MostPopularLiveStreamCard
    key={card.id}
    subtitle={card.subtitle}
    title={card.title}
    image={card.image}
    avatar={card.avatar}
    />
  })
  return (
    <SectionWrapper>
      <SectionHeader>Most Popular <span>Live Streams</span></SectionHeader>
      <div className="most-popular-live-stream-items">
        {cards}
      </div>
      <PrimaryButton className='main-button primary most-popular-live-stream-btn'>
      Load More Streams
      </PrimaryButton>
    </SectionWrapper>
  );
};

export default MostPopularLiveStream;
