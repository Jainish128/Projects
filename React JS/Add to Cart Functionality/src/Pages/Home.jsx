import React, { useState } from 'react'
import Product_card from '../Components/Product_card';
import Cart from './Cart';

function Home() {

    const Products = [
        {
            id: 1,
            name: 'Shirt',
            title: 'Casual Shirt for Anywhere',
            desc: 'This shirt is only for Man.',
            img: 'https://m.media-amazon.com/images/I/51Js-8owaUL._SX679_.jpg',
            price: 500
        },
        {
            id: 2,
            name: 'T-Shirt',
            title: 'Casual T-Shirt for Anywhere',
            desc: 'This t-shirt is only for Man.',
            img: 'https://m.media-amazon.com/images/I/51qf1+7v4wL._AC_UL480_FMwebp_QL65_.jpg',
            price: 350
        },
        {
            id: 3,
            name: 'Jeans Pant',
            title: 'Jeans Pant for Anywhere',
            desc: 'This jeans pant is only for Man.',
            img: 'https://m.media-amazon.com/images/I/61nLsdHiCTL._AC_UL480_FMwebp_QL65_.jpg',
            price: 500
        },
        {
            id: 4,
            name: 'Formal Pant',
            title: 'Formal Pant for Anywhere',
            desc: 'This formal pant is only for Man.',
            img: 'https://m.media-amazon.com/images/I/61RfxNzxtYL._AC_UL480_FMwebp_QL65_.jpg',
            price: 500
        }
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        // Check if the product is already in the Cart.
        const existingItem  = cartItems.find( (item)=> item.id === product.id );

        if (existingItem) 
        {
            // If the item is already in the cart, update the quantity
            setCartItems((prevItems) => 
                prevItems.map((item) => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );    
            console.log(cartItems);
        }
        else
        {
            // If the item is not in the cart, Add it with quantity 1
            setCartItems((prevItems) => [...prevItems, { ...product, quantity:1 }]);
            // localStorage.setItem('Item_in_Cart', cartItems.item)
        }
    };

  return (
    <div className="container-fluid">
        <div className="container mt-5">
            <div className="row">
                {
                    Products.map((item, index) => {
                        return (
                            <div className="col-md-3 col-sm-12 mb-4">
                                <div className="card" key={index}>
                                    <img className="card-img-top" src={item.img} alt="Card image" style={{width: '100%', height: '300px', padding: '10px'}} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center"> {item.name} </h4>
                                        <p className="card-text text-center"> {item.title} </p>
                                        <p className='text-center h5 pb-2'> ₹ {item.price} </p>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-secondary me-3"> <i className='fa-regular fa-eye'></i> </button>
                                            <button className="btn btn-primary" onClick={()=> handleAddToCart(item)}> Add to Cart </button>
                                            <button className="btn btn-warning ms-3"> <i className='fa-regular fa-heart'></i> </button>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        )
                    })
                }
            </div>
        </div>


        <Cart cartItems={cartItems} setCartItems={setCartItems}/>

    </div>

    
  )
}

export default Home