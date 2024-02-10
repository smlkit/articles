---
title: "Types of prerendering in Next.js"
date: "10-02-2024"
---

Next.js uses two form of pre-rendering: **SSG (Static Site Generation)** and **(SSR) Server-side Rendering**. The difference is in **when** it generates the HTML for the page.

- If a page uses **Static Generation**, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.

- If a page uses **Server-side Rendering**, the page HTML is generated on each request.
