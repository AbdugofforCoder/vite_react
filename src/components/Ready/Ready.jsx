import React from 'react'

const Ready = () => {
  return (
    <div>
        <main style={{marginBottom:'100px'}}>
            <div style={{padding:'70px'}} className="container bg-[#53d2d6] rounded-[10px] flex justify-between items-center">
                    <div className="ready flex flex-col gap-3">
                    <h1 className='text-[46px] font-bold'>Ready to Switch? It's simple.</h1>
                    <p className='text-[20px]'>Speak to an expert today</p>
                </div>
                <button className='bg-[#000] text-white w-[159px] h-[50px] rounded-4xl'>Get Started</button>
            </div>
            
        </main>
    </div>
  )
}

export default Ready