import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {

    var heading = { color: "#30336b" };
    var img = { padding: "15px 70px" }

// <<-------------<-<-< create useEffect arrow function for run another function >->->------------->>
  useEffect(() => {
    fetchData1();
  }, []);

  useEffect(() => {
    fetchData2();
  }, []);

  useEffect(() => {
    fetchData3();
  }, []);

  
// <<-------------<-<-< CASUAL Outfits ||  get data from API via axios and set in format using useState >->->------------->>
  const [productData1, setProductData1] = useState([]);

  const fetchData1 = async () => {
    const result = await axios.get('http://localhost:3000/casual');
    // console.log(result.data);
    setProductData1(result.data)
  };

  
// <<-------------<-<-< Ethnic Outfits || get data from API via axios and set in format using useState >->->------------->>
const [productData2, setProductData2] = useState([]);

const fetchData2 = async () => {
  const result = await axios.get('http://localhost:3000/ethnic');
  // console.log(result.data);
  setProductData2(result.data)
};

// <<-------------<-<-< BUSINESS PROFESSIONAL Outfits || get data from API via axios and set in format using useState >->->------------->>
const [productData3, setProductData3] = useState([]);

const fetchData3 = async () => {
  const result = await axios.get('http://localhost:3000/businessprofessional');
  // console.log(result.data);
  setProductData3(result.data)
};

  return (
    <div>
    <div className="container">
        
    {/* ------------------------------ Casual Outfits ------------------------------ */}
        <div className="row">
            <h1 className='fashion_taital pt-5' style={heading}> Casual Outfits </h1>
        </div>

        <div className="mt-5 mb-5 d-flex flex-wrap justify-content-between">

          {
            productData1.slice(0, 4).map((value, index, entarr) => (
              (
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
            ))
          }             
        </div>  


    {/* ------------------------------ Ethnic Outfits ------------------------------ */}
        <div className="row">
            <h1 className='fashion_taital' style={heading}> Ethnic Outfits </h1>
        </div>

        <div className="mt-5 mb-5 d-flex flex-wrap justify-content-between">

          {
            productData2.slice(0, 4).map((value, index, entarr) => (
              (
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
            ))
          }             
        </div>  

    
    {/* ------------------------------ Business Professional Outfits ------------------------------ */}
        <div className="row">
            <h1 className='fashion_taital' style={heading}> Business Professional Outfits </h1>
        </div>

        <div className="mt-5 mb-5 d-flex flex-wrap justify-content-between">

          {
            productData3.slice(0, 4).map((value, index, entarr) => (
              (
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
            ))
          }             
        </div>  


    </div>
</div>
  )
}

export default Home