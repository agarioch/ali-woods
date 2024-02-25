# Ali Woods Gigs

This repository contains a Nextjs application for Ali Wood's public website, [aliwoodsgigs.com](https://aliwoodsgigs.com).

## Getting Started

See Readme in root folder.

## Dependencies

- [nextjs](https://nextjs.org/) - UI Framework: Rendering, routing and build tooling
- [tailwindcss](https://tailwindcss.com/) - Styling: utility-first css framework
- [clsx](https://github.com/lukeed/clsx#readme) - Styling: small lib to help construct classnames
- [framer-motion](https://www.framer.com/motion/) - Animation: motion library for React
- [date-fns](https://date-fns.org/) - Dates: date utility library; using for date formatting
- [next-seo](https://github.com/garmeeh/next-seo) - SEO - simplify creation of metatags
- [@sanity/client](https://www.sanity.io/docs/js-client) - Content - helper library to make queries to the Sanity Content cloud

## Developer Notes

**On Demand Incremental Static Regeneration**: when adding a new content type in the CMS that is consumed by the website, remember to update the mapping of Sanity content \_types to pages in the `/pages/api/revalidate.ts` file.

E.g. if a new content type 'podcast' is required on the home and podcasts pages then `podcast: ['/', '/podcasts']` should be added to the mapping.
