import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { toast } from "react-toastify";

function Profile() {

// For CSS Styling 
  var tdSpace = { width: "130px" };
  var jemSpace = { width: "25px" };

  // ---------- Fetch Data from Admin Panel to Profile Page ----------
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState({});

  const fetch = async () => {

    const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
  // console.log(res.data);
    setData(res.data);
  };

  const [formValue, setFormValue] = useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    gender:"",
    country:""
  });

  const [editID, setEditID] = useState("");

  const editData = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    setFormValue(res.data);
    setEditID(id);
  };

  const onchange = (e) => {
    setFormValue({ ...formValue, [e.target.name]:e.target.value });
    console.log(formValue);
  }

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

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) 
    {
      const res = await axios.patch(`http://localhost:3000/user/${editID}`, formValue);  
      if (res.status == 200) 
      {
        toast.success('Profile Update Successfully.');
        setFormValue({ ...formValue, name:"", email:"", password:"", mobile:"", gender:"", country:"" });
        fetch();  
      }
    }
  };



  return (
    <div>
      <div className="container-xl px-5 mb-5">
        <hr className="mt-0 mb-4" />
        <div className="row mt-5">
          <div className="col-xl-4 mt-5">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header"> Profile Picture </div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt
                />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 3 MB
                </div>
                {/* Profile picture upload button*/}
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-8 mt-5">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>

                  <table>
                    <tr>
                      <td> Name </td> 
                      <th className="jeme"> : </th>
                      <td> {data.name} </td>
                    </tr> 
                    <tr>
                      <td> Email </td>
                      <th className="jeme"> : </th>
                      <td> {data.email} </td>
                    </tr> 
                    <tr>
                      <td> Password </td>
                      <th className="jeme"> : </th>
                      <td> {data.password} </td>
                    </tr> 
                    <tr>
                      <td> Mobile No. </td>
                      <th className="jeme"> : </th>
                      <td> {data.mobile} </td>
                    </tr> 
                    <tr>
                      <td> Gender </td>
                      <th className="jeme"> : </th>
                      <td> {data.gender} </td>
                    </tr> 
                    <tr>
                      <td> Country </td>
                      <th className="jeme"> : </th>
                      <td> {data.country} </td>
                    </tr> 
                  </table>

                  {/* <button className="btn btn-primary" type="button">
                    Edit Profile
                  </button> */}

                  <div className="btn-box text-center">
                    <a href="javascript:void(0)" className="btn btn-primary" onClick={()=>editData(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >
                      Edit Profile
                    </a>
                  </div>
                </form>


              </div>
{/* -------------------------------------- Modal box for Profile Update -> START ----------------------------------------- */}

                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Edit Profile </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>

                        <div className="modal-body">
                          <form>

                            <div className="mb-2">
                              <label htmlFor="recipient-name"  className="col-form-label"> Name : </label>
                              <input type="text" name="name" className="form-control" id="recipient-name" value={formValue.name} onChange={onchange} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="recipient-name" className="col-form-label"> Email : </label>
                              <input type="email" name="email" className="form-control" id="recipient-name" value={formValue.email} onChange={onchange} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="recipient-name" className="col-form-label"> Password : </label>
                              <input type="password" name="password" className="form-control" id="recipient-name" value={formValue.password} onChange={onchange} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="recipient-name" className="col-form-label"> Mobile Number : </label>
                              <input type="number" name="mobile" className="form-control" id="recipient-name" value={formValue.mobile} onChange={onchange} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="recipient-name" className="col-form-label"> Gender : </label>
                              <input type="text" name="gender" className="form-control" id="recipient-name" value={formValue.gender} onChange={onchange} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="recipient-name" className="col-form-label"> Country : </label>
                              <input type="text" name="country" className="form-control" id="recipient-name" value={formValue.country} onChange={onchange} />
                            </div>

                          </form>
                        </div>

                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                          <button type="button" className="btn btn-success" onClick={onsubmit} data-bs-dismiss="modal" > Save </button>
                        </div>

                      </div>
                    </div>
                  </div>

{/* -------------------------------------- Modal box for Profile Update -> END ----------------------------------------- */}

               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
