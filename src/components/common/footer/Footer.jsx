import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="box logo">
                <img src="../images/tech-logo-footer.png" alt="" />
                <p>Itaque unde, dolore id nam asperiores, libero quibusdam distinctio aliquid eius ab mollitia ducimus laborum iure similique necessitatibus cum architecto consequatur est!</p>
                <i className="fa fa-envelope"></i>
                <span>tech@tech.com</span> <br />
                <i className="fa fa-headphones"></i>
                <span>1 213-909-8476</span>
            </div>
            <div className="box">
                <h3>Sports</h3>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Google To Boost Android Security In A Few Days</p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero2.jpg" alt="" />
                    <p>Cespedes Plays In The Championship Baseball Game</p>
                </div>
            </div>
            <div className="box">
                <h3>News</h3>
                <div className="item">
                    <img src="../images/hero/hero3.jpg" alt="" />
                    <p>USA Promises to give Intel Aid to Locate the Soldiers</p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Cespedes Plays In The Championship Baseball Game</p>
                </div>
            </div>
            <div className="box">
                <h3>Links</h3>
                <ul>
                    <li><span>Boxing</span><label>(5)</label></li>
                    <li><span>Fashion</span><label>(6)</label></li>
                    <li><span>Health</span><label>(7)</label></li>
                    <li><span>Nature</span><label>(9)</label></li>
                </ul>
            </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
            <p>&copy; All Rights Reserved.</p>
            <p>Developed by William.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
