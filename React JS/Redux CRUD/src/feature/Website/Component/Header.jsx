import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
   <div>
  <div className="p-3 bg-primary text-white text-center">
    <h1> REDUX </h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/"> Home </NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Add_Data"> Add Data </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Manage_Data"> Manage Data </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"> Contact </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Manage_Contact"> Manage Contact </NavLink>
        </li>
      </ul>
    </div>
  </nav>
</div>

  )
}

export default Header