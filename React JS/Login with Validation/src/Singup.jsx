import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Singup() {


    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        mobile:"",
        house_flat_no: "",
        society_flat_name: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
        gender: "",
        password: "",
        // languages: ""
    });

    const changing_values = (j) => {
        setFormValue({ ...formValue, id:new Date().getTime().toString(), [j.target.name]:j.target.value });
    };


    // const [isChecked, setIsChecked] = useState({
    //     english: false,
    //     hindi: false,
    //     gujarati: false
    // });

    // const handleCheckboxChange = (checkboxName) => {
    //     // const { checked } = e.target;
    //     const updateValues = { ...isChecked, [checkboxName]: !isChecked[checkboxName] };
    //     if (!updateValues[checkboxName]) 
    //     {
    //         toast.error('Please select any one language which you know.');
    //     }

    //     setIsChecked(updateValues);
    // };


    const Validation = () => {

        var result = true;

        // --------------- User Name Validation ---------------
        if (formValue.name === "" || formValue.name === null) 
        {
            toast.error('Username is required for Signup !');
            result = false;    
        }
        else if (!formValue.name.match(/^[a-zA-z ]+$/)) 
        {
            toast.error('Please enter Username in Alphabets only.');
            result = false;
        }
        else
        {
            result = false;
        }

        // --------------- User Email Validation ---------------
        if (formValue.email === "" || formValue.email === null) 
        {
            toast.error('Email is required for Signup !');
            result = false;    
        }
        // else if (!formValue.email.match(/^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,4}$/)) 
        else if (!formValue.email.match(/^([a-z0-9._])+@(([a-z0-9])+\.)+([a-z]{2,4})$/)) 
        {
            toast.error('Please enter valid Email ID.');
            result = false;
        }
        else
        {
            result = false;
        }

        // --------------- User Mobile Number Validation ---------------
        if (formValue.mobile === "" || formValue.mobile === null) 
        {
            toast.error('Mobile Number is required for Signup !');
            result = false;    
        }
        else if (!formValue.mobile.match(/^[0-9]{8,10}$/)) 
        {
            toast.error('Please enter Mobile Number in 10 Digits.');
            result = false;
        } 
        else
        {
            result = false;
        }

        // --------------- User House/Flat No. Validation ---------------
        if (formValue.house_flat_no === "" || formValue.house_flat_no === null) 
        {
            toast.error('House/Flat No. is required for Signup !');
            result = false;    
        }
        else if (!formValue.house_flat_no.match(/^[a-zA-Z0-9/ -]{1,10}$/)) 
        {
            toast.error('Please enter correctly House/Flat Number.');
            result = false;
        }
        else
        {
            result = false;
        }
        
        // --------------- User Society/Flat Name Validation ---------------
        if (formValue.society_flat_name === "" || formValue.society_flat_name === null) 
        {
            toast.error('Society/Flat Name is required for Signup !');
            result = false;    
        }
        else if (!formValue.society_flat_name.match(/^[a-zA-Z0-9/ -]{1,}$/)) 
        {
            toast.error('Please enter Society/Flat name correctly.');
            result = false;
        }
        else
        {
            result = false;
        }
         
        // --------------- User Area Name Validation ---------------
        if (formValue.area === "" || formValue.area === null) 
        {
            toast.error('Area is required for Signup !');
            result = false;    
        }
        else if (!formValue.area.match(/^[a-zA-Z0-9 /-]{1,50}$/)) 
        {
            toast.error('Please enter Area name correctly.');
            result = false;
        }
        else
        {
            result = false;
        }
           
        // --------------- User City Validation ---------------
        if (formValue.city === "" || formValue.city === null) 
        {
            toast.error('City is required for Signup !');
            result = false;    
        }
        else if (!formValue.city.match(/^[a-zA-Z0-9/ ()-]{1,50}$/)) 
        {
            toast.error('Please enter City name correctly.');
            result = false;
        }
        else
        {
            result = false;
        }
 
        // --------------- User State Validation ---------------
        if (formValue.state === "" || formValue.state === null) 
        {
            toast.error('State is required for Signup !');
            result = false;    
        }

        // var state0 = document.getElementById('state');
        // if (state0.value === "") 
        // {
        //     toast.warning('select state.');
        //     result = false;    
        // }

        // --------------- User Pincode Validation ---------------
        if (formValue.pincode === "" || formValue.pincode === null) 
        {
            toast.error('Pincode is required for Signup !');
            result = false;    
        }
        else if (!formValue.pincode.match(/^[0-9]{6,6}$/)) 
        {
            toast.error('Please enter Pincode in 6 Digits.');
            result = false;
        }
        else
        {
            result = false;
        }

        // --------------- User Gender Validation ---------------
        if (formValue.gender === "" || formValue.gender === null) 
        {
            toast.error('Select Gender is required for Signup !');
            result = false;    
        }

        // --------------- User Known Languages Validation ---------------
        // if (formValue.languages === "" || formValue.languages === null) 
        // {
        //     toast.error('Select Known Languages for Signup !');
        //     result = false;    
        // }

        // if (!formValue.languages.length > 0) 
        // {
        //     toast.error('Select Known Languages for Signup !000');
        //     result = false;    
        // }

        // if (!isChecked) 
        // {
        //     toast.error('Select Known Languages.')
        //     result = false;  
        //     return
        // }

        // --------------- User Password Validation ---------------
        if (formValue.password === "" || formValue.password === null) 
        {
            toast.error('Password is required for Signup !');
            result = false;    
        }
        else if (!formValue.password.match(/^[a-zA-Z0-9._-]{3,15}$/)) 
        {
            toast.error('Please enter Password between 3 to 15 Characters.');
            result = false;
        }
        else
        {
            result = false;
        }

        return result;
    };

    const redirect = useNavigate();

    const onSignup = async(p) => {
        p.preventDefault();
        if (Validation()) 
        {
            const resp = await axios.post(`http://localhost:3000/user`, formValue);
            if (resp.status == 201) 
            {
                toast.success('Singup Successfully.');  
                redirect('/');  
                setFormValue({ ...formValue,  name: "", email: "", password: "", mobile:"", house_flat_no: "", society_flat_name: "", area: "", city: "", state: "", pincode: "", gender: "" });
            }    
        }
    };



    // ====================>< Show Password Functionality -> START ><====================
    var pwd = document.getElementById("pwd");
    var eye = document.getElementById("eye");
    var show_pwd_btn = document.getElementById("show_pwd_btn");

    const show_pwd = () => {

        if (pwd.type === 'password') 
        {
            pwd.type = 'text';
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash'); 
            show_pwd_btn.classList.remove('bg-success');
            show_pwd_btn.classList.add('bg-danger');
        }
        else
        {
            pwd.type = 'password';
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye'); 
            show_pwd_btn.classList.remove('bg-danger');
            show_pwd_btn.classList.add('bg-success');
        }
    };  
    // ====================>< Show Password Functionality -> END ><====================
    
    

  return (
    
    <div>
        <div className="container-fluid py-5">
            <div className="container">
              
                <p className='display-5 text-center'> Signup </p>

                <hr className='bg-primary pt-1' />

                <form>

                    <div className="row">

                        {/* --------------------| Name |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className='pb-1 ps-1'> Name :  </label>
                                <input type="text" className='form-control' name='name' value={formValue.name} onChange={changing_values} placeholder='Enter your username' />
                            </div>
                        </div>

                        {/* --------------------| Email |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className='pb-1 ps-1'> Email :  </label>
                                <input type="email" className='form-control' name='email' value={formValue.email} onChange={changing_values} placeholder='Enter your Email ID' />
                            </div>
                        </div>

                        {/* --------------------| Mobile Number |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group">
                                <label> Mobile Number :  </label>
                                <input type="number" className='form-control' name='mobile' value={formValue.mobile} onChange={changing_values} placeholder='Enter your Mobile Number' />
                            </div>
                        </div>

                        {/* --------------------| House / Flat No. |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> House / Flat No. :  </label>
                                <input type="text" className='form-control' name='house_flat_no' value={formValue.house_flat_no} onChange={changing_values} placeholder='Enter your House/Flat No.' />
                            </div>
                        </div>

                        {/* --------------------| Society / Flat Name |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> Society / Flat Name :  </label>
                                <input type="text" className='form-control' name='society_flat_name' value={formValue.society_flat_name} onChange={changing_values} placeholder='Enter your Society / Flat Name' />
                            </div>
                        </div>

                        {/* --------------------| Area |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> Area :  </label>
                                <input type="text" className='form-control' name='area' value={formValue.area} onChange={changing_values} placeholder='Enter your Area Name' />
                            </div>
                        </div>

                        {/* --------------------| City |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> City :  </label>
                                <input type="text" className='form-control' name='city' value={formValue.city} onChange={changing_values} placeholder='Enter your City Name' />
                            </div>
                        </div>

                        {/* --------------------| State |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> State :  </label>
                                <select className='form-select' name='state' value={formValue.state} onChange={changing_values} id='state' >
                                    <option value="" disabled > Select your State :  </option>
                                    <option value="Gujarat"> Gujarat </option>
                                    <option value="Rajsthan"> Rajsthan </option>
                                    <option value="Kerala"> Kerala </option>
                                    <option value="Jammu & Kashmir"> Jammu & Kashmir </option>
                                    <option value="Uttrakhand"> Uttrakhand </option>
                                </select>
                            </div>
                        </div>

                        {/* --------------------| Pin Code |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-group pt-4">
                                <label> Pin Code :  </label>
                                <input type="number" className='form-control' name='pincode' value={formValue.pincode} onChange={changing_values} placeholder='Enter your Pin Code' />
                            </div>
                        </div>

                        {/* --------------------| Gender |-------------------- */}
                        <div className="col-md-4">
                            <div className="form-check pt-4">
                                <label> Gender :  </label> 
                                <div className="form-check">
                                    <label>
                                        <input type="radio" className="form-check-input" name='gender' onChange={changing_values} value="Male" /> Male 
                                    </label> <br />
                                    <label>
                                        <input type="radio" className="form-check-input" name='gender' onChange={changing_values} value="Female" /> Female
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* --------------------| Known Languages |-------------------- */}
                        {/* <div className="col-md-4">
                            <div className="form-group pt-3">
                                <label> Known Languages :  </label>
                                <div className="form-check pt-2">
                                    <label>
                                        <input type="checkbox" className='form-check-input' name='languages' value={formValue.languages} onChange={() => handleCheckboxChange('english')} checked={isChecked.english} />
                                        English
                                    </label>
                                    <label className='ms-5'>
                                        <input type="checkbox" className='form-check-input' name='languages' value={formValue.languages} onChange={() => handleCheckboxChange('hindi')} checked={isChecked.hindi} />
                                        Hindi
                                    </label>
                                    <label className='ms-5'>
                                        <input type="checkbox" className='form-check-input' name='languages' value={formValue.languages} onChange={() => handleCheckboxChange('gujarati')} checked={isChecked.gujarati} />
                                        Gujarati
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* --------------------| Password |-------------------- */}                    
                        <div className="col-md-3">
                            <div className="form-group pt-4">
                                <label className='pb-1 ps-1'> Password :  </label>
                                <input type="password" className='form-control' name='password' value={formValue.password} onChange={changing_values} id='pwd' placeholder='Enter your Password' />
                            </div>
                        </div>
                        {/* --------------------| Show Password Button |-------------------- */}
                        <div className="col-md-1 pt-5">
                            <button className='btn btn-sm btn-success mt-2' id='show_pwd_btn' onClick={show_pwd} > <i className="fa-regular fa-eye"  id='eye'></i> </button>
                            {/* <label> Show Password  </label> */}
                        </div>

                        <hr className='bg-primary mt-4 pt-1' />

                        <div className="col-md-12 text-center mb-3">
                            <button className='btn btn-primary col-md-3' onClick={onSignup}> SIGNUP </button>
                        </div>

                        <hr className='bg-primary pt-1' />

                    </div>

                </form>

                <p className='pt-4 text-center'>
                    If you have already account ? 
                    <Link to='/' className='text-decoration-none ps-2 h4 text-danger'> Login </Link>
                </p>

            </div>
        </div>
    </div>

  )
}

export default Singup