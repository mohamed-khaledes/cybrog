import React,{useState} from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem, {NavItemProfile} from "../../Components/NavItem/NavItem";
import { Link } from "react-router-dom";

// switch active 

const Header = (props) => {
  const [active,setActive] = useState(1)
  function toggleActive(index){
    setActive(index)
  }
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
              <Link onClick={() =>toggleActive(1)} className={active ===1?"nav-link active":"nav-link"} aria-current="page" to="/home">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
            </NavItem>
            <NavItem>
              <Link onClick={() =>toggleActive(2)} className={active ===2?"nav-link active":"nav-link"} to="/browse">
                Browse
              </Link>
              {/* <a className="nav-link" href="/browse">Browse</a> */}
            </NavItem>
            <NavItem>
              <Link onClick={() =>toggleActive(3)} className={active ===3?"nav-link active":"nav-link"} to="/details">Details</Link>
            </NavItem>
            <NavItem>
              <Link onClick={() =>toggleActive(4)} className={active ===4?"nav-link active":"nav-link"}
                to="/streams"
                tabIndex="-1"
                aria-disabled="true"
              >
                Streams
              </Link>
              {/* <a className="nav-link " href="/streams" tabIndex="-1" aria-disabled="true">Streams</a> */}
            </NavItem>
            <NavItemProfile>
              <Link onClick={() =>toggleActive(5)} className={active ===5?"nav-link profile-link active":"nav-link profile-link"}
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
