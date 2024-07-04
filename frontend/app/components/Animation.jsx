"use client";

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Animation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])
    return (
        <div className='flex justify-center items-center mt-16' data-aos="fade-up">
            <div >
                <Image
                    className=''
                    src="/deer-6.png"
                    width={1400}
                    height={700}
                    alt="Hero Image"
                />

                {/* <div className='absolute inset-0 flex items-end justify-end p-5'>
                        <h1 className='text-lg font-bold sm:text-5xl text-right text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                            Observing Wildlife,<br /> Understanding Roles
                        </h1>
                    </div> */}
            </div>
        </div>

    )
}


export default Animation
