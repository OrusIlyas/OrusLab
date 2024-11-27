import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'phdStudents',
    title: 'PhD Students',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the person',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A short description or bio of the person',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of the person',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the image',
                },
            ],
        }),

    ],
})
