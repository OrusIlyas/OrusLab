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
        // defineField({
        //     name: 'year',
        //     title: 'Year',
        //     type: 'number',
        // }),
        // defineField({
        //     name: 'author',
        //     title: 'Author',
        //     type: 'text',
        // }),

    ],

    preview: {
        select: {
            title: 'title',
            // subtitle: 'subtitle',
        },
    },
})