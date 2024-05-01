import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
            <h1 className='text-red-600 font-bold cursor-pointer text-4xl'>NETFLIX</h1>
            <div>
                <button className='text-white pr-4'>Sign In</button>
                <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </div>
        </div>
    )
}
