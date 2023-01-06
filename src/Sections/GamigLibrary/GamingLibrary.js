import React from 'react'
import './GamingLibrary.css'
import { SectionHeader, SectionWrapper,GamingLibraryCard,PrimaryButton } from "../../Components/index";
import GamingLibraryData from "../../Data/GaimingLibraryData";

const GamingLibrary = () => {
    const GamingLibraryCards = GamingLibraryData.map((card) => {
        return <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        date={card.date}
        hours={card.hours}
        download={card.download}
        />
      })
  return (
    <>
      <SectionWrapper>
      <SectionHeader>Your Gaming <span>Library</span></SectionHeader>
      <div className="gaming-library-items">
        {GamingLibraryCards}
      </div>
      <PrimaryButton className='main-button primary gaming-library-btn'>
      View Your Library
      </PrimaryButton>
    </SectionWrapper>
    </>
  )
}

export default GamingLibrary