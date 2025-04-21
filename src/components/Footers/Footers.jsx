import React from 'react'

import {Grouop,Acca} from '../../assets'
const Footers = () => {
  return (
    <div>
        <footer className='bg-[#302E3F]'>
            <div className="container">
                <div style={{paddingBottom:'50px'}} className="footer flex flex-col gap-30 ">
                  <div style={{paddingTop: '20px'}} className="footer__top ">
                  <div style={{paddingBottom: '20px'}} className="logo flex items-center gap-3">
                        <img src={Grouop} alt="" />
                        <h2 className='text-[28px] text-white'>Your new finance team</h2>
                    </div>
                    <div className="links flex gap-30">
                        <div className="link">
                            <h2 style={{paddingBottom:'10px'}} className='text-[18px] text-white font-bold '>How it works</h2>
                            <p className='text-base text-[#C5E9EA]'>Hassle Free Switching</p>
                        </div>
                        <div className="link">
                            <h2 style={{paddingBottom:'10px'}} className='text-[18px] text-white font-bold '>What we do</h2>
                            <p className='text-base text-[#C5E9EA]'>Finance Teams</p>
                            <p className='text-base text-[#C5E9EA]'>Tax</p>
                            <p className='text-base text-[#C5E9EA]'>R&D Tax Credits</p>
                            <p className='text-base text-[#C5E9EA]'>A platform for success</p>
                            <p className='text-base text-[#C5E9EA]'>Software Integrations</p>
                        </div>
                        <div className="link">
                            <h2 style={{paddingBottom:'10px'}} className='text-[18px] text-white font-bold '>Who we help</h2>
                            <p className='text-base text-[#C5E9EA]'>Startups</p>
                            <p className='text-base text-[#C5E9EA]'>Small Business</p>
                            <p className='text-base text-[#C5E9EA]'>Medium Business</p>
                            <p className='text-base text-[#C5E9EA]'>CFO & Head of Finance</p>
                        </div>
                        <div className="link">
                            <h2 style={{paddingBottom:'10px'}} className='text-[18px] text-white font-bold '>Resources</h2>
                            <p className='text-base text-[#C5E9EA]'>Medium Business</p>
                            <p className='text-base text-[#C5E9EA]'>Guides</p>
                            <p className='text-base text-[#C5E9EA]'>Contact Us</p>
                            <p className='text-base text-[#C5E9EA]'>A platform for success</p>
                        </div>
                        <div className="link">
                            <h2 className='text-[18px] text-[#C5E9EA]'>Company</h2>
                            <p className='text-base text-[#C5E9EA]'>CFO & Head of Finance</p>
                            <p className='text-base text-[#C5E9EA]'>Podcasts</p>
                            <p className='text-base text-[#C5E9EA]'>Software Integrations</p>
                            
                        </div>
                        
                    </div>
                  </div>
                  <div className="footer__bottom flex flex-col gap-15">
                        <div className="tepa">
                            <h1 style={{paddingBottom:'10px'}} className='text-[18px] text-white font-bold'>Speak to us</h1>
                            <p className='text-[16px] text-[#C5E9EA]'>Call 020 4530 8432</p>
                            <p className='text-[16px] text-[#C5E9EA]'>Refer a friend for £175</p>
                            <p className='text-[16px] text-[#C5E9EA]'>Partner with us</p>
                        </div>

                        <div className="past flex justify-between items-center">
                            <div className="past__left flex gap-30">
                                <p className='text-[18px] text-[#C5E9EA]'>© Accountancy Cloud 2021</p>
                                <p className='text-[18px] text-[#C5E9EA]'>Privacy Policy & Cookies</p>
                                <p className='text-[18px] text-[#C5E9EA]'>Terms of Service</p>
                            </div>
                            <div className="past__left">
                                <img src={Acca} alt="" />
                            </div>
                        </div>
                  </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footers