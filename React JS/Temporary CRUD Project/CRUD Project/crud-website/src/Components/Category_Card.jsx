import React from "react";

function Category_Card({ cate_img, cate_name }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="shop-cat-box">
        <img className="img-fluid" src={cate_img} alt="Category Image" />
        <a className="btn hvr-hover" href="#"> {cate_name} </a>
      </div>
    </div>
  );
}

export default Category_Card;
