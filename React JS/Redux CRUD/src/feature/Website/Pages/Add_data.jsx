import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insert } from "../../userReducer";
import { toast } from "react-toastify";

function Add_data() {

  const [formValue, setFormValue] = useState({
    id:"",
    name:"",
    email:"",
    mobile:"",
    password:""
  });

  const changeHandle = (e) => {
    setFormValue({ ...formValue, id:new Date().getTime().toString(), [e.target.name]:e.target.value });
  };

  function validation() 
  {
    var result = true;

    if (formValue.name == "") 
    {
      toast.error('Please Enter Username.')  
      result = false;
    }  
    if (formValue.email == "") 
    {
      toast.error('Please Enter Email Id.')  
      result = false;
    }  
    if (formValue.mobile == "") 
    {
      toast.error('Please Enter Mobile Number.')  
      result = false;
    }  
    if (formValue.password == "") 
    {
      toast.error('Please Enter Password.')  
      result = false;
    }  
    return result;
  }



  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    if (validation()) 
    {
      dispatch(insert(`http://localhost:3000/user`, formValue));
      toast.success('Data has been Added Successfully.');
      setFormValue({ ...formValue, name:"", email:"", mobile:"", password:"" }); 
    }
  }

  


  return (
    <div>
      <div className="container">
        <div className="row">
            <h2 className="mt-3 text-center"> ADD DATA </h2>
          <div className="col-sm-12">
            <form action="#">

              <div className="mb-3 mt-3">
                <label className="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={formValue.name} 
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3 mt-3">
                <label className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={formValue.email} 
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3 mt-3">
                <label className="form-label">
                  Mobile  :
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                  name="mobile"
                  value={formValue.mobile} 
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={formValue.password} 
                  onChange={changeHandle}
                />
              </div>
           
              <button type="submit" onClick={submitHandle} className="btn btn-primary">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_data;
