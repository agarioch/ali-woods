# Ali Woods Gigs

This repository contains a Nextjs application for Ali Wood's public website, [aliwoodsgigs.com](https://aliwoodsgigs.com).

## Getting Started

To get started with this project, follow these steps:

### Local Development Steup

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`
3. Start the development server by running `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to view the website.

### Production Build

TODO: replace Adobe Fonts link with link belonging to Ed or Ali W.

1. Build the application `npm run build`
2. Start the application `npm run start`

## Deployment Guide

The instructions below are for deployment to Vercel.

### Development

- Commit changes to `develop` (or new feature) branch
- Push changes to GitHub remote origin

```shell
git checkout develop
# make changes to code
git add .
git commit -m 'feat: add some example change'
git push origin develop
```

- Vercel should automatically create a new deployment with the latest changes
- Manually test the deployment (view all deployments at `https://vercel.com/{user}/{project-name}/deployments`)

### Production

- When ready to push live, merge changes into `main` branch & push to GitHub

```shell
git checkout main
git merge develop
git push origin main
```

## Dependencies

- [nextjs](https://nextjs.org/) - UI Framework: Rendering, routing and build tooling
- [tailwindcss](https://tailwindcss.com/) - Styling: utility-first css framework
- [clsx](https://github.com/lukeed/clsx#readme) - Styling: small lib to help construct classnames
- [framer-motion](https://www.framer.com/motion/) - Animation: motion library for React
- [date-fns](https://date-fns.org/) - Dates: date utility library; using for date formatting
- [next-seo](https://github.com/garmeeh/next-seo) - SEO - simplify creation of metatags
