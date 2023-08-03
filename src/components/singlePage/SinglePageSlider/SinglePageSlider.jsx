import React from 'react'
import './style.css'
import Slider from "react-slick"
import { popular } from "../../../data"

const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="singlePopular">
        <div className="content">
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <div className='items'>
                  <div className='box'>
                    <div className='images'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default SinglePageSlider
