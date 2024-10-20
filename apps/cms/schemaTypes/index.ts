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

const Video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Recommend title length < 40 characters',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'youtube_id',
      title: 'YouTube ID',
      description: 'YouTube video ID e.g. dQw4w9WgXcQ',
      type: 'string',
      validation: (rule) => rule.required().length(11),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Recommend description length < 40 characters',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Date and time of video publish',
    }),
  ],
})

const Subscribers = defineType({
  name: 'subscribers',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
  ],
})

export const schemaTypes = [Gig, Video, Subscribers]
