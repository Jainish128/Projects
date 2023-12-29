import React, { useState } from 'react';
import './CSS 2/Banner.css';


function Banner() {


    const slides = [
        {
            url: "images/banner-02.jpg",            
        },
        {
            url: "images/banner-01.jpg",            
        },
        {
            url: "images/banner-03.jpg",            
        }
    ];


    const [index, setIndex] = useState(0);

    const prev = () => {
        const firstSlide = index === 0;
        if (firstSlide) 
        {
            setIndex(2)    
        } 
        else 
        {
            setIndex(index - 1)    
        }
    };

    const next = () => {
        const lastIndex = index === 2;
        if (lastIndex) 
        {
            setIndex(0)    
        } 
        else 
        {
            setIndex(index + 1)    
        }
    };


    // Automatic Slide Images
    // setInterval(() => {
    //     const firstSlide = index === 0;
    //     if (firstSlide) 
    //     {
    //         setIndex(2)    
    //     } 
    //     else 
    //     {
    //         setIndex(index - 1)    
    //     }
    // }, 3000);

    
    


  return (
    <div>
        <div className="main">

            <img src={`${slides[index].url}`} alt="Slider Image" />

            <div className="content text-center">
                <h1> Welcome to </h1>
                <h1> Thewayshop </h1>
                <p>
                See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.
                </p>
                <button className='hvr-hover'> SHOP NOW </button>
            </div>

            <div className='buttons'>
                <button className='prev' onClick={prev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className='next' onClick={next}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Banner