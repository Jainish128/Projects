import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {


    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    });

    const inputing_values = (j) => {
        setFormValue({ ...formValue, [j.target.name]:j.target.value });
        console.log(formValue);
    };

    const redirect = useNavigate();


    // ==================== Login Validation -> START ====================

    const login_validation = () => {

        var result = true;

        // ---------- Email Input Validation ----------
        if (formValue.email == "" || formValue.email == null) 
        {
            toast.error('Email ID is required for Login !');    
            result = false;
        }
        else if (!formValue.email.match(/^[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}$/) )
        {
            toast.error('Please write valid email address !!!');
            result = false;    
        }
        else
        {
            result = false;
        }

        // ---------- Password Input Validation ----------
        if (formValue.password == "" || formValue.password == null) 
        {
           toast.error('Password is required for Login !');   
           result = false; 
        }
        else if (!formValue.password.match(/^[a-zA-Z0-9._-]{3,20}$/)) 
        {   
            toast.error('Please enter the Password between 3 to 20 Characters !');
            result = false;
        }
        else
        {
            result = true;
        }

        return result;

    };

    // ==================== Login Validation -> END ====================





    // ==================== Login with Validate Data from JSON-Server -> START ====================

    const onLogin = async(p) => {
        p.preventDefault();

        if (login_validation()) 
        {
            const resp = await axios.get(`http://localhost:3000/user?email=${formValue.email}`)

            if (resp.data.length > 0) 
            {
                if (resp.data[0].password == formValue.password) 
                {
                    toast.success('Login Successfully.', { position: "top-center" });
                    redirect('/Home');
                    localStorage.setItem('Username', resp.data[0].name)
                }
                else
                {
                    toast.error('Password is Incorrect !');
                }
            }
            else
            {
                toast.error('Email ID is not Valid !');
            }
        }

    }

    // ==================== Login with Validate Data from JSON-Server -> END ====================



  return (
    
    <div>
        <div className="container-fluid">
            <div className="container py-5">
                
                <h1 className='text-center'> LOGIN </h1>

                <div className="row pt-5">
                    <div className="col-md-4 col-sm-0"></div>

                    <div className="col-md-4 col-sm-12">
                        <form action="" >
                            <div className="form-group">
                                <label htmlFor="" className='h5'> Email :  </label>
                                <input type="email" className='form-control' name='email' onChange={inputing_values} placeholder='Enter your Email ID here...' />
                            </div>
                            <div className="form-group pt-4">
                                <label htmlFor="" className='h5'> Password :  </label>
                                <input type="password" className='form-control' name='password' onChange={inputing_values} placeholder='Enter your Password here...' />
                            </div>
                            <div className="text-center pt-5">
                                <button className="btn btn-primary" onClick={onLogin}> Login </button>
                            </div>
                        </form>

                        <p className='pt-5 mt-5 text-center'>
                            If you have not account ? 
                            <Link to='/Signup' className='text-decoration-none ps-2 h4 text-success'> Signup </Link>
                        </p>

                    </div>

                    <div className="col-md-4 col-sm-0"></div>
                </div>
                

            </div>
        </div>
    </div>

  )
}

export default Login