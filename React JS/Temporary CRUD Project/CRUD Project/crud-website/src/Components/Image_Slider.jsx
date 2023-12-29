import React, { useState } from 'react'

function Image_Slider() {

    const slides = [
        {
            url: 'https://avsvehicles.com/wp-content/uploads/2018/01/Land-Rover-Range-Rover-Velar-SE-R-Dynamic-White-02.jpg', title:'Range Rover Velar'
        },
        {
            url: 'https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228134417/Toyota-Fortuner-Legender-exterior.jpg', title:'Fortuner Legender'
        },
        {
            url: 'https://gaadiwaadi.com/wp-content/uploads/2019/07/tata-harrier-dual-tone.jpeg', title:'Harrier'
        }
    ]


    const [index, setIndex] = useState(0);

    const previous = () => {
        const isFirstSlide = index === 0
        if (isFirstSlide) 
        {
            setIndex(2)    
        }
        else
        {
            setIndex(index - 1)
        }
    }

    const next = () => {
        const isLastSlide = index === 2
        if (isLastSlide) 
        {
            setIndex(0)    
        } 
        else 
        {
            setIndex(index + 1)    
        }
    }





  return (
    <div className='container mt-5'>
        {/* <img src={slides[index].url} alt="Slide Image" width={800} height={500} /> */}

        <img src={`${slides[index].url}`} alt="Slide Image" width={800} height={500} />

        <div className="row mt-4">
            <div className="btn-group">
                <button className='btn btn-danger' onClick={previous}> Previous </button> 
                <button className='btn btn-success' onClick={next}> Next </button>
            </div>
        </div>

    </div>
  )
}

export default Image_Slider