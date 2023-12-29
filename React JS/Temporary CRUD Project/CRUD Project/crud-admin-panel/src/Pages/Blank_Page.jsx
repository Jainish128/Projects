import React from "react";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";

function Blank_Page() {
  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">

        <Header/>

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar/>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-4 text-gray-800"> Blank Page </h1>
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
