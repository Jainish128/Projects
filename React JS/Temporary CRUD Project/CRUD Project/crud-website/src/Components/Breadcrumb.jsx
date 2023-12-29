import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ pageName }) {
  return (
    <div>
      {/* Start All Title Box */}
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2> {pageName} </h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/"> Home </Link>
                </li>
                <li className="breadcrumb-item active"> <b> {pageName} </b> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End All Title Box */}
    </div>
  );
}

export default Breadcrumb;
