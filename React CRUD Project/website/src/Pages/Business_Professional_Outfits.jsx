import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Business_Professional_Outfits() {

    var heading = { color: "#30336b" };
    var img = { padding: "15px 75px" };

// <<-------------<-<-< create useEffect arrow function for run another function >->->------------->>
  useEffect(() => {
    fetchData();
  }, []);

  
// <<-------------<-<-< get data from API via axios and set in format using useState >->->------------->>
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:3000/businessprofessional');
    // console.log(result.data);
    setProductData(result.data)
  };

// <<-------------<-<-<  >->->------------->>



  return (
    <div>
        <div className="container">
            
            <div className="row">
                <h1 className='fashion_taital pt-5' style={heading}> Business & Professional Outfits </h1>
            </div>

            <div className="mt-5 mb-5 d-flex flex-wrap justify-content-between">

              {
                productData.map((value, index, entarr) => {
                  return (
                    <div className="card card-main mb-5 m-0">
                      <img className='product-img rounded-4' style={img} src={value.img_url} />
                      <div className="card-body text-center p-0">
                        <div>
                            <h3 className='card-title p-0'> {value.product_name} </h3>
                            <p className='card-text'> {value.cate_name} </p>
                        </div>
                        <div className='pt-2'>
                          <span> ₹<del>{value.price}</del> <h4>  ₹{value.discounted_price}  </h4> </span>
                        </div>
                        <div>
                          <a href="#" className='card-btn cart btn border-dark border-2 me-1' title='Add to Cart'> 
                            Add to Cart 
                          </a>
                          <a href="#" id='wishlist' className='card-btn wishlist btn border-dark border-2 ms-1' title='Add to Wishlist'> 
                            <i className="fa-regular fa-heart" id='wishlist_icon'></i> 
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }             
            
            
            </div>  

        </div>
    </div>
  )
}

export default Business_Professional_Outfits