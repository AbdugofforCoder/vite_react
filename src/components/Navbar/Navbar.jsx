import React from 'react'

import { Frame, Laptop } from '../../assets'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <header>
            <div className="container max-sm:800px">
                <nav style={{marginTop: '27px'}} className="nav flex justify-evenly items-center ">
                    <div className="logo">
                        <img src={Frame} alt="" />
                    </div>
                    <div className="links flex gap-10 font-medium max-sm:hidden block">
                        <a href="">Home</a>
                        <a href="">How it worksa</a>
                        <a href="">What we do</a>
                        <a href="">Who we help</a>
                        <a href="">Resources</a>
                    </div>
                    <div className="flex gap-[30px] ">
                        <button className='border-[1px] w-20 h-10 rounded-[100px] max-sm:hidden block'>Login</button>
                        <button className='border p-6 w-40 h-11 bg-black text-white rounded-[100px] max-sm:hidden block'>Talk to an Expert</button>
                    </div>
                    <FaBars className='text-[50px] max-sm:block hidden' />

                </nav>
            </div>
        </header>
        <main>
            <div className="container">
                <div style={{marginTop: '70px'}} className="main flex items-center max-sm:flex-col">
                    <div className="main__left flex flex-col gap-18 max-sm:flex-col">
                        <div className="main__top flex flex-col gap-7">
                            <h1 className='font-bold text-[74px] leading-20 w-[600px]'>Get your finances right</h1>
                            <p className='text-[20px] w-[476px]'>Get your finances right with Accountancy Cloud. We offer the best accounting, R&D credits and CFO services for ambitious businesses who want to grow.</p>
                        </div>
                        <div className="main__bottom flex flex-col gap-5">
                            <h3 className='font-bold text-[18px]'>Switching to us is simple</h3>
                            <button className='border w-25 font-bold h-11 bg-black text-white rounded-[100px]'>Talk to us</button>
                        </div>
                    </div>
                    <div className="main__right">
                        <img src={Laptop} alt="" />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Navbar