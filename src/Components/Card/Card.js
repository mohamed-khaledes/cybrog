import React from "react";
import "./Card.css";
import {FaStar} from 'react-icons/fa';
import {FaDownload} from 'react-icons/fa';
const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img className="most-popular-item-image" src={props.image} alt="most-popular-item-image" />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
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

export default Card;
