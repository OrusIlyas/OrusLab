import React from 'react'
import ResearchPage from '../components/ResearchPage'

const Page = () => {
    return (
        <div>
            <ResearchPage
                imagepath='/Conservation-header.jpg'

                title="Understanding Human Aspect in Conservation"

                para1="We have conducted extensive research on the interplay between human activities 
                and wildlife conservation, with a strong emphasis on the human aspect in conservation. 
                Our studies delve into the impact of human disturbance on habitat quality and the differential 
                use of habitats by wildlife. We also explore the effects of human activities on habitat, 
                considering factors such as resource exploitation and land use changes.
"

                para2="Our work highlights the importance of integrating local communities into conservation 
                efforts and emphasizes the need to understand and respect indigenous knowledge systems. 
                Additionally, we investigate the dynamics of wildlife trade and its implications for 
                conservation.

                To inform our research and conservation strategies, we conduct socioeconomic surveys and 
                questionnaire surveys. These surveys are conducted on primary stakeholders, such as the people 
                living in conflict zones and those involved in illegal trading activities, helping us understand
                human perceptions, level of awareness and the pressures on both humans and wildlife, particularly in conflict zones.

                By integrating these aspects into our research, we aim to develop more effective and 
                sustainable conservation strategies. This holistic approach underscores the critical 
                role of understanding human dimensions in wildlife conservation."

                image2="/Conservation-1.jpg"
                image3="/Conservation-2.jpg"
            />
        </div>
    )
}

export default Page
