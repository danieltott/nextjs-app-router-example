# Next.js App Router Example

This repo contains examples from my talk on the new Next.js App Router.

- [Video for Part 1](https://www.youtube.com/watch?v=faE-G7_bQqU)

The talk is broken up into sections - and each section has a corresponding Pull Request.

The `main` branch (what you're looking at right now) has the full thing, each Pull Request is based off of the other, starting with the Base Install.

See the full running app [here on Vercel](https://nextjs-app-router-example.vercel.app/)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [App Router Playground](https://app-router.vercel.app/)
- [Next.js on React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components)
- [React Server Components on patterns.dev](https://www.patterns.dev/posts/react-server-components)
- [Hacker News thread by Dan Abramov](https://news.ycombinator.com/item?id=25499171)

## Talk Sections:

### 0: Base install

_(branch only, no PR)_

We start with the output of `npx create-next-app@latest`, with a couple small adjustments

- Update design
- Use `pnpm`

### [1: Intro, Routes and Layouts](https://github.com/danieltott/nextjs-app-router-example/pull/6)

[Running App on Vercel](https://nextjs-app-router-example-git-01-intro-routes-3bd35e-danieltott.vercel.app)

- Add some basic [routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- Add a [Root Layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)
- Add some [nested layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)
- Add some examples of [Client Components](https://nextjs.org/docs/getting-started/react-essentials)

### [2: Route Groups and Dynamic Routes](https://github.com/danieltott/nextjs-app-router-example/pull/7)

[Running App on Vercel](https://nextjs-app-router-example-git-02-groups-and-dynamic-danieltott.vercel.app)

- Add a [Route Group](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- Add a [Dynamic Route](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- Add [Dynamic Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata)

### [3: Handling Errors](https://github.com/danieltott/nextjs-app-router-example/pull/8)

[Running App on Vercel](https://nextjs-app-router-example-git-03-errors-danieltott.vercel.app)

- Add [error handlers](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- Add [404 handlers](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

### [4: Data Fetching](https://github.com/danieltott/nextjs-app-router-example/pull/9)

[Running App on Vercel](https://nextjs-app-router-example-git-04-data-fetching-danieltott.vercel.app)

- Add [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to Route
- Add [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to Layout
- Add [`loading.js` files](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

### [5: Suspense](https://github.com/danieltott/nextjs-app-router-example/pull/10)

[Running App on Vercel](https://nextjs-app-router-example-git-05-suspense-danieltott.vercel.app)

- Add [`Suspense`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) example

### [6: Rendering and Caching](https://github.com/danieltott/nextjs-app-router-example/pull/11)

[Running App on Vercel](https://nextjs-app-router-example-git-06-caching-danieltott.vercel.app)

- Data `fetch` on [static route](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#static-rendering-default)
- Data `fetch` on [dynamic route](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#dynamic-rendering)
- `fetch` with [`cache: no-store`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching)
- `fetch` with [`revalidate: 0`](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- `fetch` with [`revalidate: 5`](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- `fetch` with a Static page + [`revalidate = true` Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate)

## Running Locally

This repo requires `node` and `pnpm`

### Installing `node`:

The best way to install `node` is to [download the installer](https://nodejs.org/en/) from their site. This repo requires `node` version `18.16`, which is the latest [LTS version](https://nodejs.dev/en/about/releases/).

If you already have a different version of `node` installed, but don't want to update globally, you can install [a package called `nvm`](https://github.com/nvm-sh/nvm), which will allow you to easily switch `node` versions. Once you have `nvm` installed (or if you already have it installed), you can run `nvm use` in the main directory and it will install the proper version of `node`.

### Installing `pnpm`:

`pnpm` is a package manager that is used to install the rest of our dependencies.

Read more about `pnpm` [on their docs site](https://pnpm.io/motivation).

The best way to install `pnpm` for this project is by using [Corepack](https://nodejs.org/api/corepack.html), a new feature bundled with Node.

Install pnpm via corepack with the following commands:

```sh
corepack enable
corepack prepare
```

Then follow the normal nextjs instructions:

---

# Next.js Auto-Generated README:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
