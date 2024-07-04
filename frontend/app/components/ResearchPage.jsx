"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const ResearchPage = ({ imagepath, image2, image3, title, para1, para2 }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className='flex flex-col justify-center items-center' data-aos="fade-up">
            <Image
                src={imagepath}
                width={1400}
                height={1000}
                alt='Research Image'
                className='w-full h-96 object-cover'
            />
            <h1 className='text-xl sm:text-4xl font-bold underline decoration-yellow-400 mt-10'>{title}</h1>
            <p className='text-[#828282] text-sm sm:text-xl overflow-hidden text-ellipsis mt-10 mb-3 w-4/5'>{para1}</p>
            <p className='text-[#828282] text-sm sm:text-xl overflow-hidden text-ellipsis mt-4 mb-3 w-4/5'>{para2}</p>

            <div className='flex flex-col sm:flex-row justify-center items-center'>
                <Image
                    className='w-full h-[400px] p-6 object-cover'
                    src={image2}
                    width={600}
                    height={500}
                    alt='Image 1'
                />
                <Image
                    className='w-full h-[400px] p-6 object-cover'
                    src={image3}
                    width={600}
                    height={500}
                    alt='Image 2'
                />
            </div>
        </div>
    )
}

export default ResearchPage
