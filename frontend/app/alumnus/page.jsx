import React from 'react'
import People from '../components/People'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
            <div>
                <h1 className='text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400'>Meet our Alumni</h1>
            </div>

            <div className='w-11/12'>
                <div className='flex flex-col sm:flex-row justify-between items-center sm:mt-10'>
                    <People
                        imagepath="/Shaheer.jpeg"
                        name="Dr. Shaheer Khan"
                        description="I completed my PhD on the movement ecology of Indian wolves in a 
                    human dominated landscape. My primary interests lie in large carnivore ecology, 
                    movement ecology, urban wildlife, and the impact of linear infrastructure on wildlife 
                    ecology."

                    />

                    <People
                        imagepath="/AbdulHaleem.jpeg"
                        name="Dr. Abdul Haleem"
                        description="Wildlife biologist and biodiversity specialist since 2014, with extensive experience 
                        in the Kumaon, Garhwal, and Shivalik Himalayas. Completed a PhD in Pench Tiger Reserve. Also experienced
                        in sustainable development internationally, notably in NEOM's The Line Project, The Red Sea Development Project, and 
                        various regions in Saudi Arabia."

                    />
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>
                    <People
                        imagepath="/Farah.jpeg"
                        name="Dr. Farah Akram"
                        description="Currently an Assistant Professor at Raja Mahendra Pratap Singh State 
                        University in Aligarh, I have completed my PhD focusing on the &#34;Ecological 
                        assessment of wetlands in Aligarh district with special reference to birds.&#34; 
                        My research explored the intricate relationships between wetland ecosystems and avian 
                        populations. My primary interests lie in wetland ecology and its assessment, the ecology 
                        of birds and mammals, and the impact of urbanization on wildlife."

                    />

                    <People
                        imagepath="/Talat.jpeg"
                        name="Dr. Talat Parveen"
                        description="I conducted my PhD research on assessing and surveying the presence of 
                        ungulates. The study aimed to investigate the conservation status, ecology, and 
                        co-existence of sympatric ungulates in Panna Tiger Reserve, Madhya Pradesh, India. 
                        My primary research interests include wildlife conservation, ungulate ecology, and the 
                        dynamics of co-existence among sympatric species."

                    />
                </div>



                <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>
                    <People
                        imagepath="/Zareen.jpg"
                        name="Dr. Zarreen Syed"
                        description="I am a trained wildlife ecologist specializing in the conservation of 
                        wild ungulates in the Himalayan region. My expertise includes empirical research and 
                        conflict mitigation between humans and animals. I have conducted extensive fieldwork 
                        to understand ungulate ecology and behavior. My goal is to develop effective 
                        conservation strategies and sustainable solutions for human-wildlife coexistence."

                    />

                    {/* <People
                        imagepath="/AbdulHaleem.jpeg"
                        name="Dr. Abdul Haleem"
                        description="Wildlife biologist and biodiversity specialist since 2014, with extensive experience 
                        in the Kumaon, Garhwal, and Shivalik Himalayas. Completed a PhD in Pench Tiger Reserve. Also experienced
                        in sustainable development internationally, notably in NEOM's The Line Project, The Red Sea Development Project, and 
                        various regions in Saudi Arabia."

                    /> */}
                </div>

            </div>
        </div>
    )
}

export default page
