import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem, {NavItemProfile} from "../../Components/NavItem/NavItem";
import { Link } from "react-router-dom";
const Header = (props) => {
  let links = document.querySelectorAll('.nav-link');
function switch_active(){
  links.forEach((link) =>{
    link.addEventListener("click",(e) =>{
      links.forEach((link) =>{
        link.classList.remove("active")
      })
      e.target.classList.add("active")
    })
  })
}
  <switch_active></switch_active>
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav ">
      <div className="container">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="" />
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Type Something"
            aria-label="Search"
          ></input>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem>
              <Link onClick={switch_active()} className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
            </NavItem>
            <NavItem>
              <Link onClick={switch_active()} className="nav-link" to="/browse">
                Browse
              </Link>
              {/* <a className="nav-link" href="/browse">Browse</a> */}
            </NavItem>
            <NavItem>
              <Link onClick={switch_active()}
                className="nav-link " to="/details">Details</Link>
            </NavItem>
            <NavItem>
              <Link onClick={switch_active()}
                className="nav-link "
                to="/streams"
                tabIndex="-1"
                aria-disabled="true"
              >
                Streams
              </Link>
              {/* <a className="nav-link " href="/streams" tabIndex="-1" aria-disabled="true">Streams</a> */}
            </NavItem>
            <NavItemProfile>
              <Link onClick={switch_active()}
                className="nav-link profile-link"
                to="/profile"
                tabIndex="-1"
                aria-disabled="true"
              >
                profile
              </Link>
              {/* <a className="nav-link" href="/profile" tabIndex="-1" aria-disabled="true">profile</a> */}
            </NavItemProfile>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
