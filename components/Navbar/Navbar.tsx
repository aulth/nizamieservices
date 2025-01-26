import React from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    return (
        <header className='md:px-0 px-2 border-b'>
            <div className="w-full  md:max-w-6xl flex justify-between mx-auto py-2">
                <div className='font-poppins'>
                    <h1 className='font-bold text-[21px] leading-[0.95]'>Nizami <br />eServices</h1>
                </div>
                <MobileMenu />
            </div>
        </header>
    )
}
