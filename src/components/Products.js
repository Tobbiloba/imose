import React from 'react'

const Products = () => {
    return (
        <div className='px-[1rem] lg:px-[2rem] bg-red-50 py-6 lg:py-10 lg:flex lg:flex-row justify-between'>
            <div className='w-[40vw] lg:w-[17%]'>
                <p className='text-[13px] leading-6 lg:leading-8'>consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className='w-[100%] lg:w-[70%] mt-4 h-[60vh] bg-yellow-50 flex justify-center items-center'>
                <h1 className='text-white font-mono'>Image</h1>
            </div>
        </div>
    )
}

export default Products