import React from 'react'

const Info = () => {
    return (
        <div className='bg-slate-100 px-[1rem] lg:px-[2rem] py-16 lg:flex justify-center flex-col items-center'>
            <h1 className='text-center text-3xl font-bold font-mono'>Get monthly products</h1>
            <p className='text-[12px] lg:w-[40%] font-light font-mono text-center'>suscribe to our products and get discount to get the complete skin care routine for your skin</p>
            <div className='flex flex-row mt-6 justify-center items-center gap-3'>
                <button className='px-2 py-1 border text-[13px] font-mono bg-slate-800 text-slate-50 hover:bg-slate-50 hover:border-slate-800 rounded-lg hover:text-slate-800 cursor-pointer'>Subscribe</button>
                <h1 className='text-[14px] font-bold font-mono'>See how it works</h1>
                <div className='w-4 h-4 bg-slate-800 rounded-full border'></div>
            </div>
        </div>
    )
}

export default Info