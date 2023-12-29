import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import axios from "axios";
import { toast } from "react-toastify";

function Manage_Messages() {


  var width125px = { width: "125px" };


  // ---------------| For Data Fetch from JSON-Server and Show in Manage Messages Tabe -> START |---------------
  useEffect(() => {
    fetchMessages();
  });
  const [messages, setMessages] = useState([]);

  const fetchMessages = async() => {
    const resp = await axios.get(`http://localhost:3000/messages`);
    setMessages(resp.data);
  };
  // ---------------| For Data Fetch from JSON-Server and Show in Manage Messages Tabe -> END |---------------

  // ---------------| Delete Message from Manage Messages webpage -> START |---------------
  const deleteMessage = async(id) => {
    const resp = await axios.delete(`http://localhost:3000/messages/${id}`);
    if (resp.status == 200) 
    {
      toast.success('Message Deleted Successfully.');
      fetchMessages();  
    }
  }
  // ---------------| Delete Message from Manage Messages webpage -> END |---------------

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
              <h1 className="h3 mb-2 text-gray-800 text-center border border-primary py-2 rounded"> Manage Messages </h1>
              <p className="mb-4">
                You Can Read, Delete & Reply to Messages in this Webpage.
              </p>
              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Manage Messages
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
                          <th> Messanger Name </th>
                          <th> Messanger Email </th>
                          <th> Message Subject </th>
                          <th> Message </th>
                          <th> Created_At </th>
                          <th> Replied_At </th>
                          <th> Action </th>
                        </tr>
                      </thead>

                      {/* <tfoot>
                        <tr>
                          <th > #ID </th>
                          <th> Messanger Name </th>
                          <th> Messanger Email </th>
                          <th> Message Subject </th>
                          <th> Message </th>
                          <th> Created_At </th>
                          <th> Replied_At </th>
                          <th> Action </th>
                        </tr>
                      </tfoot> */}

                      <tbody>
                       
                        {
                          messages.map((value, index) => {
                            return (
                              <tr align='center' key={index}>
                              <td> {value.id} </td>
                              <td style={width125px}> {value.messanger_name} </td>
                              <td> {value.messanger_email} </td>
                              <td> {value.messange_subject} </td>
                              <td> {value.messange} </td>
                              <td style={width125px}> {value.sended_at} </td>
                              <td style={width125px}> {value.replied_at} </td>
                              <td style={{ width: "100px" }}>
                                  <button className="btn btn-sm btn-info btn-icon-split mb-1" title="Edit">
                                    <span className="icon">
                                      <i className="fa-regular fa-pen-to-square"></i>
                                    </span>
                                    <span className="text"> Reply </span>
                                  </button>
                                  <br />
                                  <button className="btn btn-sm btn-danger btn-icon-split" onClick={()=> deleteMessage(value.id)} title="Delete Message">
                                  {/* <button className="btn btn-sm btn-danger btn-icon-split" title="Delete Message"> */}
                                    <span className="icon">
                                      <i className="fa-regular fa-trash-can"></i>
                                    </span>
                                    <span className="text"> Delete </span>
                                  </button>
                              </td>
                            </tr>
                            )
                          })
                        }

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
                            <a href="#" aria-controls="dataTable" data-dt-idx='0' tabIndex='0' className="page-link" >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#" aria-controls="dataTable" data-dt-idx='1' tabIndex='0' className="page-link" >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='2' tabIndex='0' className="page-link" >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='3' tabIndex='0' className="page-link" >
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='4' tabIndex='0' className="page-link" >
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='5' tabIndex='0' className="page-link" >
                              5
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a href="#" aria-controls="dataTable" data-dt-idx='6' tabIndex='0' className="page-link" >
                              6
                            </a>
                          </li>
                          <li className="paginate_button page-item next" id="dataTable_next">
                            <a href="#" aria-controls="dataTable" data-dt-idx='7' tabIndex='0' className="page-link" >
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

export default Manage_Messages;
