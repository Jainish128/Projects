import React from 'react'
import './Product_Card.css'

function Product_Card() {
    

  return (
    <div>

        <div className="card card-main mb-5">
            <img className='product-img rounded-4' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="card-body text-center p-0">
                <div>
                    <h3 className='card-title p-0'> Casual Shoes </h3>
                    <p className='card-text'> Shoes </p>
                </div>
                <div className='price pt-2'>
                    <span> ₹<del>200</del> <h4>  ₹100  </h4> </span>
                </div>
                <div>
                    <a href="#" className='card-btn cart btn border-dark border-2 me-1' title='Add to Cart'> 
                        Add to Cart 
                    </a>
                    <a href="#" id='wishlist' className='card-btn wishlist btn border-dark border-2 ms-1' title='Add to Wishlist'> 
                        <i className="fa-regular fa-heart" id='wishlist_icon'></i> 
                    </a>
                </div>

                <div className="overlay">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur doloremque tempore officia ab voluptatibus esse tempora commodi pariatur dignissimos eius, modi. {/*  {value.desc.slice(0, 100) + "..."} */}
                </div>

            </div>
        </div>

    </div>
  )
}

export default Product_Card