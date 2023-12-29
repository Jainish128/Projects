import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import axios from "axios";
import { toast } from "react-toastify";

function Profile() {

  // =============== Get Data of Logined User and Show Data in Profile Page -> START ===============
  useEffect(() => {
    fetch_ProfileData()
  });

  const [profileData, setProfileData] = useState({});

  const fetch_ProfileData = async(j) => {
    const res = await axios.get(`http://localhost:3000/adminuser/${localStorage.getItem('AP_ID')}`);
    setProfileData(res.data);
  };
  // =============== Get Data of Logined User and Show Data in Profile Page -> END ===============



  // =============== Edit Data of Logined User and Change Data in Profile Page -> START ===============

  const [formValue, setFormValue] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    admin_photo:"",
    gender:"",
    country:""
  });

  const [editID, setEditID] = useState("");

  const editData = async(id) => {
    const res = await axios.get(`http://localhost:3000/adminuser/${id}`);
    setFormValue(res.data);
    setEditID(id);
  };

  const Updating_User_values = (j) => {
    setFormValue({ ...formValue, [j.target.name]:j.target.value });
    console.log(formValue);
  };

  const Validation = () => {
    var result = true;
    if (formValue.name == "") 
    {
      toast.error('Username is required for Update Profile.');
      result = false;  
    }
    if (formValue.email == "") 
    {
      toast.error('Email is required for Update Profile.');
      result = false;  
    }
    if (formValue.mobile == "") 
    {
      toast.error('Mobile is required for Update Profile.');
      result = false;  
    }
    if (formValue.password == "") 
    {
      toast.error('Password is required for Update Profile.');
      result = false;  
    }
    if (formValue.admin_photo == "") 
    {
      toast.error('Profile Photo URL is required for Update Profile.');
      result = false;  
    }
    if (formValue.gender == "") 
    {
      toast.error('Gender is required for Update Profile.');
      result = false;  
    }
    if (formValue.country == "") 
    {
      toast.error('Country is required for Update Profile.');
      result = false;  
    }
    return result;
  };

  const onUpdate = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.patch(`http://localhost:3000/adminuser/${editID}`, formValue);
      if (resp.status == 200) 
      {
        toast.success('Profile Update Successfully.', { position: toast.POSITION.TOP_CENTER });
        setFormValue({ ...formValue, name:"", email:"", mobile:"", password:"", admin_photo:"", gender:"", country:"" });
        fetch_ProfileData();
      }
    }
  };


  // =============== Edit Data of Logined User and Change Data in Profile Page -> END ===============




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
              <h1 className="h3 mb-4 text-gray-800 text-center"> Profile </h1>
            </div>

            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-10 col-sm-12">
                {/* Profile -> START */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Edit Profile
                    </h6>
                  </div>
                  <div className="card-body">
                    
                    <div className="row">
                      {/* Profile Photo -> START */}
                      <div className="col-md-4 col-sm-12 hover-effect">
                        <div className="card border-left-dark shadow h-100 py-2">
                          <div className="card-body">
                            <img
                              src={profileData.admin_photo}
                              width={300}
                              height={300}
                              alt="Profile Photo"
                              style={{ padding: '10px 50px 10px 0' }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Profile Photo -> END */}

                      <div className="col-md-8 col-sm-12">
                        <div className="row">
                          {/* User Name -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-primary shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                      Name
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.name}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i className="fas fa-user fa-2x text-primary" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* User Name -> END */}

                          {/* Email -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-success shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                      Email
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.email}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i class="fa-solid fa-envelope fa-2x text-success" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* User Name -> END */}
                        </div>

                        <br />

                        <div className="row">
                          {/* Mobile Number -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-info shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                      Mobile Number
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.mobile}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i class="fa-solid fa-phone fa-2x text-info" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Mobile Number -> END */}

                          {/* Password -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-danger shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                      Password
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.password}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i class="fa-solid fa-eye fa-2x text-danger" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Password -> END */}
                        </div>

                        <br />

                        <div className="row">
                          {/* Gender -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-warning shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                      Gender
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.gender}
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i class="fa-solid fa-person-half-dress fa-2x text-secondary" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Gender -> END */}

                          {/* Country -> START */}
                          <div className="col-md-6 col-sm-12 hover-effect">
                            <div className="card border-left-secondary shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                                      Country
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {profileData.country  }
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <i class="fa-solid fa-earth-americas fa-2x text-secondary" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Country -> END */}
                        </div>
                      </div>
                    </div>

                    <br /><br />

                    {/* <div className="row"> */}
                    <div className="text-center">
                      <button className="btn btn-primary" data-toggle='modal' data-target='#myModal' onClick={()=> editData(profileData.id)}> Edit Profile </button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                {/* Profile -> START */}
              </div>

            {/* ------------------------------------------------------------------------- */}
              {/* The Modal -> START */}  
              <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title text-primary"> Edit Profile </h4>
                      <button type="button" className="btn-close btn" data-dismiss="modal" > 
                      <i class="fa-solid fa-xmark fa-x"></i> 
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <img src={profileData.admin_photo} width={200} height={200} alt="Admin Profile Photo" />
                          </div>
                          <div className="col-md-6">
                            <div className="form group mt-3">
                              <label className="text-dark"> Email : </label>
                              <input type="email" className="form-control" placeholder="Enter your Email" name="email" onChange={Updating_User_values} onKeyDown={onUpdate} value={formValue.email} />
                            </div>
                            <div className="form group mt-3">
                              <label className="text-dark"> Password : </label>
                              <input type="password" className="form-control" placeholder="Enter your Password" name="password" onChange={Updating_User_values} value={formValue.password} />
                            </div>
                          </div>
                            
                        </div>
                        <div className="row mt-2">
                          <div className="form group col-md-6">
                            <label className="text-dark"> Name : </label>
                            <input type="text" className="form-control" placeholder="Enter your Name" name="name" onChange={Updating_User_values} value={formValue.name} />
                          </div>
                          <div className="form group col-md-6">
                            <label className="text-dark"> Mobile : </label>
                            <input type="mobile" className="form-control" placeholder="Enter your Mobile Number" name="mobile" onChange={Updating_User_values} value={formValue.mobile} />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="form group col-md-6">
                            <label className="text-dark"> Gender : </label>
                            <input type="text" className="form-control" placeholder="Enter your Gender" name="gender" onChange={Updating_User_values} value={formValue.gender} />
                          </div>
                          <div className="form group col-md-6">
                            <label className="text-dark"> Country : </label>
                            <input type="text" className="form-control" placeholder="Enter your Country" name="country" onChange={Updating_User_values} value={formValue.country} />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="form group col-md-12">
                            <label className="text-dark"> Name : </label>
                            <input type="url" className="form-control" placeholder="Enter your Profile Image URL" name="admin_photo" onChange={Updating_User_values} value={formValue.admin_photo} />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                       {/* <button type="button" className="btn btn-success" data-dismiss="modal" onClick={onUpdate}> Save </button> */}
                      <button type="button" className="btn btn-success" data-dismiss="modal"> Save </button>
                      <button type="button" className="btn btn-danger" data-dismiss="modal"> Close </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* The Modal -> End */}
            {/* ------------------------------------------------------------------------- */}


              <div className="col-md-1"></div>
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

export default Profile;
