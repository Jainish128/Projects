import React, { useState } from "react";
import "./CSS/ALL_CSS.css";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Products() {
  // -------------------- Add Products via Category (POST) to JSON-Server -> START --------------------

  var d = new Date();
  var created = `📅 ${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const [formValue, setFormValue] = useState({
    cat_name: "",
    product_title: "",
    product_name: "",
    product_img: "",
    product_desc: "",
    product_mrp: "",
    product_sell_price: "",
    product_stock_level: "",
  });

  const onChange = (j) => {
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      created_at:created,
      [j.target.name]:j.target.value
    });
    console.log(formValue);
  };

  const Validation = () => {
    var result = true;
    if (formValue.cat_name === "") {
      toast.error("Category name is required for Adding Products.");
      result = false;
    }
    if (formValue.product_title === "") {
      toast.error("Product Title is required for Adding Products.");
      result = false;
    }
    if (formValue.product_name === "") {
      toast.error("Product Name is required for Adding Products.");
      result = false;
    }
    if (formValue.product_img === "") {
      toast.error("Product Image URL is required for Adding Products.");
      result = false;
    }
    if (formValue.product_desc === "") {
      toast.error("Product Description is required for Adding Products.");
      result = false;
    }
    if (formValue.product_mrp === "") {
      toast.error("Product MRP is required for Adding Products.");
      result = false;
    }
    if (formValue.product_sell_price === "") {
      toast.error("Product Sell Price is required for Adding Products.");
      result = false;
    }
    if (formValue.product_stock_level === "") {
      toast.error("Product Stock Level is required for Adding Products.");
      result = false;
    }
    return result;
  };

  var category_Name = document.getElementById("category_Name");
  var stock_Level = document.getElementById("stock_Level");

  const reset_value = () => {
    setFormValue({
      ...formValue,
      cat_name: "",
      product_title: "",
      product_name: "",
      product_img: "",
      product_desc: "",
      product_mrp: "",
      product_sell_price: "",
      product_stock_level: ""
    });
    category_Name.value = "";
    stock_Level.value = "";
  };

  const onSubmit = async (p) => {
    p.preventDefault();
    if (Validation()) 
    {
      if (category_Name.value === "Shirt") 
      {
        const resp = await axios.post(`http://localhost:3000/shirts`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }

      else if (category_Name.value === "T-Shirt") 
      {
        const resp = await axios.post(`http://localhost:3000/t_shirts`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }

      else if (category_Name.value === "Pant") 
      {
        const resp = await axios.post(`http://localhost:3000/pants`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }

      else if (category_Name.value === "Ethnic Wear") 
      {
        const resp = await axios.post(`http://localhost:3000/ethnic`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }

      else if (category_Name.value === "Suit") 
      {
        const resp = await axios.post(`http://localhost:3000/suits`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }

      else if (category_Name.value === "Shoes") 
      {
        const resp = await axios.post(`http://localhost:3000/shoes`, formValue);
        if (resp.status === 201) {
          toast.success("Product Added Successfully.", {
            position: toast.POSITION.TOP_CENTER
          });
          reset_value();
        }
      }
    }
  };
  // -------------------- Add Products via Category (POST) to JSON-Server -> END --------------------

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
                Add Products
              </h1>

              {/* Add Products using Form -> START */}
              <form>
                <div className="row">

                  <div className="col-md-3 col-sm-12">
                    <div className="form-group">
                      <label className="text-gray-800"> Category Name : </label>
                      <select className="form-control" name="cat_name" onChange={onChange} value={formValue.cat_name} id="category_Name">
                        <option value="" disabled selected>
                          Select Product Category
                        </option>
                        <option value="Shirt"> Shirt </option>
                        <option value="T-Shirt"> T-Shirt </option>
                        <option value="Pant"> Pant </option>
                        <option value="Ethnic Wear"> Ethnic Wear </option>
                        <option value="Suit"> Suit </option>
                        <option value="Shoes"> Shoes </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-9 col-sm-12">
                    <label className="text-gray-800"> Product Title : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Product Title"
                      name="product_title"
                      onChange={onChange}
                      value={formValue.product_title}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <label className="text-gray-800"> Product Name : </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Product Name"
                      name="product_name"
                      onChange={onChange}
                      value={formValue.product_name}
                    />
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <label className="text-gray-800">Product Image URL :</label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter Product Image URL"
                      name="product_img"
                      onChange={onChange}
                      value={formValue.product_img}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12">
                    <label className="text-gray-800">
                      Product Description :
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter Product Description"
                      name="product_desc"
                      onChange={onChange}
                      value={formValue.product_desc}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4 col-sm-12">
                    <label className="text-gray-800"> Product MRP Price : </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Product MRP"
                      name="product_mrp"
                      onChange={onChange}
                      value={formValue.product_mrp}
                    />
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <label className="text-gray-800">
                      Product Discounted Price :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Product Discounted New Price"
                      name="product_sell_price"
                      onChange={onChange}
                      value={formValue.product_sell_price}
                    />
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <label className="text-gray-800">
                      Product Stock Level :
                    </label>
                    <select className="form-control" name="product_stock_level" onChange={onChange} id="stock_Level" >
                      <option value="" selected disabled>
                        Select Product Stock Level
                      </option>
                      <option value="In Stock"> In Stock </option>
                      <option value="Out of Stock"> Out of Stock </option>
                      <option value="Coming Soon"> Coming Soon </option>
                      <option value="Available Soon"> Available Soon </option>
                    </select>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button className="btn btn-primary" onClick={onSubmit}> Add Product </button>
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

export default Add_Products;
