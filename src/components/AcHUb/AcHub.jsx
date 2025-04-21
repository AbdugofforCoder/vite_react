import React from 'react'

import {Youtube} from '../../assets'
const AcHub = () => {
  return (
    <div>
        <main style={{marginBottom:'100px'}}>
            <div className="container">
                <div className="main flex gap-45 items-center">
                    <div className="The flex flex-col gap-8">
                        <h1 className='text-[58px] font-bold'>The AC Hub</h1>
                        <p className='w-[547px] text-[20px]'>Explore our dedicated online resources. We've got the tips, tricks and online accounting know-how for business success.</p>
                        <button className='w-[140px] h-[50px] bg-[#F7B2B7] rounded-4xl text-[18px] font-bold'>View Hub</button>
                    </div>
                    <div className="documnt">
                        <img src={Youtube} alt="" />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default AcHub