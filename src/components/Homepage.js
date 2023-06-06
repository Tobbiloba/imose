import React from 'react'
import Menu from './Menu'
const Homepage = () => {
    return (
        <div className='bg-yellow-50'>
            <Menu />
            <div className=' flex flex-col px-[1rem] lg:px-[2rem]'>
                <div className='flex flex-col lg:flex-row  items-end  mt-4'>
                    <div className='w-[100%] lg:w-[70%] h-[45vh] border flex items-center justify-center bg-gray-500'>
                        <h1 className='text-white text-2xl font-mono'>Product name banner</h1>
                    </div>
                    <div className='w-[50%] lg:w-[30%] relative bottom-[1px] bg-slate-800 h-[30vh] lg:h-[40vh] flex items-center justify-center'>
                        <h1 className='text-white font-mono'>Image</h1>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row border'>
                    <div className='w-[100%] lg:w-[70%] h-[40vh] bg-orange-50 flex justify-center items-center'>
                        <h1 className='text-slate-500 font-mono'>Image</h1>
                    </div>
                    <div className='flex flex-row lg:w-[70%]'>
                        <div className='w-[50%] lg:w-[60%] lg:h-[40vh] relative bottom-[1px] bg-slate-800 h-[30vh] flex items-center justify-center'>
                            <h1 className='text-white font-mono'>Image</h1>
                        </div>
                        <div className='w-[50%] lg:w-[40%] pl-3 lg:pl-8 pt-4'>
                            <p className='text-[12px] leading-[30px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Homepage