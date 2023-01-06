import React from "react";
import "./FortniteDownload.css";
import { FaStar, FaDownload } from "react-icons/fa";
import details_01 from "../../assets/images/details-01.jpg";
import details_02 from "../../assets/images/details-02.jpg";
import details_03 from "../../assets/images/details-03.jpg";
import { SecondaryButton, SectionWrapper } from "../../Components/index";
const FortniteDownload = () => {
  return (
    <div className="fortnite-download">
      <SectionWrapper>
        <div className="fortnite-download-head">
          <div className="head-left">
            <h5 className="head-left-title">
              Fortnite <br />
              <span>Sandbox</span>
            </h5>
            <ul>
              <li>
                <span style={{ color: "yellow" }}>
                  <FaStar />
                </span>
                <span>4.8</span>
              </li>
              <li>
                <span style={{ color: "#e75e8d" }}>
                  <FaDownload />
                </span>
                <span>2.4M</span>
              </li>
            </ul>
          </div>
          <div className="head-right">
            <ul>
              <li>
                <FaStar color="yellow" /> <br /> 4.8
              </li>
              <li>
                <FaDownload color="#e75e8d" /> <br /> 2.3M
              </li>
              <li>
                <FaDownload color="#e75e8d" /> <br /> 36GB
              </li>
              <li>
                <FaDownload color="#e75e8d" /> <br /> Action
              </li>
            </ul>
          </div>
        </div>
        <div className="fontnite-download-images">
          <img src={details_01} />
          <img src={details_02} />
          <img src={details_03} />
        </div>
        <p className="fortnite-download-p">
          Cyborg Gaming is free HTML CSS website template provided by
          TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
          <a href="/#"><span>small contribution via PayPal</span></a> to info [at] templatemo.com
          and thank you for supporting. If you want to get the PSD source files,
          please contact us. Lorem ipsum dolor sit consectetur es dispic
          dipiscingei elit, sed doers eiusmod lisum hored tempor.
        </p>
        <SecondaryButton className='secondary btn '>Download Fortnite Now!</SecondaryButton>
      </SectionWrapper>
    </div>
  );
};

export default FortniteDownload;
