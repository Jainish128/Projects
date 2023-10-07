import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  var centerForm = { width: "30%", height: "850px", margin: "0% 35%" };
  // var formBg = { backgroundColor: "#dcdde1" };
  var formBg = { background: `linear-gradient(to top, #00b894, #00cec9, #0984e3 )` };
  // var textCenter = { tetxAlign: "center" };

  // -------------------- Insert Data --------------------

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    country: "",
  });

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formValue);
  };

  function validation() {
    var result = true;

    // ---------------< Name Validation >---------------
    if (formValue.name == "") {
      toast.error("Name is Required !");
      result = false;
    }
    // ---------------< Email Validation >---------------
    if (formValue.email == "") {
      toast.error("Email is Required !");
      result = false;
    }
    // ---------------< Password Validation >---------------
    if (formValue.password == "") {
      toast.error("Password is Required !");
      result = false;
    }
    // ----------< Mobile Number Validation >----------
    if (formValue.mobile == "") {
      toast.error("Mobile Number is is Required !");
      result = false;
    }
    // ---------------< Gender Validation >---------------
    if (formValue.gender == "") {
      toast.error("Please select ypur Gender.");
      result = false;
    }
    // ---------------< Country Validation >---------------
    if (formValue.country == "") {
      toast.error("Country is Required !");
      result = false;
    } 
    return result;
  }

  const redirect = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/user`, formValue);

      if (res.status == 201) 
      {
        toast.success("Your Account has been Created Successfully.");
        setFormValue({
          formValue,
          name: "",
          email: "",
          password: "",
          mobile: "",
          gender: "",
          country: "",
          status: "Unblock"
        });
        redirect('/Login');
      }
    }
  };

  // -----------------------------------------------------

  return (
    <div className="container-fluid" style={formBg}>
      <div style={centerForm} className="pt-5">
        <form>
          <div className="text-center">
            <h1 className="text-dark pt-5"> Signup Form </h1>
          </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Name </label>
            <div className="col-sm-12">
              <input
                type="text"
                name="name"
                onChange={onChange}
                className="form-control"
                placeholder="Enter your Name here..."
              />
            </div>
          </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Email </label>
            <div className="col-sm-12">
              <input
                type="email"
                name="email"
                onChange={onChange}
                className="form-control"
                placeholder="Enter Email here..."
              />
            </div>
          </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Password </label>
            <div className="col-sm-12">
              <input
                type="password"
                name="password"
                onChange={onChange}
                className="form-control"
                placeholder="Enter Password here..."
              />
            </div>
          </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Mobile Number </label>
            <div className="col-sm-12">
              <input
                type="number"
                name="mobile"
                onChange={onChange}
                className="form-control"
                placeholder="Enter Mobile Number here..."
              />
            </div>
          </div>

          <div className="row">
            <label className=" col-sm-12 col-form-label text-dark"> Gender : </label>
            <div className="col-sm-12">
              <div>
                <div className="form-check">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={onChange}
                    id="flexRadioDefault1"
                    value="Male"
                  />
                  <label
                    className="form-check-label text-dark"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    onChange={onChange}
                    id="flexRadioDefault2"
                    value="Female"
                  />
                  <label
                    className="form-check-label text-dark"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <label className=" col-sm-4 col-form-label text-dark"> Country : </label>
            <div className="col-sm-12">
              <select
                name="country"
                onChange={onChange}
                class="form-select form-select-sm col-sm-12 border-0 pt-1 pb-1 rounded"
                aria-label="Small select example"
              >
                <option disabled selected>
                  Select Country
                </option>
                <option> India </option>
                <option> Switzerland </option>
                <option> Dubai </option>
                <option> Canada </option>
                <option> USA </option>
              </select>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary" onClick={onsubmit}>
              Signup
            </a>
          </div>

          <div className="pt-4 text-center text-dark">
            If You Have Account
            <Link to="/Login" className="border-top border-bottom border-danger pb-1 ms-2 text-light">
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Signup;
