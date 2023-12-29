import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  var label = { fontWeight: "bold", fontSize: "18px" };
  var radioBtn = { accentColor: "orangered" };

  // =============== Validate Login Email & Password and LOGIN -> START  ===============
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const inputing_Value = (j) => {
    setFormValue({ ...formValue, [j.target.name]:j.target.value });
    console.log(formValue);
  };

  const Validation = () => {
    var result = true;
    if (formValue.email == "") 
    {
      toast.error('Email ID is required for Login.');
      result = false;  
    }
    if (formValue.password == "") 
    {
      toast.error('Password is required for Login.');
      result = false;  
    }
    return result;
  };

  const redirect = useNavigate();

  const onLogin = async(p) => {
    p.preventDefault();
    if (Validation())
    {
      const resp = await axios.get(`http://localhost:3000/user?email=${formValue.email}`); 

      if (resp.data.length > 0) 
      {
        if (resp.data[0].password == formValue.password) 
        {
          localStorage.setItem('Username', resp.data[0].name);
          localStorage.setItem('ID', resp.data[0].id);
          localStorage.setItem('mobile', resp.data[0].mobile);
          localStorage.setItem('password', resp.data[0].password);

          redirect('/');
          toast('Login Successfully.', { position: toast.POSITION.TOP_CENTER });
        }
        else
        { 
          toast.error('Password is Incorrect !');
          return false;
        }
      }
      else
      {
        toast.error('Email ID is Incorrect !');
        return false;
      }
    }
 
  }
  // =============== Validate Login Email & Password and LOGIN -> END  ===============


  return (
    <div>
      {/* Start Contact Us  */}
      <div className="contact-box-main">
        <div className="container">
          <div className="row">
         
            <div className="col-lg-8 col-sm-12">
              <div className="contact-form-right">
                <h2 className="text-center"> LOGIN </h2>
                <form id="contactForm">
                  <div className="row">

                    <div className="col-md-12">
                    <label style={label}> Email : </label>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Enter Your Email id"
                          className="form-control"
                          name="email"
                          onChange={inputing_Value}
                          value={formValue.email}
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
                          onChange={inputing_Value}
                          value={formValue.password}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 mt-5">
                      <div className="submit-button text-center">
                        <button
                          className="btn hvr-hover"
                          id="submit"
                          type="submit"
                          onClick={onLogin}
                        >
                          Login
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
                  If you have not Account ? then <br /> Create your Account &nbsp;
                  <Link to="/Singup" className="text-dark border-bottom border-top border-danger py-1"> Singup  </Link>
                  {/* <Link to="/Singup" className="hvr-hover mx-3 px-2 text-light"> Singup  </Link> */}
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

export default Login;
