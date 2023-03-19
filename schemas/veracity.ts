import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'veracity',
  title: 'Veracity',
  type: 'document',
  fields: [
    defineField({
      name: 'veracity',
      title: 'Veracity',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
