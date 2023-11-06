import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header2() {

  // For Header Burger Menu
     const openNav = () => { document.getElementById("mySidenav").style.width = "250px" }
   const closeNav = () => { document.getElementById("mySidenav").style.width = "0" }

  return (
    <div>
      {/* banner bg main start */}
      <div className="banner_bg_main">
        {/* header top section start */}
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Casual_Outfits"> Casual Outfits </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Ethnic_Outfits"> Ethnic Outfits </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Business_Professional_Outfits"> Business Professional Outfits </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to='/Profile'> Profile </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Contact_Us"> Contact Us </NavLink> &nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header top section start */}
        
        
        
      </div>
      {/* banner bg main end */}
    </div>
  );
}

export default Header2;
