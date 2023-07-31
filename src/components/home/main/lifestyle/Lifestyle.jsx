import React from 'react'
import './life.css'
import Heading from "../../../common/heading/Heading"
import Slider from "react-slick"
import { lifestyle } from "../../../../data"

const Lifestyle = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 4,
            },
          },
        ],
      }
  return (
    <div>
      <section className="popularPost life">
        <Heading title="Life Style" />
        <div className='content'>
          <Slider {...settings}>
            {lifestyle.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className="images">
                        <div className='img'>
                            <img src={val.cover} alt='' />
                        </div>
                        <div class='category category1'>
                            <span>{val.category}</span>
                        </div>
                        <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                            <i class='fas fa-calendar-days'></i>
                            <label>{val.date}</label>
                        </div>
                        
                        </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Lifestyle
