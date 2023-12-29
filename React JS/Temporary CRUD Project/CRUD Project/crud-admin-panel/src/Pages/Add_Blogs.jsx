import React, { useState } from 'react';
import './CSS/ALL_CSS.css';
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import { toast } from 'react-toastify';
import axios from 'axios';

function Add_Blogs() {



  // -------------------- Add Blogs (POST) to JSON-Server -> START --------------------
  var date = new Date().getDate();
  var month = new Date().getMonth()+1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  var created = `📅${date}/${month}/${year} ⌚${hours}:${minutes}:${seconds}`;

  const [formValue, setFormValue] = useState({
    blog_name: "",
    blog_img: "",
    blog_desc: ""
  });

  const onChange = (j) => {
    setFormValue({ ...formValue, id:new Date().getTime().toString(), created_at:created, [j.target.name]:j.target.value });
    console.log(formValue);
  };

  const Validation = () => {
    var result = true;
    if (formValue.blog_name == "") 
    {
      toast.error('Blog name is required for Adding Blogs.');
      result = false;  
    }
    if (formValue.blog_img == "") 
    {
      toast.error('Blog Image URL is required for Adding Blogs.');
      result = false;  
    }
    if (formValue.blog_desc == "") 
    {
      toast.error('Blog Description is required for Adding Blogs.');
      result = false;  
    }
    return result;
  };

  const onSubmit = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.post(`http://localhost:3000/blogs`, formValue);
      if (resp.status == 201) 
      {
        toast.success('Blog Added Successfully.', {
          position: toast.POSITION.TOP_CENTER
        });
        setFormValue({ ...formValue, blog_name:"", blog_img:"", blog_desc:"" });
      }  
    }
  };
  // -------------------- Add Blogs (POST) to JSON-Server -> END --------------------



  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">

        <Header/>

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar/>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */} 
              <h1 className="h3 mb-4 text-gray-800 text-center border border-primary py-1 rounded"> Add Blogs </h1>
              
              {/* Add Products using Form -> START */}
              <form>

                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <label className='text-gray-800'> Blog Name :  </label>
                    <input type="text" className='form-control' placeholder='Enter Blog Name' name='blog_name' onChange={onChange} value={formValue.blog_name} />
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <label className='text-gray-800'> Blog Image URL :  </label>
                    <input type="url" className='form-control'  placeholder='Enter Blog Image URL' name='blog_img' onChange={onChange} value={formValue.blog_img} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12">
                    <label className='text-gray-800'> Blog Description :  </label>
                    <textarea className='form-control' rows="5" placeholder='Enter Blog Description' name='blog_desc' onChange={onChange} value={formValue.blog_desc} />
                  </div>       
                </div>

                <div className="text-center mt-5">
                  <button className='btn btn-primary' onClick={onSubmit}> Add Blog </button>
                </div>

              </form>
              {/* Add Products using Form -> END */}

              

            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
         
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </div>
  )
}

export default Add_Blogs