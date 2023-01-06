import React from "react";
import "./TopDownloadedItem.css";
import {FaStar} from 'react-icons/fa';
import {FaDownload} from 'react-icons/fa';
const TopDownloadedItem = (props) => {
  return (
    <div className="top-downloaded-item">
      <div className=" top-downloaded-item-card-wrapper">
        <img className="top-downloaded-item-image" src={props.image} />
        <div className="top-downloaded-item-content">
          <h4 className="top-downloaded-item-title">
            {props.title} <br />
            <span>{props.subtitle}</span>
          </h4>
          <ul className="parent-icons">
            <li>
                <span style={{color:'yellow'}}><FaStar /></span>
              <span>{props.rate}</span>
            </li>
            <li>
                <span style={{color:'#e75e8d'}}><FaDownload /></span>
              <span>{props.download}</span>
            </li>
          </ul>
          <div className="download">
          <FaDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDownloadedItem;
