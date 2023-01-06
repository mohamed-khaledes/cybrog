import React from "react";
import "./MostPopularLiveStreamCard.css";
import {FaThumbsUp} from 'react-icons/fa';
const MostPopularLiveStreamCard = (props) => {
  return (
    <div className="most-popular-live-stream-item">
      <div className="card-wrapper">
        <img className="most-popular-live-stream-item-image" src={props.image} />
        
        <div className="most-popular-live-stream-item-content">
          <div className="avatar">
            <img src={props.avatar}/>
          </div>
          <div className="text">
            <p className="most-popular-live-stream-item-subtitle"> <FaThumbsUp /> {props.subtitle}</p>
            <h4 className="most-popular-live-stream-item-title">
            {props.title} <br />
          </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularLiveStreamCard;
