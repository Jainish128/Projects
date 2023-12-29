import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


function Profile() {

  // =============== Get Logined User Data and Show in a Layout -> START ===============
  useEffect(() => {
    loginedUser();
  });

  const [user, setUser] = useState({});

  const loginedUser = async() => {
    const resp = await axios.get(`http://localhost:3000/user/${localStorage.getItem('ID')}`);
    setUser(resp.data)
  };
  // =============== Get Logined User Data and Show in a Layout -> END ===============
  
  

  // =============== Edit & Update Logined User Data -> START ===============
  const d = new Date();
  const updated = `📅${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    profile_img: "",
    gender: "",
    country: "",
  });

  const [editID, setEditID] = useState("");

  const editData = async(id) => {
    const resp = await axios.get(`http://localhost:3000/user/${id}`)
    setFormValue(resp.data);
    setEditID(id);
  };

  const inputing_value = (j) => {
    setFormValue({ ...formValue, updated_at:updated, [j.target.name]:j.target.value });
    console.log(formValue);
  }; 

  const Validation = () => {
    var result = true;
    if (formValue.name == "") 
    {
      toast.error('Username is required!');
      result = false;  
    }
    if (formValue.email == "") 
    {
      toast.error('Email id is required!');
      result = false;  
    }
    if (formValue.mobile == "") 
    {
      toast.error('Mobile number is required!');
      result = false;  
    }
    if (formValue.password == "") 
    {
      toast.error('Password is required!');
      result = false;  
    }
    if (formValue.profile_img == "") 
    {
      toast.error('Profile image URL is required!');
      result = false;  
    }
    if (formValue.gender == "") 
    {
      toast.error('Gender is required!');
      result = false;  
    }
    if (formValue.country == "") 
    {
      toast.error('Country is required!');
      result = false;  
    }
    return result;
  };

  const onUpdate = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.patch(`http://localhost:3000/user/${localStorage.getItem('ID')}`, formValue);
      
      if (resp.status == 200) 
      {
        toast.success('Your Porfile details Updated Successfully.', { position: toast.POSITION.TOP_CENTER });
        setFormValue({ ...formValue, name: "", email: "", mobile: "", password: "", profile_img: "", gender: "", country: "", });
      }
    }
  };
  // =============== Edit & Update Logined User Data -> END ===============






  return (
    <div>
      <div className="container mt-5 mb-5">
        
        <div className="row">
          <div className="col-md-4" style={{ backgroundColor: "#60a3bc " }}>
            <img src={user.profile_img} width={350} height={350} style={{ padding: "25px" }} alt="Profile Image" />
          </div>
          <div className="col-md-4 profile-info py-4 px-3" style={{ backgroundColor: "#3c6382" }}>
              <h3> Name : </h3>
              <h2> <span> {user.name} </span> </h2>
              <hr />

              <h3> Email : </h3>
              <h2> <span> {user.email} </span> </h2>
              <hr />

              <h3> Mobile Number : </h3>
              <h2> <span> {user.mobile} </span> </h2>
          </div>
          <div className="col-md-4 profile-info py-4 px-3" style={{ backgroundColor: "#0a3d62" }}>
              <h3> Password : </h3>
              <h2> <span> {user.password} </span> </h2>
              <hr />

              <h3> Gender : </h3>
              <h2> <span> {user.gender} </span> </h2>
              <hr />

              <h3> Country : </h3>
              <h2> <span> {user.country} </span> </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <button className='btn' data-toggle='modal' data-target='#myModal' onClick={()=> editData(user.id)} style={{ background: "#3c6382" }}> Edit Profile </button>
          </div>
        </div>

        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h2 className="modal-title"> EDIT PROFILE </h2>
                <button type="button" className="btn bg-white" data-dismiss="modal">
                  <i className="fa-solid fa-xmark text-dark"></i>
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Name :  </label>
                      <input type="text" className="form-control" placeholder='Enter your name' name='name' onChange={inputing_value} value={formValue.name} />
                    </div>
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Email :  </label>
                      <input type="email" className="form-control" placeholder='Enter your email' name='email' onChange={inputing_value} value={formValue.email} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Mobile Number :  </label>
                      <input type="number" className="form-control" placeholder='Enter your mobile number' name='mobile' onChange={inputing_value} value={formValue.mobile} />
                    </div>
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Password :  </label>
                      <input type="password" className="form-control" placeholder='Enter your password' name='password' onChange={inputing_value} value={formValue.password} />
                    </div>
                  </div>
                 
                  <div className="form-group">
                    <label className='text-dark'> Profile Image URL :  </label>
                    <input type="url" className="form-control" placeholder='Enter your Profile Image URL' name='profile_img' onChange={inputing_value} value={formValue.profile_img} />
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Gender :  </label>
                      <input type="text" className="form-control" placeholder='Enter your gender' name='gender' onChange={inputing_value} value={formValue.gender} />
                    </div>
                    <div className="form-group col-md-6">
                      <label className='text-dark'> Country :  </label>
                      <input type="text" className="form-control" placeholder='Enter your country' name='country' onChange={inputing_value} value={formValue.country} />
                    </div>
                  </div>
                  
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={onUpdate}>Save</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Profile