import React, { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import $ from 'jquery';
// import "jquery-ui-dist/jquery-ui";





function Header() {  



  var redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user_id')) 
    {
      return redirect('/');
    }
  }, []);


  const logout = () => {
    localStorage.removeItem('admin_id');
    localStorage.removeItem('admin_name');
    toast.success('Logout Success');
    return redirect('/');

  }



  return (
    <div>
      <nav
        className="navbar navbar-default navbar-cls-top "
        role="navigation"
        style={{ marginBottom: 0 }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to="/Dashboard">
            jp empire
          </NavLink>
        </div>
        <div className="header-right">
          <NavLink to="/Manage_Comments" className="btn btn-info" title="New Messages">
            <b>11 </b>
            <i className="fa fa-envelope-o fa-2x" />
          </NavLink> 
          &nbsp;
          <NavLink to="/Manage_User" className="btn btn-primary" title="Total Users">
            <b>123 </b>
            <i className="fa fa-user fa-2x" />
          </NavLink> 
          &nbsp;
          <NavLink to="/" className="btn btn-danger" title="Logout">
            <i className="fa fa-sign-out fa-2x" />
          </NavLink>
        </div>
      </nav>
      {/* /. NAV TOP  */}
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <div className="user-img-div">
                <img src="https://img.freepik.com/premium-vector/man-working-his-laptop-flat-illustration_615476-26.jpg?w=2000" className="img-thumbnail" />
                <div className="inner-text">
                  Jainish Patel
                  <br />
                  <small>Last Login : 1 Day Ago </small>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/Dashboard">
                <i className="fa fa-dashboard " />
                Dashboard
              </NavLink>
            </li>

            <li>

              {/* <NavLink to="/Dashboard">
                <i className="fa fa-bicycle " />
                Add <i className="fa fa-arrow-down pull-right" />
              </NavLink> */}

              <a href="#" >
                <i className="fa fa-bicycle" />
                Add <i className="fa fa-arrow-down pull-right" />
              </a>

              <ul className="nav nav-second-level">
                <li>
                  <NavLink to="/Add_Categories">
                  <i className="fa fa-code " />
                    Add Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Add_Products">
                  <i className="fa fa-code " />
                    Add Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Add_Country">
                  <i className="fa fa-code " />
                    Add Country
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>

              {/* <NavLink to="/Dashboard">
                <i className="fa fa-bicycle " />
                Manage <i className="fa fa-arrow-down pull-right" />
              </NavLink> */}

              <a href="#">
                <i className="fa fa-bicycle " />
                Manage <i className="fa fa-arrow-down pull-right" />
              </a>

              <ul className="nav nav-second-level">
                <li>
                  <NavLink to="/Manage_Categories">
                  <i className="fa fa-desktop " />
                    Manage Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_Casual_Outfits">
                  <i className="fa fa-desktop " />
                    Manage Casual Outfits
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_Ethnic_Outfits">
                  <i className="fa fa-desktop " />
                    Manage Ethnic Outfits
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_Business_Professional_Outfits">
                  <i className="fa fa-desktop " />
                    Manage Business Professional Outfits
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_User">
                  <i className="fa fa-desktop " />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_Country">
                  <i className="fa fa-desktop " />
                    Manage Country
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_Comments">
                  <i className="fa fa-desktop " />
                    Manage Comments
                  </NavLink>
                </li>

              </ul>
            </li>

            <li>
              <NavLink to="/Profile2">
                <i className="fa fa-user" />
                  Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <i className="fa fa-sign-in " />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>


  );
}

export default Header;
