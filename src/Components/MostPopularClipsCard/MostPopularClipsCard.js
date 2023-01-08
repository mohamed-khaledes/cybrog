import React from "react";
import './MostPopularClipsCard.css'
import {FaEye} from 'react-icons/fa';
const MostPopularClipsCard = (props) => {
    
  return (
    <div className="most-popular-clips-item">
      <div className="card-wrapper">
        <img className="most-popular-clips-item-image" src={props.image} alt="most-popular-clips-item-image" />
        <div className="most-popular-clips-item-content">
          <h4 className="most-popular-clips-item-title">{props.title}</h4>
          <ul>
            <li>
            <span style={{color:'#e75e8d'}}><FaEye /></span>
            <span>{props.views}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostPopularClipsCard;
