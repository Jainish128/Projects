import React from "react";

function Service_Block({ service_title, service_desc }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="service-block-inner">
        <h3> {service_title} </h3>
        <p> {service_desc} </p>
      </div>
    </div>
  );
}

export default Service_Block;
