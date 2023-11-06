import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Manage_Comments() {
  var Table_Style = { textAlign: "center" };

  // Fethc Data from Localhost Server ------------
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/comments");
    // console.log(res.data);
    setData(res.data);
  };
  // fetch();

  // --------------- Delete Data ---------------
  const onDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/comments/${id}`);
    // console.log(res);
    if (res.status == "200") {
      fetch();
      toast.success("Delete Successfully !");
    }
  };
  // ------------------------------------------

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Manage Comments </h1>
              <h1 className="page-subhead-line">
                You can Manage Comments form using this Table.
              </h1>
              {/* /. ROW  */}
              <div className="row">
                <div className="col-md-12">
                  {/*   Kitchen Sink */}
                  <div className="panel panel-danger">
                    <div className="panel-heading">Manage Comments</div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered table-hover"
                          style={Table_Style}
                        >
                          <thead>
                            <tr>
                              <th style={Table_Style}> # ID </th>
                              <th style={Table_Style}> Name </th>
                              <th style={Table_Style}> Email </th>
                              <th style={Table_Style}> Comment </th>
                              <th style={Table_Style}> Created At </th>
                              <th style={Table_Style}> Updated At </th>
                              <th style={Table_Style}> Action </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((value, index, entarr) => {
                              return (
                                <tr>
                                  <td> {value.id} </td>
                                  <td> {value.username} </td>
                                  <td> {value.email} </td>
                                  <td> {value.comment} </td>
                                  <td> </td>
                                  <td> </td>
                                  <td style={{ width: "165px" }}>
                                    {/* <td> */}
                                    <div
                                      class="btn-group btn-group-sm"
                                      role="group"
                                      aria-label="Basic mixed styles example"
                                    >
                                      {/* <button className="btn btn-primary"> Edit </button>  */}
                                      {/* <button className="btn btn-success"> Save </button> */}
                                      <button className="btn btn-success">
                                         
                                        Reply 
                                      </button>
                                      <button className="btn btn-danger" onClick={()=> onDelete(value.id)}> Delete </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End  Kitchen Sink */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_Comments;
