# Customer Portal

![App Preview](https://imgix.cosmicjs.com/92b71f30-8764-11f1-ac64-27ec44a0100e-autopilot-photo-1611926653458-09294b3142bf-1784900145303.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, multilingual (Arabic/English) Customer Portal built with Next.js 16 and Cosmic CMS. Manage subscription plans, customers, social media integrations, and scheduled social posts — with full RTL support for Arabic.

## Features

- 🌍 **Bilingual (AR/EN)** with automatic RTL layout switching for Arabic
- 💳 **Subscription Plans** — display pricing, features, and billing cycles
- 👤 **Customer Directory** — view customer accounts, roles, and account status
- 🔌 **Social Integrations** — WhatsApp, Facebook, Instagram, and X connection statuses
- 📅 **Social Posts** — publishing and scheduling overview with target channels
- 📱 **Fully Responsive** — beautiful on mobile, tablet, and desktop
- ⚡ **Server-side rendered** — fast, SEO-friendly pages powered by Cosmic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a6369c9d8e32f8df93cbad6&clone_repository=6a636afed8e32f8df93cbb32)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: ابنِ تطبيق Flutter + Firebase عربي/إنجليزي باسم Customer Portal. فيه تسجيل/دخول، اختيار لغة، اشتراكات، لوحة عميل، لوحة admin، ربط WhatsApp Cloud API وFacebook/Instagram/X inbox، ونشر وجدولة على السوشيال ميديا. اجعل التطبيق RTL للعربية، multi-language، وجاهز MVP مع هيكل ملفات مرتب وتعليمات تشغيل."

### Code Generation Prompt

> ابنِ تطبيق Flutter + Firebase عربي/إنجليزي باسم Customer Portal. فيه تسجيل/دخول، اختيار لغة، اشتراكات، لوحة عميل، لوحة admin، ربط WhatsApp Cloud API وFacebook/Instagram/X inbox، ونشر وجدولة على السوشيال ميديا. اجعل التطبيق RTL للعربية، multi-language، وجاهز MVP مع هيكل ملفات مرتب وتعليمات تشغيل.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — [Cosmic docs](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the bucket configured

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all subscription plans
const { objects: plans } = await cosmic.objects
  .find({ type: 'subscription-plans' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single customer with connected plan
const { object: customer } = await cosmic.objects
  .findOne({ type: 'customers', slug: 'jane-doe' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types:

- **subscription-plans** — bilingual names/descriptions, price, billing cycle, features, popular flag
- **customers** — full name, email, company, preferred language, role, account status, subscribed plan
- **social-integrations** — channel, account name, connection status, owner
- **social-posts** — bilingual content, media, target channels, status, author

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — connect your repo and add the environment variables `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
- **Netlify** — same environment variables in your site settings

<!-- README_END -->