import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Manage_User() {
  var Table_Style = { textAlign: "center" };

  // ------------ Fetch Data from Localhost Server ------------
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/user");
    // console.log(res.data);
    setData(res.data);
  };
  // fetch();

  // --------------- Delete Data ---------------
  const onDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    // console.log(res);
    if (res.status == "200") {
      fetch();
      toast.success("Delete Successfully !");
    }
  };


  const redirect = useNavigate();


  // ------------------------------------------
        // Status Check  |03-10-2023|
  // ------------------------------------------
  const statusChange = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`)
    // console.log(res);
    if (res.data.status == "Unblock") 
    {
      const res1 = await axios.patch(`http://localhost:3000/user/${id}`, {status:"Blocked"});
      if (res1.status == 200) 
      {
        fetch();
        toast.success('Status Block Successfully/');  
      }
    }
    else
    { 
      const res1 = await axios.patch(`http://localhost:3000/user/${id}`, {status:"Unblock"});
      if (res1.status == 200) 
      {
        fetch();
        toast.success('Status Unblock Successfully.');  
      }
    }
  }



  // ------------------------------------------

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Manage Users </h1>
              <h1 className="page-subhead-line">
                You can Manage User from using this Table.
              </h1>
              {/* /. ROW  */}
              <div className="row">
                <div className="col-md-12">
                  {/*   Kitchen Sink */}
                  <div className="panel panel-warning">
                    <div className="panel-heading">Manage User</div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table
                          className="table table-striped table-bordered table-hover"
                          style={Table_Style}
                        >
                          <thead>
                            <tr>
                              <th style={Table_Style}> #ID </th>
                              <th style={Table_Style}> Name </th>
                              <th style={Table_Style}> Email </th>
                              <th style={Table_Style}> Password </th>
                              <th style={Table_Style}> Mobile No. </th>
                              <th style={Table_Style}> Gender </th>
                              <th style={Table_Style}> Country Name </th>
                              <th style={Table_Style}> Status </th>
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
                                  <td> {value.name} </td>
                                  <td> {value.email} </td>
                                  <td> {value.password} </td>
                                  <td> {value.mobile} </td>
                                  <td> {value.gender} </td>
                                  <td> {value.country} </td>
                                  <td> {value.status} </td>
                                  <td> {value.created_at} </td>
                                  <td> {value.updated_at} </td>
                                  <td style={{ width: "200px" }}>
                                    {/* <td> */}
                                    <div
                                      class="btn-group btn-group-sm"
                                      role="group"
                                      aria-label="Basic mixed styles example"
                                    >
                                      <button className="btn btn-primary btn-sm" onClick={() => {redirect('/edit_user/' + value.id)}}>
                                        Edit
                                      </button>
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => onDelete(value.id)}
                                      >
                                        Delete
                                      </button>

                                      <button
                                        className="btn btn-warning"
                                        onClick={() => statusChange(value.id)}
                                      > 
                                        {(value.status == "Unblock")?'Block':'Unblock'}
                                        {/* {value.status} */}
                                      </button>

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

export default Manage_User;
