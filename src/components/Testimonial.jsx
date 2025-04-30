import React from 'react'
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <>
    <div className="testimonial-container">
        <div className="timg-container">
            <img className="tbackground-img" src="320.jpg" alt="" />
            <div className="tgreen-overlay"></div>
        </div>
        <div className="toverlay-content">
            <span className="toheading">TESTIMONIAL</span>
            <span className="todesc">What they say about us</span>
            <span className="tosmalldesc">Discover what our valued staffs are saying about their positive experiences with our reliable service, quality products, and exceptional care.</span>
            <div className='testmonial-reviews-container'>
                <div className='reviews-card'>
                    <div className='review-text'>
                        <span>Our seamless ordering system ensures fast deliveries. Patients love the convenience and reliability we provide daily. Proud to serve!</span>
                    </div>
                    <div className='review-profile'>
                        <img src="IMG-20250429-WA0004.jpg" alt="" />
                        <div className='reviews-name'>
                            <span className='personname'>Udith</span>
                            <span className='occupation'>General Manager</span>
                        </div>
                    </div>
                </div>
                <div className='reviews-card'>
                    <div className='review-text'>
                        <span>Medications delivered promptly with care. Our team works tirelessly to maintain quality service. Customer satisfaction is our priority!</span>
                    </div>
                    <div className='review-profile'>
                        <img src="IMG-20250429-WA0005.jpg" alt="" />
                        <div className='reviews-name'>
                            <span className='personname'>Poorna</span>
                            <span className='occupation'>Product Manager</span>
                        </div>
                    </div>
                </div>
                <div className='reviews-card'>
                    <div className='review-text'>
                        <span>Efficient, secure, and user-friendly platform. We ensure prescriptions are handled safely. Trusted by thousands—happy to help!</span>
                    </div>
                    <div className='review-profile'>
                        <img src="IMG-20250429-WA0006.jpg" alt="" />
                        <div className='reviews-name'>
                            <span className='personname'>Dipak</span>
                            <span className='occupation'>Sales Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial