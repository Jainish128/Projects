import React from "react";

function Product_Card() {
  
  var border = { borderTop: "3px solid orangered", borderRadius: "7px", boxShadow: '0 0 4px 1px silver' };
  var border2 = { borderBottom: "3px solid orangered", borderRadius: "0 0 10px 10px" };

  return (
    <div className="col-lg-4 col-md-4 special-grid best-seller">
      <div className="products-single fix" style={border}>
        <div className="box-img-hover">
          <div className="type-lb">
            <p className="sale"> Sale </p>
          </div>
          <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
          <div className="mask-icon">
            <ul>
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="View"
                >
                  <i className="fas fa-eye" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Add to Wishlist"
                >
                  <i className="far fa-heart" />
                </a>
              </li>
            </ul>
            <a className="cart hvr-hover" href="#">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="why-text" style={border2}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <h5>
            <del style={{ color: "gray" }}> $10.00</del> &nbsp; $7.79
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Product_Card;
