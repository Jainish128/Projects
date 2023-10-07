import React from "react";
import './Header.css'

import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

  // Styling for some Class
  var logo = { fontSize: "40px", fontWeight: "bold" }
  var searchboxHeight = { height: "40px" };
  var zIndex = { zIndex: 2 };
  var bannerImg = {  backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://img.mensxp.com/media/content/2020/Oct/header_banner_5f897f6cdf5dc.jpeg")`  };



  // Open and Close Sidebar onClick
   const openNav = () => { document.getElementById("mySidenav").style.width = "250px" }
   const closeNav = () => { document.getElementById("mySidenav").style.width = "0" }

    const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("username");

    toast.success("Logout Successfully");
    return redirect("/");
  };

  return (
    <div>
      {/* banner bg main start */}
      <div className="banner_bg_main" style={bannerImg}>
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
                      <NavLink to="/Casual_Outfits"> Casual Outfit </NavLink> &nbsp;&nbsp; 
                    </li>
                    <li>
                      <NavLink to="/Ethnic_Outfits"> Ethnic Outfit </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Business_Professional_Outfits"> Business Professional Outfit </NavLink> &nbsp;&nbsp;
                    </li>
                    <li>
                      <NavLink to="/Profile"> Profile </NavLink> &nbsp;&nbsp;
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
        {/* logo section start */}
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <Link to="/" className="text-light logo-name" style={logo}>
                    JP Men's Fashion
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo section end */}
        {/* header section start */}
        <div className="header_section">
          <div className="container">
            <div className="containt_main">
              <div id="mySidenav" className="sidenav" style={zIndex}>
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={closeNav}
                >
                  &times;
                </a>
                <Link to="/"> Home </Link>
                <Link to="/Casual_Outfits"> Casual Outfit </Link>
                <Link to="/Ethnic_Outfits"> Ethnic Outfit </Link>
                <Link to="/Business_Professional_Outfits"> Business Professional Outfit </Link>
                <Link to="/Profile"> Profile </Link>
                <Link to="/Contact_Us"> Contact US </Link>
              </div>
              <span className="toggle_icon" onClick={openNav}>
                <img src="images/toggle-icon.png" />
              </span>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Category
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/Casual_Outfits">
                    Casual Outfit
                  </Link>
                  <Link className="dropdown-item" to="/Ethnic_Outfits">
                    Ethnic Outfit
                  </Link>
                  <Link className="dropdown-item" to="/Business_Professional_Outfits">
                    Business Professional Outfit
                  </Link>
                </div>
              </div>

              <div className="main">
                {/* Another variation with a button */}
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Search products you want to buy"
                    style={searchboxHeight}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#f26522",
                        borderColor: "#f26522",
                      }}
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="header_box">
                <div className="login_menu">
                  <ul>
                    {/* <li>
                      <Link to="/">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        <span className="padding_10">Cart</span>
                      </Link>
                    </li> */}

                    {(() => {
                      if (localStorage.getItem("userid")) {
                        return (
                          <>
                            <li>
                              <Link to="/profile">
                                <i className="fa fa-user" aria-hidden="true" />
                                <span className="padding_10">
                                  {localStorage.getItem("username")}
                                </span>
                              </Link>
                            </li> 
                            <li>
                              <a href="javascript:void(0)" onClick={logout}>
                                &nbsp;&nbsp;&nbsp;
                                <i className="fa fa-right-from-bracket" aria-hidden="true" /> 
                                <span className="padding_10">Logout</span>
                              </a>
                            </li>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <li>
                              <Link to="/Login">
                                <i className="fa fa-user" aria-hidden="true" />
                                <span className="padding_10">Login</span>
                              </Link>
                            </li>
                          </>
                        );
                      }
                    })()}

                    {/* <li>
                      <Link to='/Login'>
                        <i className="fa fa-user" aria-hidden="true" />
                        <span className="padding_10">Login</span>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header section end */}

        {/* banner section start */}
        <div className="banner_section layout_padding" >
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start Your  <br />
                        Casual Outfits Shopping
                      </h1>
                      <div className="buynow_bt">
                        <Link to="/Casual_Outfits">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start Your  <br />
                        Ethnic Outfits Shopping
                      </h1>
                      <div className="buynow_bt">
                        <Link to="/Ethnic_Outfits">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Start Your Business <br />
                        Professional Outfits Shopping
                      </h1>
                      <div className="buynow_bt">
                        <Link to="/Business_Professional_Outfits">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <a
                className="carousel-control-prev"
                href="#my_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#my_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* banner section end */}
      </div>
      {/* banner bg main end */}
    </div>
  );
}

export default Header;
