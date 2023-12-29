import React from "react";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Blank_Page() {
  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        <Header />

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar />
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* 404 Error Text */}
              <div className="text-center">
                <div className="error mx-auto" data-text={404}>
                  404
                </div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 mb-0">
                  It looks like you found a glitch in the matrix...
                </p>
                <Link to="/Dashboard"> ← Back to Dashboard</Link>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </div>
  );
}

export default Blank_Page;
