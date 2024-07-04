import React from 'react'
import People from '../components/People'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
            <div>
                <h1 className='text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400'>Meet our PhD Candidates</h1>
            </div>

            <div className='w-11/12'>
                <div className='flex flex-col sm:flex-row justify-between items-center sm:mt-10'>
                    <People
                        imagepath="/Shahzada.jpg"
                        name="Shahzada Iqbal"
                        description="My research adopts an interdisciplinary approach, integrating 
                        field-based, quantitative, and conceptual methods to explore the complex interactions 
                        between people, wildlife, and ecosystems. My primary focus is on carnivore ecology and 
                        human-wildlife interactions, particularly examining human-wildlife conflicts and the 
                        behavioral responses of large carnivores to anthropogenic disturbances. Currently, I 
                        am working on a project focusing on the Indian Wolves in Palamau Tiger Reserve."
                    />

                    <People
                        imagepath="/Yashi.jpg"
                        name="Yashi Singh"
                        description="I am a wildlife biologist passionate about wildlife conservation with a special 
                        focus on mammalian and carnivore ecology, particularly tigers, leopards, and elephants. My research 
                        interests include biodiversity conservation, mammalian ecology, carnivore ecology, population ecology, 
                        and human-animal interactions."

                    />


                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>
                    <People
                        imagepath="/Sneha.jpeg"
                        name="Sneha Singh"
                        description="My PhD research is focusing on the &#34;Status, Distribution, Winter 
                        Ecology, and Threats of the Globally Near-Threatened Pallid Harrier (Circus macrourus) 
                        in Arid Zones of Rajasthan, India.&#34; The study is examining the distribution patterns,
                         ecological needs, and conservation challenges of the Pallid Harrier during the winter 
                         season. My primary interests include raptor ecology, avian conservation, habitat change 
                         impacts on bird populations, and wildlife conservation strategies."

                    />

                    <People
                        imagepath="/Aiman.jpg"
                        name="Aiman Hafeez"
                        description="Fascinated by the intricate relationship within ecosystems and the unique roles each species plays, 
                        I am dedicated to understanding and conserving biodiversity and  have a keen interest in studying 
                        animal behavior, habitats and ecosystems. My goal is to contribute to sustainable conservation efforts 
                        and inspire others to appreciate and protect our planet's incredible biodiversity."
                    />
                </div>



                <div className='flex flex-col sm:flex-row justify-between items-center mt-10'>

                    <People
                        imagepath="/Mohsin.jpeg"
                        name="Mohsin Javed"
                        description="I am an ecologist pursuing a Ph.D. in Wildlife Sciences at Aligarh Muslim 
                        University, with a B.Sc. in Forestry and an M.Sc. in Wildlife Sciences. I have worked 
                        on conservation projects for mammals and birds, collaborating with national institutes 
                        and organizations. My experience includes designing field trials for wildlife assessments, 
                        conducting micro-histological studies, and using satellite tagging to monitor wildlife. 
                        I excel in scientific literature reviews, technical report preparation, and possess strong analytical 
                        and communication skills."
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
