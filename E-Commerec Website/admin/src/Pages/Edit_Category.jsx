import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Edit_Category() {

    const redirect = useNavigate();

    useEffect(() => {
       editData();
    }, []);

    const [formValue, setFormValue] = useState({
        categoryname: "",
        categorydesc: "",
        categoryimage: ""
     });

      const {id} = useParams();
      const editData = async () => {
       const res = await axios.get(`http://localhost:3000/categories/${id}`);
       // console.log(res.data);
       setFormValue(res.data);
      }
   
     const onChange = (e) => {
       setFormValue({ ...formValue, [e.target.name]:e.target.value });
       console.log(formValue);
     };
   
     function validation() 
     {
       var result = true;
   
       // ---------------< Category Name Validation >---------------
       if (formValue.categoryname == "") {
         toast.error("Category Name is Required !");
         result = false;
       }
       // ---------------< Category Description Validation >---------------
       if (formValue.categorydesc == "") {
         toast.error("Category Description is Required !");
         result = false;
       }
       // ---------------< Category Image URL Validation >---------------
       if (formValue.categoryimage == "") {
         toast.error("Category Image URL is Required !");
         result = false;
       }
       return result;
     }
   
     const onsubmit = async (e) => {
       e.preventDefault();
       if (validation()) {
         const res = await axios.patch(`http://localhost:3000/categories/${id}`, formValue);
   
         if (res.status == 200) {
             setFormValue({ ...formValue,categoryname:"",categorydesc:"",categoryimage:"" });
             toast.success('Category Updated Successfully.');
             return redirect('/Manage_Categories');
         }
       }
     };



  return (
    <div>
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line"> Edit Categories </h1>
            <h1 className="page-subhead-line">
              Edit Categories in your Website using this Form.
            </h1>
          </div>
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-warning">
              <div className="panel-heading"> Edit Categories </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label> Categories Name </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Category Name here..."
                      name="categoryname"
                      onChange={onChange}
                      value={formValue.categoryname}
                    />
                  </div>

                  <div className="form-group">
                    <label> Categories Description </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Category Description here..."
                      name="categorydesc"
                      onChange={onChange}
                      value={formValue.categorydesc}
                    />
                  </div>

                  <div className="form-group">
                    <label> Categories Image URL </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Category Image URL here..."
                      name="categoryimage"
                      onChange={onChange}
                      value={formValue.categoryimage}
                    />
                  </div>

                  <hr />
                  <div className="text-center">
                    <button type="button" onClick={onsubmit} className="btn btn-warning">
                      Save Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. PAGE INNER  */}
    </div>
    {/* /. PAGE WRAPPER  */}
  </div>
  )
}

export default Edit_Category