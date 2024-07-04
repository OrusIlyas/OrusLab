import React from 'react'
import Image from 'next/image'
import Tile from './Tile'
import Animation from './Animation'

const Hero = () => {
    return (

        <>

            <Animation />

            <div className='lg:m-20 md:m-10 sm:m-6'>

                <h1 className='lg:text-4xl p-3 md:text-3xl sm:text-xl text-black font-bold underline decoration-yellow-400'>About the Lab</h1>
                <p className='text-[#828282] p-3 lg:text-xl md:text-lg sm:text-md mt-6'>Our lab focuses on the conservation and population ecology of mammals and birds, specializing in the study of ungulates in central Indian landscapes, medium and high-altitude areas, as well as other large herbivores.
                    We are dedicated to understanding the complex interactions between wildlife and human communities, exploring the socio-economic dynamics that impact conservation efforts. Microhistology plays a key role in our research, providing detailed insights into the dietary patterns and ecological interactions of various species.
                </p>

                <p className='text-[#828282] p-3 lg:text-xl md:text-lg sm:text-md mt-6'>In addition to our work with large herbivores, we study avian ecology and behavior, investigating the intricate dynamics of bird populations and their environments. Our lab fosters a collaborative and inclusive research environment, encouraging innovative and diverse ecological studies.
                </p>

            </div>

            {/* <div className='flex flex-col p-10  sm:p-2 justify-center items-center lg:mx-10 md:mx-8 sm:mx-6'>
                <div>
                    <Image
                        className='rounded-xl px-4 my-2 sm:my-0'
                        src="/Team.png"
                        width={640}
                        height={610}
                        alt="Team Image"
                    />
                </div>

                <div>
                    <Image
                        className='rounded-xl px-4 my-2 sm:my-0'
                        src="/Team.png"
                        width={640}
                        height={610}
                        alt="Research Image"
                    />
                </div>

            </div> */}

            <div className='flex justify-center items-center text-center w-full'>
                <h1 className='my-10 text-lg sm:text-3xl text-black font-bold underline decoration-yellow-400'>Research Areas</h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center mx-20'>


                <Tile
                    imagepath="/cheetah.jpg"
                    title="Status and Conservation of Mammals"
                    description="Researching the population trends and conservation strategies for mammal species to ensure their survival."
                    link="/conservation"
                />

                {/* <Tile
                    imagepath="/spider.jpg"
                    title="Habitat Ecology and Niche Overlap"
                    description="Studying how different species share and compete for habitat resources to understand ecosystem dynamics."
                    link="/habitatEcology"
                /> */}

                <Tile
                    imagepath="/bird-1.jpg"
                    title="Feeding Ecology"
                    description=" Investigating the dietary habits and food sources of wildlife to uncover their roles in the ecosystem."
                    link="/feedingEcology"
                />

                <Tile
                    imagepath="/elephant2.jpg"
                    title="Understanding Human Aspect in Conservation"
                    description="Examining the impact of human activities on wildlife and developing strategies to promote coexistence and conservation."
                    link="/humanAspect"
                />

            </div>


        </>
    )
}

export default Hero
