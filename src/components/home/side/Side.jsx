import React from 'react'
import './side.css'
import Heading from "../../common/heading/Heading"
import SocialMedia from "./social/SocialMedia"
import Tpost from "./tpost/Tpost"

const Side = () => {
    const category = ['business', 'fashion', 'fun', 'health', 'sports', 'technology', 'travel', 'world'];
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to Our Newsletter</h1>
        <form action="">
            <input type="text" placeholder="Email Address ..." />
            <button className="cursor-ponter"><i className="fa fa-paper-plane"></i> Send </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />

      <section className="categories">
        <Heading title="Categories" />
        {category.map((val) => {
            return <div className="category category1">
                <span>{val}</span>
            </div>
        })}
      </section>
    </>
  )
}

export default Side
