import React from 'react'
import './SectionHeader.css'
const SectionHeader = (props) => {
  return (
    <div className="section-header">
    <h4 className='section-header-item'>{props.children}</h4>
  </div>
  )
}

export default SectionHeader