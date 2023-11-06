import React, { useEffect, useState } from "react";
import './Profile.css'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function Edit_Profile() {

    const redirect = useNavigate();

    useEffect(() => {
        editData();
    }, []);

    const [formValue, setFormValue] = useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    });

    const {id} = useParams()
    const editData = async () => {
        const res = await axios.get(`http://localhost:3000/adminuser/${id}`);
        setFormValue(res.data);
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
        // ----------< Mobile Number Validation >----------
        if (formValue.mobile == "") {
          toast.error("Mobile Number is is Required !");
          result = false;
        }
        // ---------------< Password Validation >---------------
        if (formValue.password == "") {
          toast.error("Password is Required !");
          result = false;
        }
    
        return result;
      }

      const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) 
        {
          const res = await axios.patch(`http://localhost:3000/adminuser/${id}`, formValue);  
          if (res.status == 200) 
          {
              setFormValue({ ...formValue, name:"", email:"", mobile:"", password:"" });
            toast.success('Profile Update Successfully.');
            return redirect('/Profile2');
          }
        }
      };




  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
            
            <div className="row">
                <div className="col-md-12 col-xl-12 col-sm-12">
                    
                    <div className="panel panel-info">
                        <div className="panel-heading"> Profile </div>
                        <div className="panel-body">
                            <form action="">

                                <div className="form-group">
                                    <label htmlFor=""> Name </label>
                                    <input type="text" name="name" value={formValue.name} onChange={onchange} className="form-control profile_input" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor=""> Email </label>
                                    <input type="email" name="email" value={formValue.email} onChange={onchange} className="form-control profile_input" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor=""> Mobile Number  </label>
                                    <input type="number" name="mobile" value={formValue.mobile} onChange={onchange} className="form-control profile_input" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor=""> Password </label>
                                    <input type="text" name="password" value={formValue.password} onChange={onchange} className="form-control profile_input"  />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <button className="btn btn-info" onClick={onsubmit}>
                                        Save Profile
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>        


                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Edit_Profile