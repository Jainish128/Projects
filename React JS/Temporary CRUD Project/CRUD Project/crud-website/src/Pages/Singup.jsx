import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Singup() {

  var label = { fontWeight: "bold", fontSize: "18px" };
  var radioBtn = { accentColor: "orangered" };



  // ==================== Send User Data to JSON-Server (POST) -> START ====================
  var d = new Date();
  var created = `📅${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    profile_img: "",
    gender: "",
    country: ""
  });

  const inputing_values = (j) => {
    setFormValue({ ...formValue, id:d.getTime().toString(), created_at:created, [j.target.name]:j.target.value });
  };

  const Validation = () => {
    var result = true;
    if (formValue.name == "") 
    {
      toast.error('Username is required for Signup');
      result = false;  
    }
    if (formValue.email == "") 
    {
      toast.error('Email is required for Signup');
      result = false;  
    }
    if (formValue.mobile == "") 
    {
      toast.error('Mobile Number is required for Signup');
      result = false;  
    }
    if (formValue.password == "") 
    {
      toast.error('Password is required for Signup');
      result = false;  
    }
    if (formValue.profile_img == "") 
    {
      toast.error('Profile Image URL is required for Signup');
      result = false;  
    }
    if (formValue.gender == "") 
    {
      toast.error('Gender is required for Signup');
      result = false;  
    }
    if (formValue.country == "") 
    {
      toast.error('Country is required for Signup');
      result = false;  
    }
    return result;
  };

  var gender2 = document.getElementsByName("gender");
  var country = document.getElementById("country");

  const onSignup = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.post(`http://localhost:3000/user`, formValue);
      if (resp.status == 201) 
      {
        toast.success('Your Account has been Created Successfully.', {
          position: toast.POSITION.TOP_CENTER
        });
        setFormValue({ ...formValue, name: "", email: "", mobile: "", password: "", profile_img: "" }); 
        gender2.value = "";
        country.value = "";
      }  
    }
  };
  // ==================== Send User Data to JSON-Server (POST) -> END ====================



  return (
    <div>
      {/* Start Contact Us  */}
      <div className="contact-box-main">
        <div className="container">
          <div className="row">
         
            <div className="col-lg-8 col-sm-12">
              <div className="contact-form-right">
                <h2 className="text-center"> SINGUP </h2>
                <form id="contactForm">
                  <div className="row">

                    <div className="col-md-12">
                      <label style={label}> Name : </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                          name="name"
                          onChange={inputing_values}
                          value={formValue.name}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <label style={label}> Email : </label>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email id"
                          name="email"
                          onChange={inputing_values}
                          value={formValue.email}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <label style={label}> Mobile Number : </label>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your Mobile Number"
                          name="mobile"
                          onChange={inputing_values}
                          value={formValue.mobile}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <label style={label}> Password : </label>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your Password"
                          name="password"
                          onChange={inputing_values}
                          value={formValue.password}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <label style={label}> Profile Image URL : </label>
                      <div className="form-group">
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter your Profile Image URL"
                          name="profile_img"
                          onChange={inputing_values}
                          value={formValue.profile_img}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label style={label}> Gender : </label> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="radio" name="gender" onChange={inputing_values} value='Male' class="gender" style={radioBtn} /> Male
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      <input type="radio" name="gender" onChange={inputing_values} value='Female' class="gender" style={radioBtn} /> Female
                    </div>
                    <div className="col-md-12">
                      <label style={label}> Country : </label> 
                      <select className="form-control" name="country" onChange={inputing_values} id="country" >
                        <option value="" selected disabled> Select Your Country :  </option>
                        <option value="India"> India  </option>
                        <option value="Canada"> Canada  </option>
                        <option value="US"> US  </option>
                        <option value="Switzerland"> Switzerland  </option>
                        <option value="Dubai"> Dubai </option>
                      </select>
                    </div>

                    <div className="col-md-12 mt-5">
                      <div className="submit-button text-center">
                        <button
                          className="btn hvr-hover"
                          id="submit"
                          type="submit"
                          onClick={onSignup}
                        >
                          Singup
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="contact-info-left">
                {/* <h2> Your's Info </h2> */}
                <p>
                  If you have Already Account ? Please, &nbsp; 
                  <Link to="/Login" className="text-dark border-bottom border-top border-info py-1"> Login  </Link>
                  {/* <Link to="/Login" className="hvr-hover mx-3 px-2 text-light"> Login  </Link> */}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Cart */}
    </div>
  );
}

export default Singup;
