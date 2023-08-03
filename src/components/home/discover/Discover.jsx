import React from 'react'
import './discover.css'
import Heading from "../../common/heading/Heading"
import { discover } from "../../../data"

const Discover = () => {
  return (
    <>
     <section className="discover">
        <div className="container">
            <Heading title="Discover" />

            <div className="content">
                {discover.map((val) => {
                    return <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <h1 className="title">{val.title}</h1>
                    </div>
                })}
            </div>
        </div>
    </section> 
    </>
  )
}

export default Discover
