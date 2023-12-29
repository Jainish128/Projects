import React, { useState } from "react";
import "./CSS/ALL_CSS.css";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Category() {



  // -------------------- Add Category (POST) to JSON-Server -> START --------------------
  var date = new Date().getDate();
  var month = new Date().getMonth()+1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  var created = `📅${date}/${month}/${year} ⌚${hours}:${minutes}:${seconds}`;

  const [formValue, setFormValue] = useState({
    cate_name: "",
    cate_img: "",
    cate_desc: "",
  });

  const onChange = (j) => {
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      created_at:created,
      [j.target.name]: j.target.value,
    });
    console.log(formValue);
  };


  const Validation = () => {
    var result = true;
    if (formValue.cate_name == "") 
    {
      toast.error('Category name is required for Add Category.');  
      result = false;
    }
    if (formValue.cate_img == "") 
    {
      toast.error('Category Image URL is required for Add Category.');  
      result = false;
    }
    if (formValue.cate_desc == "") 
    {
      toast.error('Category Description is required for Add Category.');  
      result = false;
    }
    return result;
  };

  const onSubmit = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.post(`http://localhost:3000/categories`, formValue);
      
      if (resp.status == 201) 
      {
        // toast.success('Category Added Successfully.');  
        toast.success('Category Added Successfully.', {
          position: toast.POSITION.TOP_CENTER
        });  
        setFormValue({ ...formValue, cate_name:"", cate_img:"", cate_desc:"" });
      }
    }
  };
  // -------------------- Add Category (POST) to JSON-Server -> END --------------------



  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        <Header />

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar />
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-4 text-gray-800 text-center border border-primary py-1 rounded">
                Add Category
              </h1>

              {/* Add Products using Form -> START */}
              <form>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <label className="text-gray-800"> Category Name : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Category Name"
                      name="cate_name"
                      onChange={onChange}
                      value={formValue.cate_name}
                    />
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <label className="text-gray-800">
                      Category Image URL :
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter Category Image URL"
                      name="cate_img"
                      onChange={onChange}
                      value={formValue.cate_img}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12">
                    <label className="text-gray-800">
                      Category Description :
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter Category Description"
                      name="cate_desc"
                      onChange={onChange}
                      value={formValue.cate_desc}
                    />
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button className="btn btn-primary" onClick={onSubmit}> Add Category </button>
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
  );
}

export default Add_Category;
