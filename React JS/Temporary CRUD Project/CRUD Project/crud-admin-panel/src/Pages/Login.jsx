import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {


  // =============== Login Validate of Admin -> START ===============

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const inputing_Values = (j) => {
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
      const res = await axios.get(`http://localhost:3000/adminuser?email=${formValue.email}`);

      if (res.data.length > 0) 
      {
        if (res.data[0].password == formValue.password) 
        {
          toast('Login Successfully to Admin Panel.', { position: toast.POSITION.TOP_CENTER });
          redirect('/Dashboard');
          localStorage.setItem('AP_Username', res.data[0].name);
          localStorage.setItem('AP_Email', res.data[0].email);
          localStorage.setItem('AP_ID', res.data[0].id);
        } 
        else
        {
          toast.error('Password is Incorrect.');
          return false;
        }
      }
      else
      {
        toast.error('Email ID is Incorrect.');
        return false;
      }
      
    }
  };

  // =============== Login Validate of Admin -> END ===============


  return (
    <div className="bg-gradient-primary" style={{ height: "100vh" }}>
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          onChange={inputing_Values}
                          value={formValue.email}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Enter Password..."
                          name="password"
                          onChange={inputing_Values}
                          value={formValue.password}
                        />
                      </div>
                      {/* <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div> */}
                      <Link
                        to="/Dashboard"
                        className="btn btn-primary btn-user btn-block"
                        onClick={onLogin}
                      >
                        Login
                      </Link>
                      {/* <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block" > 
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block" > 
                        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                      </a> */}
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/Forgot_Password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/Signup">
                        Create an Account!
                      </Link>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
