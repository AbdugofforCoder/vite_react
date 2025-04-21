import React from 'react'

import {Images} from '../../assets'
const Join = () => {
  return (
    <div>
        <main style={{marginBottom:'100px'}}>
            <div className="container">
                <div className="main flex gap-40 ">
                    <div className="main__left">
                        <h1 className='text-[28px] w-[236px]'>Join 200+ amazing companies</h1>
                    </div>
                    <div className="main__right">
                        <img src={Images} alt="" />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Join