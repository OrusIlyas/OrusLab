import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'researchJournalPapers',
    title: 'Research Journal Papers',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
    ],
})