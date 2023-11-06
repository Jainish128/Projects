import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const onchange = (j) => {
    setFormValue({ ...formValue,[j.target.name]:j.target.value })
    console.log(formValue);
  }

  function validate() 
  {
    var result = true; 
    if (formValue.email == "")
    {
      toast.error('Email ID is Required for Login !');
      result = false;  
    }  
    if (formValue.password == "")
    {
      toast.error('Password is Required for Login !');
      result = false;  
    }  
    return result;
  }

  const redirect = useNavigate();

  const onsubmit = async (j) => {
    j.preventDefault();
    
    if (validate()) 
    {
      const result = await axios.get(`http://localhost:3000/adminuser?email=${formValue.email}`);  

      if (result.data.length > 0) 
      {
        if (result.data[0].password == formValue.password) 
        {
          toast.success('Login Successfully.');  
          redirect('/Dashboard');

          localStorage.setItem('Email', result.data[0].email);
          localStorage.setItem('Password', result.data[0].password);
          localStorage.setItem('username', result.data[0].name)
          localStorage.setItem('userid', result.data[0].id)
        } 
        else 
        {
          toast.error('Password is Incorrect.');  
          return false;
        }
      } 
      else 
      {
        toast.error('Email ID is Incorrect');
        return false;  
      }

    }
  }




// ===================================================================================================

  return (
    <div className="container-fluid" style={{backgroundColor: "#E2E2E2", height: "100vh"}}>
      <div className="row text-center " style={{ paddingTop: 100 }}>
        <div className="col-md-12">
          <img src="assets/img/logo-invoice.png" />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <div className="panel-body">
            <form role="form">
              <hr />
              <h5 className="text-center">Enter Details to Login</h5>
              <br />

              {/* <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user" />
                </span>
                <input type="text" name="name" onChange={onchange} className="form-control" placeholder="Your Name" />
              </div> */}

              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="fa fa-tag" />
                </span>
                <input type="email" name="email" onChange={onchange} className="form-control" placeholder="Your Email" />
              </div>

              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock" />
                </span>
                <input type="password" name="password" onChange={onchange} className="form-control" placeholder="Your Password" />
              </div>

              {/* <div className="form-group">
                <label className="checkbox-inline">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="pull-right">
                  <Link to='/'>Forget password ? </Link>
                </span>
              </div> */}

              <div className="text-center">
                <Link onClick={onsubmit} className="btn btn-primary">
                  Login Now
                </Link>
              </div>
              
              <hr />
              {/* Not register ? <Link to='/Dashboard'>Click Here </Link> or go to 
              <Link to='/Dashboard'> Home</Link> */}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
