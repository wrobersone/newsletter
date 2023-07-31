import React from 'react'
import './music.css'
import Heading from "../../../common/heading/Heading"
import Slider from "react-slick"
import { popular } from '../../../../data'

const Music = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        dots: false,
      }

  return (
    <div>
      <section className="music">
        <Heading title="Music News" />
        <div className='content'>
          <Slider {...settings}>
            {popular.filter((val) => val.category === "fun").map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow flexSB'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.category}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                      <p className="desc">{val.desc.slice(0, 250)} ...</p>
                      <div className='comment'>
                        <i class='fas fa-share'></i>
                        <label>Share /</label>
                        <i class='fas fa-comments'></i>
                        <label>{val.comments}</label>
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

export default Music
