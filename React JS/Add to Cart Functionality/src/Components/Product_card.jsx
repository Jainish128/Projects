import React from 'react';


function Product_card({ pro_img, pro_name, pro_title, price }) {


    return (
   <div className="col-md-3 col-md-12 mb-4">
    {/* <div className="card" style={{width: 400}}> */}
    <div className="card">
      <img className="card-img-top" src={pro_img} alt="Card image" style={{width: '100%', height: '300px', padding: '10px'}} />
      <div className="card-body">
        <h4 className="card-title text-center"> {pro_name} </h4>
        <p className="card-text text-center"> {pro_title} </p>
        <p className='text-center h5 pb-2'> ₹ {price} </p>
      <div className='d-flex justify-content-center'>
          <a href="#" className="btn btn-secondary me-3"> <i className='fa-regular fa-eye'></i> </a>
          <a href="#" className="btn btn-primary" > Add to Cart </a>
          <a href="#" className="btn btn-warning ms-3"> <i className='fa-regular fa-heart'></i> </a>
      </div>
      </div>
    </div>
  </div>

  )
}

export default Product_card