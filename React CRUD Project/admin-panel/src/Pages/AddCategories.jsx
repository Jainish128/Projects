import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function AddCategories() {


// <<-------------<-<-< Add Time & Date on Add Product >->->------------->>
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var created = " 📅 " + date + "/" + month + "/" + year + " ⌚ " + hours + ":" + minutes;


// <<-------------<-<-< Create Empty Object of Input names usign useState hook. >->->------------->>
const [formValue, setFormValue] = useState({
  categoryname:"",
  categorydesc:"",
  categoryimage:"",
  created_at:""
  // status:"available"
});
// <<-------------<-<-< create onChange Function for Target and Get Input Values >->->------------->>
const onChange = (j) => {
  setFormValue({ ...formValue, id: new Date().getTime().toString(), created_at:created, [j.target.name]:j.target.value, });
  console.log(formValue);
};
// <<-------------<-<-< Add Products Form Validation >->->------------->>
function Validation() 
{
  var result = true;
  // ---------------< Category Name Validation >---------------
  if (formValue.categoryname == "") 
  {
    toast.error('Please fill the Category Name for Add Category.');
    result = false;
  }  
  // ---------------< Category Description Validation >---------------
  if (formValue.categorydesc == "") 
  {
    toast.error('Please fill the Category Description for Add Category.');
    result = false;
  }  
  // ---------------< Category Image URL Validation >---------------
  if (formValue.categoryimage == "") 
  {
    toast.error('Please fill the Category Image URL for Add Category.');
    result = false;
  }  
  return result;
}



// <<-------------<-<-< Create onSubmit function for formValue POST to Manage_Product & Show Product in webiste  >->->------------->>
const onSubmit = async (p) => {
  p.preventDefault();
  if (Validation()) 
  {
      const result = await axios.post(`http://localhost:3000/categories`, formValue);  

      if (result.status == 201) 
      {
        toast.success('Your Category has been Added Successfully.');
        setFormValue({ ...formValue, categoryname:"", categorydesc:"", categoryimage:"" });  
        return true;
      }

    else
    {
      toast.warning('Please Check the Category Name Correctly!');
      return false;
    }

  }
}


  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Categories </h1>
              <h1 className="page-subhead-line">
                Add Categories in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading"> Add Category  Form</div>
                <div className="panel-body">
                  <form role="form">

                    <div className="form-group">
                      <label> Categories Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Categories Name here..."
                        name="categoryname"
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>  Category Description </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Category Description here..."
                        name="categorydesc"
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>  Category Image URL </label>
                      <input
                        className="form-control"
                        type="url"
                        placeholder="Enter the Category Image URL here..."
                        name="categoryimage"
                        onChange={onChange}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-info" onClick={onSubmit}>
                        Add Category
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
  );
}

export default AddCategories;
