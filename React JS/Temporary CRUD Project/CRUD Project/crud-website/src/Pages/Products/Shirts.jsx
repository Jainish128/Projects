import React, { useEffect, useState } from "react";
import Products_Filterbar from "../../Components/Products_Filterbar";
import Products_Sidebar from "../../Components/Products_Sidebar";
import Product_Card from "../../Components/Product_Card";
import axios from "axios";

function Shirts() {


    var border = { borderTop: "3px solid orangered", borderRadius: "7px", boxShadow: '0 0 4px 1px silver' };
    var border2 = { borderBottom: "3px solid orangered", borderRadius: "0 0 10px 10px" };

    // =============== Fetch Shirts Data from Server and Show in Shirts Product Page -> START ===============

    useEffect(() => {
        fetch_Shirts();
    });

    const [shirts, setShirts] = useState([]);

    const fetch_Shirts = async() => {
        const resp = await axios.get(`http://localhost:3000/shirts`);
        setShirts(resp.data);
    };

    // =============== Fetch Shirts Data from Server and Show in Shirts Product Page -> END ===============


  return (
    <div>
      {/* Start Shop Page  */}
      <div className="shop-box-inner pt-0">
        <div className="container">

        <div className="title-all text-center py-4 m-0">
            <h1> SHIRT </h1>
        </div>

          <div className="row">

            <Products_Sidebar/>

            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">

                <Products_Filterbar/>

                <div className="row product-categorie-box">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="grid-view"
                    >
                      <div className="row">

                        {
                            shirts.map((value, index) => {
                                return (
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                    <div className="products-single fix" style={border}>
                                      <div className="box-img-hover">
                                        <div className="type-lb">
                                          <p className="sale">Sale</p>
                                        </div>
                                        <img src={value.product_img} className="img-fluid" alt="Image" />
                                        <div className="mask-icon">
                                          <ul>
                                            <li>
                                              <a href="#" data-toggle="tooltip" data-placement="right" title="View" >
                                                <i className="fas fa-eye" />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                                <i className="fas fa-sync-alt" />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" >
                                                <i className="far fa-heart" />
                                              </a>
                                            </li>
                                          </ul>
                                          <a className="cart" href="#"> Add to Cart </a>
                                        </div>
                                      </div>
                                      <div className="why-text" style={border2}>
                                        <h4> {value.product_title} </h4>
                                        <h5> 
                                            <del className="text-secondary">₹{value.product_mrp}</del> 
                                            &nbsp; ₹{value.product_sell_price}
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                )
                            })
                        }

                        {/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                          <div className="products-single fix" style={border}>
                            <div className="box-img-hover">
                              <div className="type-lb">
                                <p className="sale">Sale</p>
                              </div>
                              <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                              <div className="mask-icon">
                                <ul>
                                  <li>
                                    <a href="#" data-toggle="tooltip" data-placement="right" title="View" >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                                      <i className="fas fa-sync-alt" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                </ul>
                                <a className="cart" href="#"> Add to Cart </a>
                              </div>
                            </div>
                            <div className="why-text" style={border2}>
                              <h4>Lorem ipsum dolor sit amet</h4>
                              <h5> $9.79</h5>
                            </div>
                          </div>
                        </div> */}


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Shop Page */}
    </div>
  );
}

export default Shirts;
