import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
function Add_Products() {
// <<-------------<-<-<  >->->------------->>
// <<-------------<-<-< Create Empty Object of Input names usign useState hook. >->->------------->>
  const [formValue, setFormValue] = useState({
    cate_name:"",
    product_name:"",
    desc:"",
    price:"",
    discounted_price:"",
    img_url:""
    // status:"available"
  });
// <<-------------<-<-< create onChange Function for Target and Get Input Values >->->------------->>
  const onChange = (j) => {
    setFormValue({ ...formValue, id: new Date().getTime().toString(), [j.target.name]:j.target.value, });
    console.log(formValue);
  };
// <<-------------<-<-< Add Products Form Validation >->->------------->>
  function Validation() 
  {
    var result = true;
    // ---------------< Category Name Validation >---------------
    if (formValue.cate_name == "") 
    {
      toast.error('Please fill the Category Name for Add Product.');
      result = false;
    }  
    // ---------------< Product Name Validation >---------------
    if (formValue.product_name == "") 
    {
      toast.error('Please fill the Product Name for Add Product.');
      result = false;
    }  
    // ---------------< Product Description Validation >---------------
    if (formValue.desc == "") 
    {
      toast.error('Please fill the Product Description details for Add Product.');
      result = false;
    }  
    // ---------------< Product Price Validation >---------------
    if (formValue.price == "") 
    {
      toast.error('Please fill the Product Price for Add Product.');
      result = false;
    }  
    // ---------------< Product Discounted Price Validation >---------------
    if (formValue.discounted_price == "") 
    {
      toast.error('Please fill the Product Discounted Price for Add Product.');
      result = false;
    }  
    // ---------------< Product Image URL Validation >---------------
    if (formValue.img_url == "") 
    {
      toast.error('Please fill the Image URL for Add Product.');
      result = false;
    }  
    return result;
  }



// <<-------------<-<-< Create onSubmit function for formValue POST to Manage_Product & Show Product in webiste  >->->------------->>
  const onSubmit = async (p) => {
    p.preventDefault();
    if (Validation()) 
    {
      // Check it is Casual Products and then Add 
      if (formValue.cate_name == "Casual") 
      {
        const result = await axios.post(`http://localhost:3000/casual`, formValue);  

        if (result.status == 201) 
        {
          toast.success('Your Proudct has been Deploy Successfully.');
          setFormValue({ ...formValue, cate_name:"", product_name:"", desc:"", price:"", discounted_price:"", img_url:"" });  
        }
      }
      // Check it is Ethnic Products and then Add 
      else if (formValue.cate_name == "Ethnic") 
      {
        const result = await axios.post(`http://localhost:3000/ethnic`, formValue);  

        if (result.status == 201) 
        {
          toast.success('Your Proudct has been Deploy Successfully.');
          setFormValue({ ...formValue, cate_name:"", product_name:"", desc:"", price:"", discounted_price:"", img_url:"", status:"Available"  });  
        }
      }
      // Check it is Business Professional Products and then Add 
      else if (formValue.cate_name == "Business Professional") 
      {
        const result = await axios.post(`http://localhost:3000/businessprofessional`, formValue);  

        if (result.status == 201) 
        {
          toast.success('Your Proudct has been Deploy Successfully.');
          setFormValue({ ...formValue, cate_name:"", product_name:"", desc:"", price:"", discounted_price:"", img_url:"", status:"Available"  });  
        }
      }

      else
      {
        toast.warning('Please Check the Category Name Correctly!');
        return false;
      }

    }
  }



  
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Prodcuts </h1>
              <h1 className="page-subhead-line">
                Add Prodcuts in your Website and Manage Products page into Admin Panel using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-success">
                <div className="panel-heading"> Add Products Form</div>
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
                      />
                    </div>

                  

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-success" onClick={onSubmit}>
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Add_Products;
