import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Edit_User() {


     const redirect = useNavigate();

     useEffect(() => {
        editData();
     }, []);

     const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        gender: "",
        country: "",
      });

       const {id} = useParams();
       const editData = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
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
    
        // ---------------< Name Validation >---------------
        if (formValue.name == "") {
          toast.error("Name is Required !");
          result = false;
        }
        // ---------------< Email Validation >---------------
        if (formValue.email == "") {
          toast.error("Email is Required !");
          result = false;
        }
        // ---------------< Password Validation >---------------
        if (formValue.password == "") {
          toast.error("Password is Required !");
          result = false;
        }
        // ----------< Mobile Number Validation >----------
        if (formValue.mobile == "") {
          toast.error("Mobile Number is is Required !");
          result = false;
        }
        // ---------------< Gender Validation >---------------
        if (formValue.gender == "") {
          toast.error("Please select ypur Gender.");
          result = false;
        }
        // ---------------< Country Validation >---------------
        if (formValue.country == "") {
          toast.error("Country is Required !");
          result = false;
        } 
        return result;
      }
    
      const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
          const res = await axios.patch(`http://localhost:3000/user/${id}`, formValue);
    
          if (res.status == 200) {
              setFormValue({ ...formValue,name: "",email: "",password: "",mobile: "",gender: "",country: "" });
              toast.success('Update Successfully.');
              return redirect('/Manage_User');
          }
        }
      };



  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Edit Users </h1>
              <h1 className="page-subhead-line">
                Edit Users in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-warning">
                <div className="panel-heading"> Edit Users </div>
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <label> Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name here..."
                        name="name"
                        onChange={onChange}
                        value={formValue.name}
                      />
                    </div>

                    <div className="form-group">
                      <label> Email </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email ID here..."
                        name="email"
                        onChange={onChange}
                        value={formValue.email}
                      />
                    </div>

                    <div className="form-group">
                      <label> Password </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Password here..."
                        name="passwrod"
                        onChange={onChange}
                        value={formValue.password}
                      />
                    </div>

                    <div className="form-group">
                      <label> Mobile Number </label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Mobile Number here..."
                        name="mobile"
                        onChange={onChange}
                        value={formValue.mobile}
                      />
                    </div>

                    <div className="form-group">
                      <label> Gender </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Mobile Number here..."
                        name="gender"
                        onChange={onChange}
                        value={formValue.gender}
                      />
                    </div>

                    <div className="form-group">
                      <label> Country </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Mobile Number here..."
                        name="country"
                        onChange={onChange}
                        value={formValue.country}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="button" onClick={onsubmit} className="btn btn-warning">
                        Save 
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

export default Edit_User;
