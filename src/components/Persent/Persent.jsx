import React from 'react'

import { Persent } from '../../assets'
const Qism = () => {
  return (
    <div>
        <main>
            <div className="container">
                <div style={{marginTop: '120px', 'marginBottom': '100px'}} className="main flex gap-50 items-center">
                    <div className="main__left">
                        <img src={Persent} alt="" />
                    </div>
                    <div className="main__right flex flex-col gap-8">
                        <h1 className='w-[443px] text-[57px] leading-[75px] font-bold '>The best finance stack for entrepreneurs</h1>
                        <p className='w-[563.5px] text-[20px]'>70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems, solved. Complete our <span className='text-[#115ed1] cursor-pointer'>contact form,</span> and find out why 9 out of 10 customers recommend us.</p>
                    </div>
                </div>
            </div>
        </main>
   </div>
  )
}

export default Qism