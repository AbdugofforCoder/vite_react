import React from 'react'

import {Diagramma, Loaction, Friends} from '../../assets'
const Switch = () => {
  return (
    <div>
        <main>
            <div className="container">
                <div style={{ marginBottom: '100px'}} className="main flex flex-col gap-20">
                    <h1 className='font-bold text-[58px]'>Why Switch? </h1>
                    <div className="cards flex gap-20">
                        <div className="card">
                            <img src={Diagramma} alt="" />
                            <h1 style={{paddingBottom: '10px'}} className='font-bold text-[28px]'>Powerful software</h1>
                            <p className='text-[18px] leading-7 w-[295px] font-medium'>Included in our service, each customer gets in-house software to access live <span className='text-[#0a49a7] cursor-pointer underline'>financial dashboards</span> and real-time management reports.</p>
                        </div>
                        <div className="card">
                            <img src={Loaction} alt=""/>
                            <h1 style={{paddingBottom: '10px'}} className='font-bold text-[28px]'>Track cashflow</h1>
                            <p className='text-[18px] w-[292px] font-medium'>Stay on top of your working capital, <span className='text-[#0a49a7] cursor-pointer underline'>taxes</span>, and cashflow, to ensure your business is performing at its best.</p>
                        </div>
                        <div className="card">
                            <img src={Friends} alt=""/>
                            <h1 style={{paddingBottom: '10px'}} className='font-bold text-[28px]'>Award winning support</h1>
                            <p className='text-[18px] w-[272px] font-medium'>Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.</p>
                        </div>
                    </div>
                    <button className='w-[235px] h-[50px] font-bold bg-[#F7B2B7] text-black rounded-[100px] text-[17px]'>Discover what we do</button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Switch