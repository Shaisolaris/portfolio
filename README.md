# Solaris — Live Product Demos Hub

One URL that links to all seven Solaris product demos. Drop this in Upwork proposals, LinkedIn messages, cold emails — anywhere a client wants proof of work in ten seconds.

**Live:** https://shaisolaris.github.io/portfolio/

## What's here

A single static page (plain HTML + Tailwind CDN, no build step) that showcases seven live demos:

1. [Solaris CRM](https://shaisolaris.github.io/solaris-crm-demo/) — dashboard, contacts, pipeline
2. [Solaris Analytics](https://shaisolaris.github.io/solaris-analytics-demo/) — product & growth analytics
3. [Solaris Commerce](https://shaisolaris.github.io/solaris-commerce-demo/) — merchant operations
4. [Solaris AI Chat](https://github.com/Shaisolaris/solaris-ai-chat) — streaming AI assistant
5. [Solaris Voice Agent](https://github.com/Shaisolaris/solaris-voice-agent) — Vapi receptionist
6. [n8n Lead Capture](https://github.com/Shaisolaris/n8n-lead-capture) — automation flow
7. [Solaris Sales Funnel](https://shaisolaris.github.io/solaris-sales-funnel/) — 3-step checkout

## Deployment

Deploys to GitHub Pages via a single workflow on push to `main`. Because it's static HTML, the workflow is trivially simple — no build, no npm install, just upload `index.html` + `.nojekyll`.

## Updating

To add a new demo: edit the grid section in `index.html` and push. That's it.
