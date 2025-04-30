import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
    <>
    <div id='faq' className='faq-section'>
        <div className='faq-container'>
            <div className='faq-title'>
                <span>Got Questions? We've Got Instant Answers!</span>
            </div>
            <div className='faq-content'>
                <div className='question-container'><span className='question'>How quickly will my order be delivered?</span>
                <span className='answer'>Most orders are processed and shipped within 24 hours. Delivery typically takes 2-5 business days, depending on your location and shipping method.</span>
                </div>
                <div className='question-container'><span className='question'>Is my prescription information secure?</span>
                <span className='answer'>Absolutely. We use advanced encryption and strictly follow HIPAA and other healthcare privacy laws to ensure your data remains safe and confidential</span>
                </div>
                <div className='question-container'><span className='question'>Do you accept insurance for online orders?</span>
                <span className='answer'>Yes! We partner with major insurance providers. Simply upload your insurance details during checkout, and we’ll handle the verification for you.</span>
                </div>
                <div className='question-container'><span className='question'>What if I need urgent medication?</span>
                <span className='answer'>For urgent needs, we offer expedited shipping options. Alternatively, you can check our network of partner pharmacies for same-day pickup availability.</span>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Faq