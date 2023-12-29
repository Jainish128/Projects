import React from "react";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";

function Manage_Products() {
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
              {/* Page Heading */}
              <h1 className="h3 mb-2 text-gray-800 text-center border border-primary py-2 rounded"> Manage Products </h1>
              <p className="mb-4">
                You Can Read, Edit & Delete Products in this webpage.
              </p>
              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Manage Products
                  </h6>
                </div>
                <div className="card-body">

                  {/* ----- Show Products in 10,25,50,100 Row and Searchbar above of Table -> START ----- */}
                  <div className="row">
                    <div className="col-md-2 col-sm-12">
                      <div className="dataTables_length" id="dataTable_length">
                        <label className="d-flex">
                          Show 
                          <select name="dataTable_length" className="mx-2 custom-select custom-select-sm form-control form-control-sm" aria-controls="dataTable">
                            <option value="10"> 10 </option>
                            <option value="25"> 25 </option>
                            <option value="50"> 50 </option>
                            <option value="100"> 100 </option>
                          </select> 
                          Entries
                        </label>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12"> </div>
                    <div className="col-md-3 col-sm-12">
                      <div id="dataTable_filter" className="dataTables_filter d-flex">
                        <label> Search : &nbsp; </label>
                        <input type="search" className="form-control form-control-sm col-md-9" aria-controls="dataTable" />
                      </div>
                    </div>
                  </div>
                  {/* ----- Show Products in 10,25,50,100 Row and Searchbar above of Table -> END ----- */}

                  {/* Table -> START */}
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr align='center'>
                          <th > #ID </th>
                          <th> Category Name </th>
                          <th> Product Title </th>
                          <th> Product Name </th>
                          <th> Product Image URL </th>
                          <th> Product Description </th>
                          <th> Product Price </th>
                          <th> Product Discounted Price </th>
                          <th> Product Stock Level </th>
                          <th> Created_At </th>
                          <th> Updated_At </th>
                          <th> Action </th>
                        </tr>
                      </thead>

                      {/* <tfoot>
                        <tr>
                          <th> #ID </th>
                          <th> Category Name </th>
                          <th> Product Title </th>
                          <th> Product Name </th>
                          <th> Product Image URL </th>
                          <th> Product Description </th>
                          <th> Product Price </th>
                          <th> Product Discounted Price </th>
                          <th> Product Stock Level </th>
                          <th> Action </th>
                        </tr>
                      </tfoot> */}

                      <tbody>
                        <tr align='center'>
                          <td> 1 </td>
                          <td> Shirt </td>
                          <td> Casual Shirt for Men </td>
                          <td> Casual Shirt </td>
                          <td>
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" width={100} height={100} alt="shirt_image_URL" />
                          </td>
                          <td> This Shirt is best for Outing. </td>
                          <td> 1000 </td>
                          <td> 899 </td>
                          <td> In Stock </td>
                          <td> 24-11-2023 <br /> 14:20 </td>
                          <td> DD-MM-YYYY <br /> HH:MM </td>
                          <td>
                            <div style={{ width: "125px" }}>
                              <button className="btn btn-sm btn-primary btn-icon-split mb-1" title="Edit">
                                <span className="icon">
                                  <i className="fa-regular fa-pen-to-square"></i>
                                </span>
                                <span className="text"> Edit </span>
                              </button>

                              <button className="btn btn-sm btn-danger btn-icon-split mb-1" title="Edit">
                                <span className="icon">
                                  <i className="fa-regular fa-trash-can"></i>
                                </span>
                                <span className="text"> Delete </span>
                              </button>

                              <button className="btn btn-sm btn-info btn-icon-split" title="Edit">
                                <span className="icon">
                                <i className="fa-solid fa-boxes-stacked"></i>
                                </span>
                                <span className="text"> Stock Level </span>
                              </button>
                            </div>

                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                  {/* Table -> END */}



                  {/* Showing Number of How Many Entries Show && Pagination -> START */}
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
                        Showing 1 to 3 of 57 Enteris
                      </div>
                    </div>
                    <div className="col-md-4"> </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate" >
                        <div className="pagination">

                          <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                            <a href="#" aria-controls="dataTable" data-dt-idx='0' tabindex='0' className="page-link" >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#" aria-controls="dataTable" data-dt-idx='1' tabindex='0' className="page-link" >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='2' tabindex='0' className="page-link" >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='3' tabindex='0' className="page-link" >
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='4' tabindex='0' className="page-link" >
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='5' tabindex='0' className="page-link" >
                              5
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='6' tabindex='0' className="page-link" >
                              6
                            </a>
                          </li>
                          <li className="paginate_button page-item next" id="dataTable_next">
                            <a href="#" aria-controls="dataTable" data-dt-idx='7' tabindex='0' className="page-link" >
                              Next
                            </a>
                          </li>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Showing Number of How Many Entries Show && Pagination -> END */}
    




                </div>
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

export default Manage_Products;
