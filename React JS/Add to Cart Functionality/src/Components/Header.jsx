import React from 'react';
import '../CSS/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="container d-flex justify-content-between pt-2 pb-1">
        <div className="logo h2">
          JP EMPIRE
        </div>
        <nav>
          <ul className='pt-2 d-flex text-uppercase'>
            <li>
              <NavLink to="/" className='text-light pe-5'> Home </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" className='text-light pe-5'> 
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge rounded-pill bg-primary"> 0 </span>
              </NavLink>
            </li>
            <li>
              <a href="#" className='text-light pe-5'> 
                <i className="fa-solid fa-heart"></i> 
                <span className="badge rounded-pill bg-info">0</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header