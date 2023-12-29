
import React, { useState } from "react";
import { NavLink, Link, UNSAFE_LocationContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import './CSS 2/Header.css'
// import $ from "jquery";
// import { findDOMNode } from "react-dom";

function Header() {

  const [isHidden, setIsHidden] = useState(false);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  var redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem('Username');
    localStorage.removeItem('ID');

    toast.success('Logout Successfully.', { position: toast.POSITION.TOP_LEFT });
    return redirect('/');
  };
 





  return (
    <div>
      {/* Start Main Top */}
      <div className="main-top">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div cla  ssName="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <ul className="offer-box">
                {(() => {
                  if (localStorage.getItem('Username')) 
                  {
                    return (
                      <li>
                        <i className="fab fa-opencart" /> 
                        <span style={{ textTransform: 'uppercase' }}> {localStorage.getItem('Username')} </span> &nbsp;&nbsp;&nbsp;
                        <i className="fab fa-opencart" /> 
                      </li>
                    )  
                  }
                  else
                  {
                    return (
                      <li>
                      <i className="fab fa-opencart" /> 
                    </li>
                    )
                  }
                })()} 
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="custom-select-box">
                <select
                  id="basic"
                  className="selectpicker show-tick form-control"
                  data-placeholder="$ USD"
                >
                  <option>₹ INR</option>
                  <option>¥ JPY</option>
                  <option>$ USD</option>
                  <option>€ EUR</option>
                </select>
              </div>
              <div className="right-phone-box">
                <p>
                  Call US :- <a href="#"> +11 900 800 100</a>
                </p>
              </div>
              <div className="our-link">
                <ul>

                  {(() => {
                    if (localStorage.getItem('Username')) 
                    {
                      return (
                        <>
                          <li>
                            <a href="javascript:void(0)" onClick={logout}> 
                              Logout &nbsp;
                              <i className="fa-solid fa-arrow-right-from-bracket"></i> 
                            </a>
                          </li>
                        </>
                      )  
                    }
                    else
                    {
                     return (
                      <li>
                        <Link to="/Login"> Login </Link>
                      </li>
                     )
                    }
                  })()}

                  <li>
                    <Link to="/Contact_Us"> Our location </Link>
                  </li>
                  <li>
                    <Link to="/Contact_Us"> Contact Us </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Top */}

      {/* Start Main Top */}
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src="images/logo.png" className="logo" />
              </Link>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About_Us">
                    About Us
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink
                    to="#"
                    className="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    Products
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Products_Page"> Shirt </Link>
                    </li>
                    <li>
                      <Link to="/"> T-Shirt </Link>
                    </li>
                    <li>
                      <Link to="/"> Pent </Link>
                    </li>
                    <li>
                      <Link to="/"> Ethnic </Link>
                    </li>
                    <li>
                      <Link to="/"> Suit </Link>
                    </li>
                    <li>
                      <Link to="/"> Shoes </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <NavLink
                    to="#"
                    className="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    Account
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Cart"> Cart </Link>
                    </li>
                    <li>
                      <Link to="/Checkout"> Checkout </Link>
                    </li>
                    <li>
                      <Link to="/My_Account"> My Account </Link>
                    </li>
                    <li>
                      <Link to="/Wishlist"> Wishlist </Link>
                    </li>
                    <li>
                      <Link to="/Shop_Details"> Shop Details </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Our_Service">
                    Our Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact_Us">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="javascript:void(0)" onClick={handleToggle} id="search-btn">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="side-menu">
                  <a href="#">
                    <i className="fa fa-shopping-bag" />
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Main Top */}

      {/* Start Top Search */}
      
      {
        isHidden && (
          <div className='top-search' id="main_searchbar" style={{ display: "block" }} > 
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input type="text" className="form-control" placeholder="Search" />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
        )
      }

      {/* <div className='top-search' id="main_searchbar" style={{ display: "block" }} > 
        <div className="container">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon close-search">
              <i className="fa fa-times" />
            </span>
          </div>
        </div>
      </div> */}
      {/* End Top Search */}
    </div>
  );
}

export default Header;
