import React from "react";
import { Link } from "react-router-dom";

function Signup() {


    var radioColor = { accentColor: 'black' };
    var selectMenu = { background: "black", color: "silver" }




  return (
    <div className="bg-gradient-primary" style={{ height: "100vh", paddingTop: "50px" }}>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{ marginTop: "-175px" }} />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          className="form-control form-control-user"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="Password"  
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label> Gender : </label> <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="gender" value='Male' style={radioColor} /> Male <br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="gender" value='Female' style={radioColor} /> Female
                      </div>
                      <div className="col-sm-6">
                        <label> Country :  </label> <br />
                        <select className='form-control' style={{ height: '50px', borderRadius: '25px' }}>
                            <option selected disabled value=""> Select Country </option>
                            <option style={selectMenu} value="India"> India </option>
                            <option style={selectMenu} value="USA"> USA </option>
                            <option style={selectMenu} value="Canada"> Canada </option>
                            <option style={selectMenu} value="Switzerland"> Switzerland </option>
                            <option style={selectMenu} value="Dubai"> Dubai </option>
                        </select>
                      </div>
                    </div>
                    <a
                      href="login.html"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </a>
                    {/* <hr />
                    <a
                      href="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw" /> Register with Google
                    </a>
                    <a
                      href="index.html"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw" /> Register with
                      Facebook
                    </a> */}
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/Forgot_Password">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link className="small" to="/">
                      Already have an account? Login!
                    </Link>
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

export default Signup;
