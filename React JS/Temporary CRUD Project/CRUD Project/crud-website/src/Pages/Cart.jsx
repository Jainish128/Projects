import React from "react";

function Cart() {
  return (
    <div>
      {/* Start Cart  */}
      <div className="cart-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-main table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-01.jpg"
                            alt
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <i className="fas fa-times" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-02.jpg"
                            alt
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 60.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <i className="fas fa-times" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-03.jpg"
                            alt
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 30.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <i className="fas fa-times" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-sm-6">
              <div className="coupon-box">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control"
                    placeholder="Enter your coupon code"
                    aria-label="Coupon code"
                    type="text"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-theme" type="button">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="update-box">
                <input defaultValue="Update Cart" type="submit" />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-8 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="order-box">
                <h3>Order summary</h3>
                <div className="d-flex">
                  <h4>Sub Total</h4>
                  <div className="ml-auto font-weight-bold"> $ 130 </div>
                </div>
                <div className="d-flex">
                  <h4>Discount</h4>
                  <div className="ml-auto font-weight-bold"> $ 40 </div>
                </div>
                <hr className="my-1" />
                <div className="d-flex">
                  <h4>Coupon Discount</h4>
                  <div className="ml-auto font-weight-bold"> $ 10 </div>
                </div>
                <div className="d-flex">
                  <h4>Tax</h4>
                  <div className="ml-auto font-weight-bold"> $ 2 </div>
                </div>
                <div className="d-flex">
                  <h4>Shipping Cost</h4>
                  <div className="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr />
                <div className="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div className="ml-auto h5"> $ 388 </div>
                </div>
                <hr />{" "}
              </div>
            </div>
            <div className="col-12 d-flex shopping-box">
              <a href="checkout.html" className="ml-auto btn hvr-hover">
                Checkout
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* End Cart */}
    </div>
  );
}

export default Cart;
