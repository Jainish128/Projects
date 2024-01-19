import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container py-5'>

        <p className='display-1 pt-5 text-center'> Home Page </p>

        <h1 className='text-center pt-5 mt-5'> Hello, &nbsp; <span className='text-uppercase text-secondary'> { localStorage.getItem('Username') } </span> </h1>

        <div className="text-center pt-5 mt-5">
          <Link to='/' className='text-decoration-none btn btn-danger'> Logout </Link>
        </div>

    </div>
  )
}

export default Home