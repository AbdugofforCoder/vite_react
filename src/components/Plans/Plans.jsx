import React from 'react'

import {Roket1, Roket2, Roket3} from '../../assets'
const Plans = () => {
  return (
    <div>
        <main style={{marginBottom:'100px'}} className='bg-[#fac8cb]'>
            <div className="container">
                <div style={{padding:'50px'}} className="main">
                    <h1 className='text-[58px] font-normal'>Plans built for growth</h1>
                        <div className="cards flex gap-30">
                            <div className="card">
                                <img src={Roket1} alt="" />
                                <h1  className='text-[28px] font-bold'>Early stage startup </h1>
                                <p className='w-[304px] text-[18px]'>Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth. We get you moving quickly with an accounting solution that does what you need.</p>
                            </div>
                            <div className="card">
                                <img src={Roket2} alt="" />
                                <h1 className='text-[28px] font-bold'>Scale up</h1>
                                <p className='w-[302px] text-[18px]'>Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, R&D credits and CFO problems, solved.</p>
                            </div>
                            <div className="card">
                                <img src={Roket3} alt="" />
                                <h1 className='text-[28px] font-bold'>High growth</h1>
                                <p className='w-[302px] text-[18px]'>Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.</p>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Plans