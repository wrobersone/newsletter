import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { useParams } from "react-router-dom"
import SinglePageSlider from "./SinglePageSlider/SinglePageSlider";
import { hero } from "../../data"
import Side from "../home/side/Side"
import "../home/side/side.css"
import "../home/main/style.css"

const SinglePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const item = hero.find((item) => item.id === parseInt(id))
        window.scrollTo(0, 0)
        if (item) {
            setItem(item)
        }
    }, [id])

  return (
    <>
      {item ? (
        <main>
            <SinglePageSlider />
            <div className="container">
                <section className="mainContent details">
                    <h1 className="title">{item.title}</h1>
                    <div className="author">
                        <span>by</span>
                        <img src={item.authorImg} alt="" />
                        <p>{item.authorName}</p>
                        <label>{item.time}</label>
                    </div>
                    <div className="social">
                        <div className="socialBox">
                            <i className="fab fa-facebook-f"></i>
                            <span>12, 740 Likes</span>
                        </div>
                        <div className="socialBox">
                            <i className="fab fa-pinterest"></i>
                            <span>5, 740 Followers</span>
                        </div>
                        <div className="socialBox">
                            <i className="fab fa-twitter"></i>
                            <span>5, 640 Fans</span>
                        </div>
                        <div className="socialBox">
                            <i className="fab fa-instagram"></i>
                            <span>32, 400 Followers</span>
                        </div>
                        <div className="socialBox">
                            <i className="fab fa-youtube"></i>
                            <span>2, 740 Subscribers</span>
                        </div>
                    </div>

                    <div className="desctop">
                        {item.desc.map((data) => {
                            return (
                                <>
                                    <p>{data.para1}</p>
                                    <p>{data.para2}</p>
                                </>
                            )
                        })}
                    </div>
                    <img src={item.cover} alt="" />
                    {item.desc.map((data) => (
                        <p>{data.para3}</p>
                    ))}

                    <div className="descbot">
                        {item.details.map((data) => {
                            return (
                                <>
                                    <h1>{data.title}</h1>
                                    <p>{data.para1}</p>
                                </>
                            )
                        })}
                    </div>

                    <div className="quote">
                        <i className="fa fa-quote-left"></i>
                        {item.details.map((data) => {
                            return (
                                <>
                                    <p>{data.quote}</p>
                                </>
                            )
                        })}
                    </div>

                    <div className="desctop">
                        {item.details.map((data) => {
                            return (
                                <>
                                    <p>{data.para2}</p>
                                    <p>{data.para3}</p>
                                </>
                            )
                        })}
                    </div>
                </section>
                
                <section className="sideContent">
                    <Side />
                </section>
            </div>
        </main>
      ) : <h1>Nothing Found</h1>}
    </>
  )
}

export default SinglePage
