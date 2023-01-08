import React from "react";
import "./LiveStreamsCard.css";
import {FaStar} from 'react-icons/fa';
import {FaDownload} from 'react-icons/fa';
const LiveStreamsCard = (props) => {
  return (
    <div className="live-streams-item">
      <div className="card-wrapper">
        <img className="live-streams-item-image" src={props.image} alt="live-streams-item-image" />
        <div className="live-streams-item-content">
          <h4 className="live-streams-item-title">
            {props.title} <br />
            <span>{props.subtitle}</span>
          </h4>
          <ul>
            <li>
                <span style={{color:'yellow'}}><FaStar /></span>
              <span>{props.rate}</span>
            </li>
            <li>
                <span style={{color:'#e75e8d'}}><FaDownload /></span>
              <span>{props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamsCard;
