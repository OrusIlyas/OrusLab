"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const People = ({ imagepath, name, description }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className='sm:flex mt-10' data-aos="fade-up">
            <div className='w-64 h-64'>
                <Image
                    src={imagepath}
                    width={250}
                    height={250}
                    alt='person-image'
                    className='object-cover w-full h-full rounded-xl'
                />
            </div>

            <div className='flex justify-start items-start flex-col mt-2 sm:ml-5 w-[250px] sm:w-[310px] '>
                <h1 className='text-2xl font-bold underline decoration-yellow-400'>{name}</h1>
                <p className='text-xs text-justify mt-2 border-l-2 border-gray-300 pl-3'>{description}</p>
            </div>
        </div>
    )
}

export default People
