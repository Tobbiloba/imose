import React, { useState } from 'react'


//icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className='px-[1rem] lg:px-[2rem] bg-slate-50'>
            <div className='flex lg:hidden'>
                <div className='flex  flex-row justify-between w-screen py-3'>
                    <h1 className='text-xl font-mono'>Imose</h1>
                    <MenuIcon onClick={handleMenu} className='cursor-pointer' />
                </div>

                {
                    toggleMenu && <div className='absolute z-10 h-[100vh] w-[100vw] right-0 top-0  flex flex-row'>
                        <div className='w-[25vw] h-[100vh] backdrop-blur-[2px] bg-white/10' onClick={handleMenu}></div>
                        <div className='absolute h-[100vh] w-[75vw] right-0 top-0 bg-slate-50 flex flex-col justify-between py-6 px-2'>
                            <div className='flex justify-end'>
                                <CloseIcon style={{ fontSize: '28px' }} onClick={handleMenu} className='cursor-pointer' />
                            </div>
                            <div>
                                <h1 className='mt-4 text-2xl font-bold font-mono text-slate-700 text-center hover:underline hover:text-slate-900 cursor-pointer'>About</h1>
                                <h1 className='mt-4 text-2xl font-bold font-mono text-slate-700 text-center hover:underline hover:text-slate-900 cursor-pointer'>Blog</h1>
                                <h1 className='mt-4 text-2xl font-bold font-mono text-slate-700 text-center hover:underline hover:text-slate-900 cursor-pointer'>Products</h1>
                                <h1 className='mt-4 text-2xl font-bold font-mono text-slate-700 text-center hover:underline hover:text-slate-900 cursor-pointer'>Contact</h1>
                            </div>
                            <div className='flex justify-end'>
                                <button className='px-8 py-2 text-white font-bold font-mono bg-slate-600 rounded-xl hover:border hover:bg-slate-50 hover:border-slate-600 hover:text-slate-600'>Buy</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='lg:flex flex-row justify-between py-3 hidden'>
                <div>
                    <h1 className='text-xl font-mono'>Imose</h1>
                </div>
                <div className='flex flex-row gap-4'>
                    <h1 className='text-[14px] font-mono hover:underline hover:font-bold hover:text-[15px] cursor-pointer'>About</h1>
                    <h1 className='text-[14px] font-mono hover:underline hover:font-bold hover:text-[15px] cursor-pointer'>Blog</h1>
                    <h1 className='text-[14px] font-mono hover:underline hover:font-bold hover:text-[15px] cursor-pointer'>Products</h1>
                    <h1 className='text-[14px] font-mono hover:underline hover:font-bold hover:text-[15px] cursor-pointer'>Contact</h1>
                </div>
                <div>
                    <button className='px-8 py-1 text-white text-[14px] font-mono bg-slate-600 rounded-xl hover:border hover:bg-slate-50 hover:border-slate-600 hover:text-slate-600'>BUY</button>
                </div>
            </div>
        </div>
    )
}

export default Menu