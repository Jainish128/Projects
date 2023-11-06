import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Products() {
  const [formValue, setFormValue] = useState({
    cate_name: "",
    product_name: "",
    desc: "",
    price: "",
    discounted_price: "",
    img_url: "",
    created_at: "",
  });

  const getCurrentDateTime = () => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
    return `📅 ${formattedDate} ⌚ ${formattedTime}`;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      created_at: getCurrentDateTime(),
      [name]: value,
    });
  };

  const validateForm = () => {
    let result = true;
    const { cate_name, product_name, desc, price, discounted_price, img_url } =
      formValue;

    if (
      !cate_name ||
      !product_name ||
      !desc ||
      !price ||
      !discounted_price ||
      !img_url
    ) {
      toast.error("Please fill in all the required fields.");
      result = false;
    }

    return result;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          `http://localhost:3000/${formValue.cate_name.toLowerCase()}`,
          formValue
        );

        if (response.status === 201) {
          toast.success("Your product has been added successfully.");
          setFormValue({
            ...formValue,
            cate_name: "",
            product_name: "",
            desc: "",
            price: "",
            discounted_price: "",
            img_url: "",
            status: "Available",
          });
        } else {
          toast.warning("Failed to add the product.");
        }
      } catch (error) {
        toast.error("An error occurred while adding the product.");
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Prodcuts </h1>
              <h1 className="page-subhead-line">
                Add Prodcuts in your Website and Manage Products page into Admin
                Panel using this Form.
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
                    {/* <div className="form-group">
                      <label> Category Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Category Name here..."
                        name="cate_name"
                        onChange={onChange}
                      />
                    </div> */}

                    <div className="form-group">
                      <label> Category Name </label>
                      <select
                        id=""
                        className="form-control"
                        name="cate_name"
                        onChange={onChange}
                      >
                        <option disabled selected>
                          {" "}
                          Select Category{" "}
                        </option>
                        <option value="Casual"> Casual Outfit </option>
                        <option value="Ethnic"> Ethnic Outfit </option>
                        <option value="Business Professional">
                          {" "}
                          Business Professional Outfit{" "}
                        </option>
                      </select>
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
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={onSubmit}
                      >
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
