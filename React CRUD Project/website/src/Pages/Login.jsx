import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  
  var centerForm = { width: "30%", height: "100vh", margin: "0% 35%" };
  // var formBg = { backgroundColor: "#dcdde1" };
  var formBg = { background: `radial-gradient( #00b894, #00cec9, #0984e3 )` };
  // var textCenter = { tetxAlign: "center" };

  // -------------------- Insert Data --------------------

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });


  const onChange = (e) => {
    setFormValue({ ...formValue,[e.target.name]:e.target.value })
    console.log(formValue);
  }

  function validation() 
  {
    var result = true;
    if (formValue.email == "") 
    {
        toast.error("Email is required for Login.");
        result = false;
    }
    if (formValue.password == "") 
    {
        toast.error("Password is required for Login.");
        result = false;
    }
    return result;
  }


  var redirect = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) 
    {
      const res = await axios.get(`http://localhost:3000/user?email=${formValue.email}`);
      
      if (res.data.length > 0) 
      {
        if (res.data[0].password == formValue.password) 
        {
          if (res.data[0].status == "Unblock") 
          {
          localStorage.setItem('username', res.data[0].name);
          localStorage.setItem('userid', res.data[0].id);

          toast.success('Login Success.');
          redirect('/');
          }
          else
          {
            toast.warning('Your Account has been Blocked!');
            return false;
          }
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

  // -----------------------------------------------------

  return (
    <div className="container-fluid" style={formBg}>
      <div style={centerForm} className="pt-5">
        <form>


        <div className="text-center mt-5 pt-5">
          <h1 className="text-dark"> Login  </h1>
        </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Email </label>
            <div className="col-sm-12">
              <input type="email" name="email" onChange={onChange} className="form-control" placeholder="Enter Email here..." />
            </div>
          </div>

          <div className="row pt-2">
            <label className=" col-sm-12 col-form-label text-dark"> Password </label>
            <div className="col-sm-12">
              <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Enter Password here..." />
            </div>
          </div>

          <div className="text-center mt-5" >
            <Link to='/' onClick={onsubmit} className="btn btn-primary" > Login </Link>
          </div>

          <div className="pt-5 text-center text-dark">
            New to this Store ? <br />
            Create your Account <Link to='/Signup' className="text-light pt-0 border-top border-bottom border-danger p-1"> Signup </Link>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Login;
