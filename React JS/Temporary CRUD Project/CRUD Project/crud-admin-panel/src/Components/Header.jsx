import React from "react";
import Topbar from "./Topbar";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
    {/* <div id="wrapper"> */}
      {/* Sidebar */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/Dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3"> JP Empire </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard </span>
          </NavLink>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading"> Admin Panel </div>
        
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-plus" />
            <span> ADD </span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> Add to Website </h6>
              <NavLink className="collapse-item" to="/Add_Category">
                Add Category
              </NavLink>
              <NavLink className="collapse-item" to="/Add_Products">
                Add Products
              </NavLink>
              <NavLink className="collapse-item" to="/Add_Blogs">
                Add Blogs
              </NavLink>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-table" />
            <span> MANAGE </span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <NavLink className="collapse-item" to="/Manage_Categories">
                Manage Category
              </NavLink>
              {/* <NavLink className="collapse-item" to="/Manage_Products">
                Manage Products
              </NavLink> */}
              <NavLink className="collapse-item" to="/Manage_Blogs">
                Manage Blogs
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Users">
                Manage Users
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Messages">
                Manage Messages
              </NavLink>
            </div>
          </div>
        </li>
        {/* Divider */}

        {/* Manage Products -> START */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseProducts"
            aria-expanded="true"
            aria-controls="collapseProducts"
          >
            <i className="fas fa-fw fa-boxes" />
            <span> MANAGE PRODUCTS </span>
          </a>
          <div
            id="collapseProducts"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header"> All Products : </h6>
              <NavLink className="collapse-item" to="/Manage_Shirts">
                Manage Shirts
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_T_Shirts">
                Manage T-Shirts
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Pants">
                Manage Pants
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Ethnic">
                Manage Ethnic
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Suits">
                Manage Suits
              </NavLink>
              <NavLink className="collapse-item" to="/Manage_Shoes">
                Manage Shoes
              </NavLink>
            </div>
          </div>
        </li>
        {/* Manage Products -> END */}

        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading"> Addons </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <NavLink className="collapse-item" to="/">
                Login
              </NavLink>
              <NavLink className="collapse-item" to="/Signup">
                Register
              </NavLink>
              <NavLink className="collapse-item" to="/Forgot_Password">
                Forgot Password
              </NavLink>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="/Error_404">
                404 Page
              </Link>
              <NavLink className="collapse-item" to="/Blank_Page">
                Blank Page
              </NavLink>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item pb-2">
          <NavLink className="nav-link" to="/Profile">
            <i className="fas fa-fw fa-user" />
            Profile
          </NavLink>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>

        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong> JP Empire is Brand. </strong>
            <br />
            This is Admin Panel of JP Empire E-Commerce Website.
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Go on a <br /> E-Commerce Store
          </a>
        </div>
      </ul>
      {/* End of Sidebar */}

    

      {/* Logout Modal*/}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <Link className="btn btn-primary" to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Logout Modal*/}
    {/* </div> */}
    </>
  );
}

export default Header;
