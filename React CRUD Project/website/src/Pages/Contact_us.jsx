import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Contact_us() {

    var centerForm = { width: "30%", height: "100vh", margin: "0% 35%" };
    // var formBg = { backgroundColor: "#dcdde1" };
    // var formBg = { background: `radial-gradient( #55efc4, #81ecec, #74b9ff )` };
    // var formBg = { background: `linear-gradient(to right, #00b894, #00cec9, #0984e3 )` };
    // var formBg = { background: `linear-gradient(to right, #808e9b, #485460, #485460, #808e9b )` };
    var formBg = { background: `url("https://img.freepik.com/premium-photo/cyber-polygon-background-cybernetic-network_483949-8096.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" };
    // var textCenter = { tetxAlign: "center" };

// -----------------------------------------------------------------------------

  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    comment: ""
  });

  const onChange = (e) => {
    setFormValue({...formValue, id:new Date().getTime().toString(), [e.target.name]:e.target.value })
    console.log(formValue);
  } 

  function validation() 
  {
    var result = true;
    if (formValue.username == "") 
    {
      toast.error('Name Field is Required !');
      result = false;
    }  
    if (formValue.email == "") 
    {
      toast.error('Email Field is Required !');
      result = false;
    } 
    if (formValue.comment == "") 
    {
      toast.error('Comment Field is Required !');
      result = false;
    } 
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation())
    {
      const res = await axios.post(`http://localhost:3000/comments`, formValue);
      if (res.status == 201) 
      {
        toast.success('Comment Send Successfully !');
        setFormValue({formValue,username:"",email:"",comment:"" })  
      }
    }
  }

// -----------------------------------------------------------------------------
    

  return (
  
    <div className="container-fluid" style={formBg}>
    <div style={centerForm} className="pt-5">
      <form action='' >

      <div className="text-center mt-5 pt-5">
        <h1 className='t-bold text-light'> Contact Us  </h1>
      </div>

      <div className="row">
          <label className=" col-sm-12 col-form-label"> Name </label>
          <div className="col-sm-12">
            <input type="text" value={formValue.name} name='username' onChange={onChange} className="form-control" placeholder="Enter Name here..." />
          </div>
        </div>

        <div className="row">
          <label className=" col-sm-12 col-form-label"> Email </label>
          <div className="col-sm-12">
            <input type="email" value={formValue.email} name='email' onChange={onChange} className="form-control" placeholder="Enter Email here..." />
          </div>
        </div>

        <div className="row pt-2">
          <label className=" col-sm-12 col-form-label"> Comment </label>
          <div className="col-sm-12">
            <textarea  cols="30" rows="4" value={formValue.comment} name='comment' onChange={onChange} className='form-control' placeholder='Enter your Comment here...'></textarea>
          </div>
        </div>

        <div className="text-center mt-5" >
          <Link to='/' className="btn btn-primary" onClick={onsubmit} > Send Message </Link>
        </div>
      </form>

    </div>    
  </div>

  )
}

export default Contact_us