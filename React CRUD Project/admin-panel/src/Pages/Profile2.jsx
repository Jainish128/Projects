import React, { useEffect, useState } from "react";
import './Profile.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile2() {

    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [Data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/adminuser/${localStorage.getItem('userid')}`);
        // console.log(result.data);
        setData(res.data);
    }

    const pwd = document.querySelector('.pwd');
    const pwd_check = document.querySelector('.pwd_check');

    const pwd_show = () => {
        if (pwd_check.checked) 
        {
            pwd.type = "text";
        }
        else 
        {
            pwd.type = "password";
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
                                    <label htmlFor="recipient-name"> Name </label>
                                    <input type="text" value={Data.name} className="form-control profile_input" id="recipient-name" readOnly />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="recipient-name"> Email </label>
                                    <input type="email" value={Data.email} className="form-control profile_input" id="recipient-name" readOnly />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="recipient-name"> Mobile Number  </label>
                                    <input type="number" value={Data.mobile} className="form-control profile_input" id="recipient-name" readOnly />
                                </div>

                                <div className="form-group checkbox_container">

                                    <label htmlFor="recipient-name"> Password </label>
                                    
                                    <input type="password" value={Data.password} className="form-control profile_input pwd" id="recipient-name" readOnly  />

                                    <div className="show_pwd">
                                        <input type="checkbox" className="pwd_check" onClick={pwd_show} />
                                        Show Password
                                    </div>

                                </div>

                                <br />
                                <div className="text-center">

                                    <button className="btn btn-info" onClick={()=>{redirect('/Edit_Profile/' + Data.id)}}> 
                                        Edit Profile
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
  );
}

export default Profile2;
