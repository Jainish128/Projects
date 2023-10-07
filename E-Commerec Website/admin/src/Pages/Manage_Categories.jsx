import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Manage_Categories() {

  var Table_Style = { textAlign: "center" };
  // ----------------------------------------

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    
    const res = await axios.get('http://localhost:3000/categories');
    // console.log(res.data);
    setData(res.data)
  }
  // fetch();

   // --------------- Delete Data ---------------
   const onDelete = async(id) => {
    const res=await axios.delete(`http://localhost:3000/categories/${id}`)
    // console.log(res);
    if (res.status == "200") 
    {
      fetch();  
      toast.error('Delete Successfully !');       
    }
  }
  // ------------------------------------------
  const redirect = useNavigate();
  // ------------------------------------------


  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Manage Categories </h1>
              <h1 className="page-subhead-line">
                You can Manage Categories form using this Table.
              </h1>
              {/* /. ROW  */}
              <div className="row">
                <div className="col-md-12">
                  {/*   Kitchen Sink */}
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      Manage Categories
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover" style={Table_Style}>
                          <thead>
                            <tr>
                              <th style={Table_Style}> #ID </th>
                              <th style={Table_Style}> Categories Name </th>
                              <th style={Table_Style}> Categories Description </th>
                              <th style={Table_Style}> Categories Image </th>
                              <th style={Table_Style}> Created At </th>
                              <th style={Table_Style}> Updated At </th>
                              <th style={Table_Style}> Action </th>
                            </tr>
                          </thead>
                          <tbody>

                            {
                              data.map((value, index, entarr) => {
                                return (
                                  <tr>
                                    <td> {value.id} </td>
                                    <td> {value.categoryname} </td>
                                    <td> {value.categorydesc} </td>
                                    <td> <img src={value.categoryimage} width={"200px"} height={"250px"} /> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td style={{width: "165px"}}>
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">

                                      <button className="btn btn-primary" onClick={()=>{redirect('/Edit_Category/' + value.id)}}> 
                                        Edit 
                                      </button> 

                                      <button className="btn btn-danger" onClick={()=> onDelete(value.id)}> Delete </button>

                                      </div>
                                    </td>
                                </tr>
                                )
                              })
                            }

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

export default Manage_Categories;
