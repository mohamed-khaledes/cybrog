import React from "react";
import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper,PrimaryButton } from "../../Components/index";
import MostPopularData from "../../Data/MostPopularData";

const MostPopular = (props) => {
  const cards = MostPopularData.map((card) => {
    return <Card
    key={card.id}
    title={card.title}
    subtitle={card.subtitle}
    image={card.image}
    rate={card.rate}
    download={card.download}
    />
  })
  return (
    <SectionWrapper>
      <SectionHeader>Most Popular <span>Right Now</span></SectionHeader>
      <div className="most-popular-items">
        {cards}
      </div>
      <PrimaryButton className='main-button primary most-popular-btn'>
      Discover Popular
      </PrimaryButton>
    </SectionWrapper>
  );
};

export default MostPopular;
