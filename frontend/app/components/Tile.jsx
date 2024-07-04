import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Tile = ({ imagepath, title, description, link }) => {
    return (
        <div className='p-2 mx-2 border-transparent shadow-sm shadow-gray-400 rounded-lg w-[350px] h-[440px] sm:w-[500px] sm:h-[470px] my-4 hover:shadow-sm hover:shadow-black' >
            <Image
                className='rounded-xl'
                src={imagepath}
                width={600}
                height={400}
                alt="Team Image"
                style={{ objectFit: 'cover', width: '100%', height: '250px' }}
            />
            <h1 className='font-bold mt-4'>{title}</h1>
            <p className='text-[#828282] text-sm sm:text-md overflow-hidden text-ellipsis mt-4 mb-3'>{description}</p>

            {link && <Link className='underline hover:border-b-2 hover:border-yellow-400 hover:no-underline hover:font-semibold' href={link}>Know More</Link>}

        </div>
    )
}

export default Tile
