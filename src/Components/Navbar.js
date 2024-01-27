 import React from 'react'
import './navbar.css'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
    <div className={`${props.mode}`}>
    <img src="/logo.png" alt="Website Logo" width="80px"/>
        <ul>
            <li><Link className='nostyle'to='/'>{props.item1}</Link></li>
            <li><Link className='nostyle'to='/about'>{props.item2}</Link></li>
            <li>{props.item3}</li>
        </ul>
        <div className='nav1'><div class="form-check form-switch">
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label white" htmlFor="flexSwitchCheckDefault">{props.modetext}</label>
</div><div className="search"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div><input type="text" className='size' placeholder="Search"/></div>
    </div>
    </>
  )
}

Navbar.propTypes = {item1: PropTypes.string,
                    item2: PropTypes.string,
                    item3: PropTypes.string}

Navbar.defaultProps = {
  item1: "Home",
  item2: "About",
  item3: "Contact Us"
}