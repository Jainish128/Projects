import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function My_Account() {

  // =============== User Data Fetch & Show in Profile Page -> START ===============

  useEffect(() => {
    
  });
  
  const [userData, setUserData] = useState({});

  const userFetch = async(j) => {
    const resp = await axios.get(`http://localhost:3000/user`)
  };

  // =============== User Data Fetch & Show in Profile Page -> END ===============

  return (
    <div>
      {/* Start My Account  */}
      <div className="my-account-box-main">
        <div className="container">
          <div className="my-account-page">
            <div className="row">

            <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <Link to='/Profile'>
                        <i className="fa fa-user" />
                      </Link>
                    </div>
                    <div className="service-desc">
                      <h4> Profile </h4>
                      <p> Show your Details </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <a href="#">
                        <i className="fa fa-gift" />
                      </a>
                    </div>
                    <div className="service-desc">
                      <h4>Your Orders</h4>
                      <p>Track, return, or buy things again</p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-4 col-md-12">
                <div className="account-box">
                  <div className="service-box">
                    <div className="service-icon">
                      <a href="#">
                        <i className="fa fa-location-arrow" />
                      </a>
                    </div>
                    <div className="service-desc">
                      <h4>Your Addresses</h4>
                      <p>Edit addresses for orders and gifts</p>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
            {/* <div className="bottom-box">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Gold &amp; Diamond Jewellery</h4>
                        <ul>
                          <li>
                            <a href="#">Apps and more</a>
                          </li>
                          <li>
                            <a href="#">Content and devices</a>
                          </li>
                          <li>
                            <a href="#">Music settings</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Handloom &amp; Handicraft Store</h4>
                        <ul>
                          <li>
                            <a href="#">Advertising preferences </a>
                          </li>
                          <li>
                            <a href="#">Communication preferences</a>
                          </li>
                          <li>
                            <a href="#">SMS alert preferences</a>
                          </li>
                          <li>
                            <a href="#">Message center</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>The Designer Boutique</h4>
                        <ul>
                          <li>
                            <a href="#">Amazon Pay</a>
                          </li>
                          <li>
                            <a href="#">Bank accounts for refunds</a>
                          </li>
                          <li>
                            <a href="#">Coupons</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Gift Boxes, Gift Tags, Greeting Cards</h4>
                        <ul>
                          <li>
                            <a href="#">Leave delivery feedback</a>
                          </li>
                          <li>
                            <a href="#">Lists</a>
                          </li>
                          <li>
                            <a href="#">Photo ID proofs</a>
                          </li>
                          <li>
                            <a href="#">Profile</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Other accounts</h4>
                        <ul>
                          <li>
                            <a href="#">Amazon Business registration</a>
                          </li>
                          <li>
                            <a href="#">Seller account</a>
                          </li>
                          <li>
                            <a href="#">Amazon Web Services</a>
                          </li>
                          <li>
                            <a href="#">Login with Amazon</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="account-box">
                    <div className="service-box">
                      <div className="service-desc">
                        <h4>Shopping programs and rentals</h4>
                        <ul>
                          <li>
                            <a href="#">Subscribe &amp; Save</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* End My Account */}
    </div>
  );
}

export default My_Account;
