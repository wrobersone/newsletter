import React from 'react'

const SocialMedia = () => {
  return (
    <>
      <section className="social">
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
      </section>
    </>
  )
}

export default SocialMedia
