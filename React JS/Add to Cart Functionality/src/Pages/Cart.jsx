import React, { useState } from 'react';


function Cart({ cartItems, setCartItems }) {

// function Cart() {
    // const [cartItems, setCartItems] = useState([]);

    const handleQuantityChange = (productId, change) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === productId ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
            )
        );
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems((prevItems) => 
            prevItems.filter((item) => item.id !== productId)
        );
    };

    // Calculate total Quantity.
    // const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    // Calculate total Price.
    // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className='container-fluid bg-light'>
        <div className="container">
            <h1 className="h1 text-center"> Cart </h1>

            <table className='table table-bordered table-stripped text-center'>
                <thead>
                    <tr>
                        <th> SR. No. </th>
                        <th> Product Image </th>
                        <th> Product Name </th>
                        <th> Product Price </th>
                        <th> Product Quantity </th>
                        <th> Product Total Price </th>
                        <th> Remove from Cart </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cartItems && cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td> {item.id} </td>
                                    {/* <td> {index} </td> */}
                                    <td>
                                        <img src={item.img} width={125} height={125}  alt="Product Cart Added Image" />
                                    </td>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td>
                                        <div>
                                            <button className="btn btn-danger btn-sm" onClick={()=> handleQuantityChange(item.id, -1)}> <i className="fa-solid fa-minus"></i> </button>
                                            <span className='px-2'> {item.quantity} </span>
                                            <button className="btn btn-success btn-sm" onClick={()=> handleQuantityChange(item.id, 1)}> <i className="fa-solid fa-plus"></i> </button>
                                        </div>
                                    </td>
                                    <td> { item.quantity * item.price } </td>
                                    <td>
                                        <button className='btn' onClick={()=> handleRemoveFromCart(item.id)}>
                                            <i className="fa-solid fa-square-xmark fa-2x text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th colSpan={7} className='text-center display-6 py-4'>
                                    Your Cart is Empty.
                                </th>
                            </tr>
                        )
                    }

                    {/* <tr>
                        <td> 1 </td>
                        <td>
                            <img src="https://m.media-amazon.com/images/I/51Js-8owaUL._SX679_.jpg" width={125} height={125}  alt="Product Cart Added Image" />
                        </td>
                        <td> Shirt </td>
                        <td> 500 </td>
                        <td> 1500 </td>
                        <td>
                            <div>
                                <button className="btn btn-danger btn-sm"> <i className="fa-solid fa-minus"></i> </button>
                                <span className='px-2'> 3 </span>
                                <button className="btn btn-success btn-sm"> <i className="fa-solid fa-plus"></i> </button>
                            </div>
                        </td>
                        <td>
                            <button className='btn'>
                                <i className="fa-solid fa-circle-xmark fa-2x text-danger"></i>
                            </button>
                        </td>
                    </tr> */}

                    {/* <tr key={index}>
                                    <td> {item.id} </td>
                                    <td>
                                        <img src={item.img} width={125} height={125}  alt="Product Cart Added Image" />
                                    </td>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td> 1500 </td>
                                    <td>
                                        <div>
                                            <button className="btn btn-danger btn-sm" onClick={()=> handleQuantityChange(item.id, -1)}> <i className="fa-solid fa-minus"></i> </button>
                                            <span className='px-2'> {item.quantity} </span>
                                            <button className="btn btn-success btn-sm" onClick={()=> handleQuantityChange(item.id, 1)}> <i className="fa-solid fa-plus"></i> </button>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn' onClick={()=> handleRemoveFromCart(item.id)}>
                                            <i className="fa-solid fa-circle-xmark fa-2x text-danger"></i>
                                        </button>
                                    </td>
                    </tr> */}

                </tbody>

                {/* Display total quantity and total price */}
                {/* {
                    cartItems && cartItems.length > 0 && (
                        <tfoot>
                        <tr>
                            <td colSpan={5}></td>
                            <td> Total Item :  </td>
                            <th> {totalQuantity} </th>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td> Total Price :  </td>
                            <th> {totalPrice} </th>
                        </tr>
                    </tfoot>
                    )
                } */}
            </table>

        </div>
    </div>

  )
}

export default Cart