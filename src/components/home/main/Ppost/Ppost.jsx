import React from "react";
import Heading from "../../../common/heading/Heading";
import { ppost } from "../../../../data"
import './ppost.css'
import Slider from "react-slick"


const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className="popularPost">
        <Heading title="Popular Posts" />
        <div className='content'>
          <Slider {...settings}>
            {ppost.map((val) => {
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
    </>
  );
};

export default Ppost;
