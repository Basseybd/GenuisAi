# Genius AI

Welcome to **Genius AI**—a SaaS platform designed to showcase cutting-edge AI features built on top of the latest **Next.js 13** App Router. This repository combines powerful modern web technologies such as **React**, **Tailwind**, **Prisma**, **Supabase**, **Clerk**, **Stripe**, **shadcn** components, and **Replicate**-powered endpoints to deliver a smooth developer experience and a seamless subscription-based solution for your end-users.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [License](#license)

---

## Overview

**Genius AI** is a SaaS application built using Next.js 13’s **App Router**, which simplifies and optimizes routing within React applications. By leveraging tools like **Stripe** for subscription handling, **Clerk** for robust authentication, **Prisma** for database interactions, **Supabase** as a PostgreSQL provider, and **Replicate** for AI tasks (such as music or video generation), this project demonstrates a streamlined and scalable approach to building AI-driven web applications.

Key highlights of this repository include:

- **AI Endpoints**: Integration with [Replicate](https://replicate.com/) for advanced AI tasks (e.g., music generation, video generation, etc.).
- **Subscription Management**: Integrated **Stripe** billing for seamless subscription flows.
- **Authentication**: **Clerk** handles user sign-ups, logins, password resets, etc.
- **Database ORM**: **Prisma** with **Supabase (PostgreSQL)** for type-safe, clean database interactions.
- **shadcn components**: Flexible React component library for accessible, modern UIs.
- **Tailwind CSS**: Utility-first and customizable styling approach.

---

## Features

1. **Next.js 13 App Router**

   - Revolutionary new router for nested layouts, server components, improved performance, etc.

2. **Replicate AI Integrations**

   - **Music Generation**: Uses Replicate’s [MusicGen](https://replicate.com/meta/musicgen) endpoint for prompt-based audio.
   - **Video Generation**: Leverages Replicate’s [video-01](https://replicate.com/minimax/video-01) for generating short video clips.

3. **Subscription & Payments**

   - Full integration with **Stripe** to manage subscriptions, handle payments, and generate invoices.

4. **Authentication with Clerk**

   - Secure user accounts with sign-in/sign-up flows, social login, password resets, and more.

5. **Responsive UI**

   - **Tailwind CSS** ensures styles are responsive and consistent across all screen sizes.
   - **shadcn** UI library for reusable, accessible, and themeable components.

6. **Prisma ORM with Supabase PostgreSQL**

   - A type-safe database layer using **Prisma** and **Supabase** for PostgreSQL database management.

7. **Auto-Scrolling Carousel**: Added an animated, responsive **carousel** to display technologies used in the app.

---

## Tech Stack

- **Framework**: [Next.js 13 (App Router)](https://nextjs.org/docs/app)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Auth**: [Clerk](https://clerk.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [Supabase (PostgreSQL)](https://supabase.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **AI Integrations**: [Replicate](https://replicate.com/) (MusicGen, Video-01, etc.)
- **Deployment**: [Vercel](https://vercel.com/) or other hosting platforms

---

## Getting Started

### Prerequisites

- **Node.js** (version 16+ recommended)
- **npm** or **yarn** (latest version recommended)
- A **Supabase PostgreSQL** database
- A **Clerk** account for authentication
- A **Stripe** account for payment integration
- A **Replicate** account (for advanced AI features)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/genius-ai.git
   cd genius-ai
   ```

2. **Install dependencies**:

   ```bash
   # using npm
   npm install

   # or using yarn
   yarn install
   ```

3. **Configure environment variables** (see [Configuration](#configuration)).

4. **Database Setup**  
   Update your `DATABASE_URL` in the `.env` file to point to your Supabase PostgreSQL instance.

5. **Run database migrations**:

   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app is now accessible at **`http://localhost:3000`**.

---

## Configuration

Create a `.env` file at the root (or use `.env.local` depending on your environment) and fill in your credentials. An example:

```plaintext
# Supabase PostgreSQL URL
DATABASE_URL="postgresql://USER:PASSWORD@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://USER:PASSWORD@aws-0-us-west-1.pooler.supabase.com:5432/postgres"

# Stripe API keys
STRIPE_SECRET_KEY="sk_test_xxx"
STRIPE_PUBLIC_KEY="pk_test_xxx"

# Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_clerk_xxx"
CLERK_SECRET_KEY="sk_clerk_xxx"

# Replicate API token (for MusicGen, Video, etc.)
REPLICATE_API_TOKEN="r8_eHb**********************************"

# Other environment variables (if needed)
```

> **Note**: **Never** commit your real credentials to version control. Use environment variables or secret management solutions for secure handling.

---

## Usage

After your server is running:

- **Sign in/up**: Visit [http://localhost:3000/sign-in](http://localhost:3000/sign-in) or [http://localhost:3000/sign-up](http://localhost:3000/sign-up) to authenticate.
- **Stripe Subscription**: Test with your Stripe test keys to confirm checkout flows.
- **AI Endpoints**:
  - **Music Generation**:
    - Endpoint: `POST /api/music`
    - Example JSON body:
      ```json
      {
        "prompt": "Generate an upbeat music track for a social post."
      }
      ```
  - **Video Generation**:
    - Endpoint: `POST /api/video`
    - Example JSON body:
      ```json
      {
        "prompt": "A cinematic video of a serene beach at sunset."
      }
      ```

**Note** that advanced AI tasks (e.g., MusicGen, video-01) might require **polling** or **webhooks** to get final outputs (MP3/MP4). By default, Replicate can take a few seconds to finish generating the file.

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use and modify this software according to the terms of the license.

---

Enjoy building with **Genius AI**—we hope these integrations showcase how straightforward it can be to integrate modern AI features, authentication, payments, and database layers into a cohesive, production-ready SaaS!
