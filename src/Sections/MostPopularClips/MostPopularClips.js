import React from "react";
import { MostPopularClipsCard, SectionHeader, SectionWrapper,PrimaryButton } from "../../Components/index";
import MostPopularClipsData from "../../Data/MostPopularClipsData";
import './MostPopularClips.css'
const MostPopularClips = (props) => {
  const cards = MostPopularClipsData.map((card) => {
    return <MostPopularClipsCard
    key={card.id}
    title={card.title}
    image={card.image}
    views={card.views}
    />
  })
  return (
    <SectionWrapper>
      <SectionHeader>Your Most Popular <span>Clips</span></SectionHeader>
      <div className="most-popular-clips-items">
        {cards}
      </div>
      <PrimaryButton className='main-button primary most-popular-clips-btn'>
      Load More Clips
      </PrimaryButton>
    </SectionWrapper>
  );
};

export default MostPopularClips;
