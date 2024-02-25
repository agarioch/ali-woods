import {defineField, defineType} from 'sanity'

const Gig = defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date of the gig, will show TBA if not set',
    }),
    defineField({
      name: 'tickets_status',
      title: 'Tickets Status',
      description: 'Select whether tickets are sold out, available or coming soon.',
      type: 'string',
      initialValue: 'buy_now',
      options: {
        list: [
          {title: 'Sold out', value: 'sold_out'},
          {title: 'Buy now', value: 'buy_now'},
          {title: 'Coming Soon', value: 'coming_soon'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'tickets_url',
      title: 'Tickets URL',
      type: 'url',
      description:
        'Full URL for website to buy tickets e.g. https://www.ticketmaster.com/event/12345',
    }),
  ],
  preview: {
    select: {
      location: 'location',
      date: 'date',
      tickets_status: 'tickets_status',
    },
    prepare(selection) {
      const {location, date, tickets_status} = selection
      const dateLabel = date ? new Date(date).toLocaleDateString() : 'TBA'
      return {
        title: `${location} - ${dateLabel}`,
        subtitle: tickets_status,
      }
    },
  },
})

export const schemaTypes = [Gig]
