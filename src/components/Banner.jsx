import React from 'react'
import "./Banner.css"
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const a = useNavigate();
    const taketoproductpage = () => {
        a("/products")
    }
  return (
    <>
    <div className='banner-section'>
        <div className='banner-container'>
            <div className='firstdiv'>
                <div className='thermometer-container'>
                <span className='theading'>Promo</span>
                <span className='tdesc1'>Save upto ₹200 on select Digital thermometers</span>
                <span className='tdesc2'>Accurate digital readings, simple use, safe for all ages. Get yours!</span>
                <img className='timage' src="61BiUrullKL-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className='seconddiv'>
                <div className='firstchild'>
                    <div className='facemaskcard'>
                        <div className='facemaskcard1'>
                            <span className='fheading'>N95 Face Mask</span>
                            <span className='fdesc'>High filtration, breathable comfort, secure fit, essential protection. Stay safe always!</span>
                            <button onClick={taketoproductpage} className='fbutton'>Shop now</button>
                        </div>
                        <div className='facemaskcard2'>
                            <img src="vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409059.png" alt="" />
                        </div>

                    </div>
                    <div className='multivitamincard'>
                        <div className='multivitamincard1'><img src="Multivitamin_ForMen_60tabs_250ml_600x600_f5c1501e-d7b1-4f5a-a8bf-68854eca7b10_x500_crop_center.png" alt="" /></div>
                        <div className='multivitamincard2'>
                            <span className='mheading'>Daily Routine for Good health</span>
                            <span className='mdesc'>Boost immunity, enhance energy, support overall health. Daily essential supplement!</span>
                            <button onClick={taketoproductpage} className='mbutton'>Shop now</button>
                        </div>
                    </div>
                </div>
                <div className='secondchild'>
                    <div className='ccard1'>
                        <span className='cheading'>Natural Anti-age skin foam</span>
                        <span className='cdesc'>Reduce wrinkles, improve elasticity, youthful glow, gentle cleanse. Rejuvenate your skin!</span>
                        <button onClick={taketoproductpage} className='cbutton'>Shop now</button>
                    </div>
                    <div className='ccard2'>
                        <img src="3_86_large-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner