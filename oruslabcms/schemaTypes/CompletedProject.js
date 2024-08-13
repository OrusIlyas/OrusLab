import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'completedProjects',
    title: 'Completed Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year/Duration',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'fundedby',
            title: 'Funded By',
            type: 'string',
        }),
        // defineField({
        //     name: 'timestamp',
        //     title: 'Timestamp',
        //     type: 'datetime',
        // }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
})
