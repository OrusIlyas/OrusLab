import React from 'react'
import ResearchPage from '../components/ResearchPage'

const Page = () => {
    return (
        <div>
            <ResearchPage
                imagepath='/jackal.JPG'
                title="Status and Conservation of Mammals"
                para1="We have conducted extensive research on the conservation, status, and ecology of 
                mammals, with a particular focus on ungulates. Our studies explore the population status, 
                distribution, and ecological co-existence of sympatric species, providing crucial insights into 
                their interactions and conservation needs. We investigate resource partitioning, habitat use, 
                and niche overlap, which are essential for developing effective conservation strategies."
                para2="Our work spans diverse ecosystems, including high-altitude regions of the Himalayas and
                various tiger reserves in Madhya Pradesh. We primarily conduct status, abundance, and 
                density estimations through both direct and indirect evidence, such as encounter rates, 
                pellet group sampling, and scat analysis. This comprehensive and multidisciplinary approach 
                significantly contributes to understanding and conserving India's mammalian biodiversity."
                image2="/bengaltiger.jpg"
                image3="/zebra.jpg"
            />
        </div>
    )
}

export default Page
