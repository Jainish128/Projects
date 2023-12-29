import React from 'react'

function Products_Sidebar() {
  return (
    <div>
          <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form action="#">
                    <input
                      className="form-control"
                      placeholder="Search here..."
                      type="text"
                    />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="filter-sidebar-left">
                  <div className="title-left">
                    <h3>Categories</h3>
                  </div>
                  <div
                    className="list-group list-group-collapse list-group-sm list-group-tree"
                    id="list-group-men"
                    data-children=".sub-men"
                  >
                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men1"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-men1"
                      >
                        Casual Outfits
                        {/* <small className="text-muted">(100)</small> */}
                      </a>
                      <div
                        className="collapse show"
                        id="sub-men1"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            Shirts
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            T-Shirts
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Pents
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men2"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-men2"
                      >
                        Function Outfits
                      </a>
                      <div
                        className="collapse show"
                        id="sub-men2"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            Ethnic Wear
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Suit
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men3"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="sub-men3"
                      >
                        Footwear
                        <small className="text-muted">(50)</small>
                      </a>
                      <div
                        className="collapse"
                        id="sub-men3"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sports Shoes
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sneakers <small className="text-muted">(20)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Formal Shoes
                            <small className="text-muted">(20)</small>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <a href="#" className="list-group-item list-group-item-action" >
                      Men <small className="text-muted">(150) </small>
                    </a> */}
                  </div>
                </div>

                {/* <div className="filter-price-left">
                  <div className="title-left">
                    <h3>Price</h3>
                  </div>
                  <div className="price-box-slider">
                    <div id="slider-range" />
                    <p>
                      <input
                        type="text"
                        id="amount"
                        readOnly
                        style={{
                          border: 0,
                          color: "#fbb714",
                          fontWeight: "bold",
                        }}
                      />
                      <button className="btn hvr-hover" type="submit">
                        Filter
                      </button>
                    </p>
                  </div>
                </div> */}
                
              </div>
            </div>
    </div>
  )
}

export default Products_Sidebar