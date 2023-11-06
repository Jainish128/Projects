import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Manage_Casual_Outfits() {

  var Table_Style = { textAlign: "center" }
  // ----------------------------------------

  // Fethc Data from Localhost Server ------------
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get('http://localhost:3000/casual');
    // console.log(res.data);
    setData(res.data)
  }
  // fetch();


  // --------------- Delete Data ---------------
  const onDelete = async(id) => {
    const res=await axios.delete(`http://localhost:3000/casual/${id}`)
    // console.log(res);
    if (res.status == "200") 
    {
      fetch();  
      toast.success('Delete Successfully !');
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
            <h1 className="page-head-line"> Manage Products </h1>
            <h1 className="page-subhead-line">
              You can Manage Products from using this Table.
            </h1>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-12">
                {/*   Kitchen Sink */}
                <div className="panel panel-success">
                  <div className="panel-heading">
                    Manage Products 
                  </div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-hover" style={Table_Style}>
                        <thead>
                          <tr>
                            <th style={Table_Style}> # ID </th>
                            <th style={Table_Style}> Category Name </th>
                            <th style={Table_Style}> Product Name </th>
                            <th style={Table_Style}> Product Description </th>
                            <th style={Table_Style}> Main Price </th>
                            <th style={Table_Style}> Discounted Price </th>
                            <th style={Table_Style}> Product Image </th>
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
                                    <td> {value.cate_name} </td>
                                    <td> {value.product_name} </td>
                                    <td> {value.desc} </td>
                                    <td> ₹{value.price} </td>
                                    <td> ₹{value.discounted_price} </td>
                                    <td> <img src={value.img_url} width={"150px"} height={"175px"} /> </td>
                                    <td> {value.created_at} </td>
                                    <td> {value.updated_at} </td>
                                    <td style={{width: "165px"}}>
                                    {/* <td> */}
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">

                                      <button className="btn btn-primary" onClick={()=> {redirect('/Edit_Casual_Outfits/' + value.id)}}> 
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
  )
}

export default Manage_Casual_Outfits