import React from 'react'
import ResearchPage from '../components/ResearchPage'

const Page = () => {
    return (
        <div className='mt-14'>
            <ResearchPage
                imagepath='/lioncouple2.jpg'

                title="Feeding Ecology"
                para1="We have conducted extensive research on the feeding ecology of various mammals, 
                focusing on understanding resource partitioning, niche overlap and the feeding habits by 
                collecting pellets, scats and dung in order to conduct microhistological assays to precisely
                determine their diets. This approach is complemented by vegetation surveys and the use of 
                remote sensing, GIS, and other software helps us to project habitat ranges and predict the 
                viability of specific mammals in particular areas."

                para2="This detailed understanding of feeding ecology is critical for developing effective 
                conservation policies. By identifying suitable habitats and the dietary needs of wildlife, 
                we can strategically relocate animals and maintain optimal conditions to ensure their survival. 
                Our comprehensive research approach integrates various ecological and technological methods, 
                significantly contributing to the sustainable management and conservation of mammalian 
                biodiversity."

                image2="/ecology-1.jpg"
                image3="/ecology-2.jpg"
            />
        </div>
    )
}

export default Page
