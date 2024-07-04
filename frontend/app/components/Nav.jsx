"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center border-b-[1px] border-gray-200 py-4 shadow-md bg-white'>
            <div className='ml-4 sm:ml-10 font-bold text-xl sm:text-2xl cursor-pointer'>
                <Link href="/">Orus Ilyas Lab</Link>
            </div>

            <div className='hidden sm:flex mr-10'>
                <Link href="/"><span className='mx-3 text-sm sm:text-md cursor-pointer hover:border-yellow-400 hover:no-underline hover:font-semibold hover:border-b-2'>Home</span></Link>
                <Link href="/people"><span className='mx-3 text-sm sm:text-md cursor-pointer hover:border-yellow-400 hover:no-underline hover:font-semibold hover:border-b-2'>People</span></Link>
                <Link href="/research"><span className='mx-3 text-sm sm:text-md cursor-pointer hover:border-yellow-400 hover:no-underline hover:font-semibold hover:border-b-2'>Research</span></Link>
                <Link href="/contactus"><span className='bg-black text-white rounded-lg hover:bg-white hover:text-black p-2 border-2 border-black mx-3 cursor-pointer'>Contact</span></Link>
            </div>

            <div className='sm:hidden mr-10'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <TiThMenu className='z-50 h-6 w-6 text-black' />
                </button>
            </div>

            {isMenuOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative bg-white border-2 border-black rounded-lg shadow-lg p-14'>
                        <button
                            className='absolute top-0 right-0 m-4 text-black text-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            &times;
                        </button>
                        <div className='flex flex-col justify-center items-start'>
                            <Link href="/"><span className='block my-5 mx-5 mb-3 text-lg cursor-pointer font-semibold border-b-[1px] border-yellow-400'>Home</span></Link>
                            <Link href="/people"><span className='block my-5 mx-5 mb-3 text-lg cursor-pointer font-semibold border-b-[1px] border-yellow-400'>People</span></Link>
                            <Link href="/research"><span className='block my-5 mx-5 mb-3 text-lg cursor-pointer font-semibold border-b-[1px] border-yellow-400'>Research</span></Link>
                            <Link href="/contactus"><span className='block my-5 mx-5 mb-3 text-lg cursor-pointer font-semibold border-b-[1px] border-yellow-400'>Contact</span></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
