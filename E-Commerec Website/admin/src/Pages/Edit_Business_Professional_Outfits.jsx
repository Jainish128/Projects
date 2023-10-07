import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Edit_Business_Professional_Outfits() {

// --------------------------------------------------
const redirect = useNavigate();
// --------------------------------------------------

// --------------------------------------------------
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var updated = " 📅 " + date + "/" + month + "/" + year + " ⌚ " + hours + ":" + minutes;
// --------------------------------------------------



// --------------------------------------------------
useEffect(() => {
  editData();
}, []);
// --------------------------------------------------

// --------------------------------------------------
const [formValue, setFormValue] = useState({
  cate_name: "",
  product_name: "",
  desc: "",
  price: "",
  discounted_price: "",
  img_url: "",
  updated_at:""
  // status:"available"
});
// --------------------------------------------------

// --------------------------------------------------
const { id } = useParams();
const editData = async () => {
  const res = await axios.get(`http://localhost:3000/businessprofessional/${id}`);
    // console.log(res.data);
    setFormValue(res.data);
  };
// --------------------------------------------------

// --------------------------------------------------
const onChange = (e) => {
  setFormValue({ ...formValue,updated_at:updated, [e.target.name]: e.target.value });
  console.log(formValue);
};
// --------------------------------------------------

function validation() {
  var result = true;
  
  // ---------------< Name Validation >---------------
  if (formValue.cate_name == "") {
    toast.error("Category Name is Required !");
    result = false;
  }
  // ---------------< Email Validation >---------------
  if (formValue.product_name == "") {
      toast.error("Product Name is Required !");
      result = false;
    }
    // ---------------< Password Validation >---------------
    if (formValue.desc == "") {
      toast.error("Product Description is Required !");
      result = false;
    }
    // ----------< Mobile Number Validation >----------
    if (formValue.price == "") {
      toast.error("Price is is Required !");
      result = false;
    }
    // ---------------< Gender Validation >---------------
    if (formValue.discounted_price == "") {
      toast.error("Discounted Price is Required..");
      result = false;
    }
    // ---------------< Country Validation >---------------
    if (formValue.img_url == "") {
      toast.error("Product Image URL is Required !");
      result = false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/businessprofessional/${id}`,
        formValue
      );

      if (res.status == 200) {
        setFormValue({
          ...formValue,
          cate_name: "",
          product_name: "",
          desc: "",
          price: "",
          discounted_price: "",
          img_url: "",
        });
        toast.success("Products Updated Successfully.");
        return redirect("/Manage_Business_Professional_Outfits");
      }
    }
  };

  return (
    <div>
      <div>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-head-line"> Edit Casual Outfits Products Details </h1>
                <h1 className="page-subhead-line">
                Edit Casual Outfits Products Details in your Website using this Form.
                </h1>
              </div>
            </div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="panel panel-success">
                  <div className="panel-heading"> Edit Casual Outfits Product Form</div>
                  <div className="panel-body">
                    <form role="form">
                      <div className="form-group">
                        <label> Category Name </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter the Category Name here..."
                          name="cate_name"
                          onChange={onChange}
                          value={formValue.cate_name}
                        />
                      </div>

                      <div className="form-group">
                        <label> Product Name </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter the Product Name here..."
                          name="product_name"
                          onChange={onChange}
                          value={formValue.product_name}
                        />
                      </div>

                      <div className="form-group">
                        <label> Product Description </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter the Product Description here..."
                          name="desc"
                          onChange={onChange}
                          value={formValue.desc}
                        />
                      </div>

                      <div className="form-group">
                        <label> Price</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Enter the Main Price of Product ( ₹ )"
                          name="price"
                          onChange={onChange}
                          value={formValue.price}
                        />
                      </div>

                      <div className="form-group">
                        <label> Discounted Price</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Enter the Discounted Price of Product ( ₹ )"
                          name="discounted_price"
                          onChange={onChange}
                          value={formValue.discounted_price}
                        />
                      </div>

                      <div className="form-group">
                        <label> Product Image URL </label>
                        <input
                          className="form-control"
                          type="url"
                          placeholder="Enter the Product Image URL"
                          name="img_url"
                          onChange={onChange}
                          value={formValue.img_url}
                        />
                      </div>

                      <hr />
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={onsubmit}
                        >
                          Save Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit_Business_Professional_Outfits;
