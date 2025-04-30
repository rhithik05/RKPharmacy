import React from 'react'
import "./Choice.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Choice = () => {
  return (
    <>
    <div className='choice-section'>
        <div className='choice-container'> 
            <div className='illustrations-container'>
                <span className='illuheading'>WHY CHOOSE US</span>
                <span className='illudesc'>Best services available for the best customers</span>
                <img className='illuimage' src="3644996.png" alt="" />
            </div>
            <div className='choice-text-container'>
                <div className='choice-text'>
                    <div className='imlogo-container'>
                        <FavoriteIcon sx={{fontSize :45}}/>
                    </div>
                    <div className='imtext-container'>
                        <span className='choiceheading'>Honesty & transperancy</span>
                        <span className='choicedesc'>Openly providing medication details, sourcing, and pricing builds customer trust, fostering a reliable and transparent online pharmacy experience.</span>
                    </div>

                </div>
                <div className='choice-text'>
                    <div className='imlogo-container'>
                        <LocalOfferIcon sx={{fontSize :45}}/>
                    </div>
                    <div className='imtext-container'>
                        <span className='choiceheading'>Extra Discount</span>
                        <span className='choicedesc'>Unlock extra savings on your essential medications! Enjoy discounts and affordable healthcare delivered conveniently to your doorstep. Shop smart and save today!</span>
                    </div>

                </div>
                <div className='choice-text'>
                    <div className='imlogo-container'>
                        <HeadphonesIcon sx={{fontSize :45}}/>
                    </div>
                    <div className='imtext-container'>
                        <span className='choiceheading'>24/7 Premium support</span>
                        <span className='choicedesc'>Need assistance anytime? Our dedicated 24/7 premium support team is here to answer your questions and ensure a seamless online pharmacy experience.</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Choice