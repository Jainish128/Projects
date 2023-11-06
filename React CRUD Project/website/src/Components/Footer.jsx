import React from "react";

import { NavLink, Link } from "react-router-dom";

function Footer() {
  var logo = { fontSize: "40px", fontWeight: "bold" };

  return (
    <div>
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            {/* <img src="images/footer-logo.png" /> */}
            <Link to="/" className="text-light" style={logo}>
              JP Men's Fashion
            </Link>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink> &nbsp;&nbsp;
              </li>
              <li>
                <NavLink to="/Casual_Outfits"> Casual Outfit </NavLink>
                &nbsp;&nbsp;
              </li>
              <li>
                <NavLink to="/Ethnic_Outfits"> Ethnic Outfit </NavLink>
                &nbsp;&nbsp;
              </li>
              <li>
                <NavLink to="/Business_Professional_Outfits">
                  Business Professional Outfit
                </NavLink>
                &nbsp;&nbsp;
              </li>
              <li>
                <NavLink to="/Profile"> Profile </NavLink> &nbsp;&nbsp;
              </li>
              <li>
                <NavLink to="/Contact_Us"> Contact Us </NavLink> &nbsp;&nbsp;
              </li>
            </ul>
          </div>
          <div className="location_main">
            Email : <Link to="/Contact_Us"> jp.manfashion@gmail.com </Link>
            <br />
            Help Line Number : <Link to="/Contact_Us"> 9876543210 </Link>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            © 2023 All Rights Reserved & Design by JAINISH PATEL.
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </div>
  );
}

export default Footer;
