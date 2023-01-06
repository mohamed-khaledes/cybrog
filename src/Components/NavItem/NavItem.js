import './NavItem.css'
import React from 'react'
import profile_0 from '../../assets/images/profile-header.jpg'
const NavItem = (props) => {
  return (
    <div >
        <li className='nav-item'>
        {props.children}
        </li>
    </div>
  )
}

const NavItemDropDown = (props) => {
  return (
    <div>
        <li className='nav-item dropdown'>
        {props.children}
        </li>
    </div>
  )
}

const NavItemProfile = (props) => {
  return (
    <div>
        <li className='nav-item profile'>
        {props.children}
        <img src={profile_0}/>
        </li>
    </div>
  )
}
export default NavItem;
export {NavItemDropDown}
export {NavItemProfile}