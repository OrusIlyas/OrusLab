import React from 'react'
import CurrentProjects from '../components/CurrentProjects'
import CompletedProjects from '../components/CompletedProjects'
import ResearchJournalPapers from '../components/ResearchJournalPapers'
import PublishedBooksAuthored from '../components/PublishedBooksAuthored'
import PublishedBooksEdited from '../components/PublishedBooksEdited'


const Research = () => {
    return (
        <div className='mt-20'>
            <CurrentProjects />
            <CompletedProjects />
            <PublishedBooksAuthored />
            <PublishedBooksEdited />
            <ResearchJournalPapers />
        </div>
    )
}

export default Research
