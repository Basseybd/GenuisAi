# Genius AI

Welcome to **Genius AI**—a SaaS platform designed to showcase cutting-edge AI features built on top of the latest **Next.js 13 App Router**. This repository combines powerful modern web technologies such as **React**, **TypeScript**, **Tailwind**, **Prisma**, **Supabase**, **Clerk**, **Stripe**, **shadcn** components, **Replicate**, and **OpenAI** to deliver a seamless subscription-based solution for your end-users.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

---

## Overview

**Genius AI** is a SaaS application built using **Next.js 13’s App Router**, which simplifies and optimizes routing within React applications. By leveraging tools like **Stripe** for subscription handling, **Clerk** for robust authentication, **Prisma** for database interactions, **Supabase** as a PostgreSQL provider, and **Replicate** + **OpenAI** for AI tasks (such as music/video generation, conversation, image, and code generation), this project demonstrates a **streamlined** and **scalable** approach to building AI-driven web applications.

### Key highlights

- **AI Endpoints**: Integration with Replicate for advanced music and video generation, plus OpenAI for conversations, images, and code generation.  
- **Subscription Management**: Stripe billing for seamless subscription flows.  
- **Authentication**: Clerk handles user sign-ups, logins, password resets, etc.  
- **Database ORM**: Prisma with Supabase (PostgreSQL) for type-safe, clean database interactions.  
- **shadcn Components**: Flexible React component library for accessible, modern UIs.  
- **TypeScript**: Strongly typed JavaScript for enhanced developer experience.  
- **Tailwind CSS**: Utility-first approach for rapid, consistent styling.

---

## Features

### Next.js 13 App Router
- Revolutionary new router with nested layouts, server components, and improved performance.

### Replicate AI Integrations
- **Music Generation**: Uses Replicate’s **MusicGen** endpoint for prompt-based audio.  
- **Video Generation**: Leverages Replicate’s **video-01** for generating short video clips.

### OpenAI Integrations
- **Conversation**: Uses GPT models for advanced chatbot interactions.  
- **Images**: Generates images based on user prompts.  
- **Code**: Provides code snippets or completions for dev-related tasks.

### Subscription & Payments
- Full integration with **Stripe** to manage subscriptions, handle payments, and generate invoices.

### Authentication with Clerk
- Secure user accounts with sign-in/sign-up flows, social login, password resets, and more.

### Responsive UI
- **Tailwind CSS** ensures styles are responsive across all screen sizes.
- **shadcn** UI library for reusable, accessible, and themeable components.

### Prisma ORM with Supabase PostgreSQL
- A type-safe database layer using Prisma and Supabase for PostgreSQL database management.

### Auto-Scrolling Carousel
- An animated, responsive carousel to display technologies used in the app (powered by **Embla**).

---

## Tech Stack

- **Framework**: Next.js 13 (App Router)  
- **UI Library**: React + shadcn/ui  
- **Styling**: Tailwind CSS  
- **Auth**: Clerk  
- **ORM**: Prisma  
- **Database**: Supabase (PostgreSQL)  
- **Payments**: Stripe  
- **AI Integrations**: Replicate (MusicGen, Video-01, etc.), OpenAI (ChatGPT, image generation, code completions)  
- **Language**: TypeScript  
- **Deployment**: Vercel (or other hosting platforms)

---

## Getting Started

### Prerequisites
- Node.js (version 16+ recommended)  
- npm or yarn (latest version recommended)  
- A Supabase PostgreSQL database  
- A Clerk account for authentication  
- A Stripe account for payment integration  
- A Replicate account (for AI media generation)  
- An OpenAI account (for conversation, image, and code generation)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/genius-ai.git
   cd genius-ai
   ```

2. **Install dependencies**:
   ```bash
   # npm
   npm install

   # or yarn
   yarn install
   ```

3. **Configure environment variables** (see [Configuration](#configuration)).

4. **Database Setup**  
   - Update your `DATABASE_URL` in the `.env` file to point to your Supabase PostgreSQL instance.  
   - Run database migrations:
     ```bash
     npx prisma migrate dev
     ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   - Your app is now accessible at **http://localhost:3000**.

---

## Configuration

Create a `.env` file at the root (or use `.env.local`) and fill in your credentials. For example:

```bash
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

# OpenAI API token (for conversation, image, code, etc.)
OPENAI_API_KEY="sk-openai-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

**Note**: Never commit your real credentials to version control.

---

## Usage

After your server is running:

1. **Sign in/up**: Visit `http://localhost:3000/sign-in` or `http://localhost:3000/sign-up` to authenticate via **Clerk**.

2. **Stripe Subscription**: Test with your Stripe test keys to confirm checkout flows.

3. **AI Endpoints**:

   - **Music Generation**  
     - `POST /api/music`  
     - Example JSON body:
       ```json
       {
         "prompt": "Generate an upbeat music track for a social post."
       }
       ```

   - **Video Generation**  
     - `POST /api/video`  
     - Example JSON body:
       ```json
       {
         "prompt": "A cinematic video of a serene beach at sunset."
       }
       ```

   - **OpenAI**:
     - Conversations, code snippets, or image generation:
       ```json
       {
         "prompt": "Write a short snippet in TypeScript to fetch data from an API."
       }
       ```

   Note that advanced AI tasks might require polling or webhooks to retrieve final outputs (MP3, MP4, images, etc.). By default, generation can take a few seconds.

---

## License

This project is licensed under the **MIT License**. You are free to use and modify this software according to the terms of the license.

Enjoy building with **Genius AI**—we hope these integrations showcase how straightforward it can be to integrate modern AI features, authentication, payments, and a robust database layer into a cohesive, production-ready SaaS!

---

### About
- **Demo**: [genuis-ai-five.vercel.app](https://genuis-ai-five.vercel.app/)
- **License**: MIT
- **Languages**: Primarily TypeScript (98%), CSS, and JavaScript
- **Deployments**: Multiple production deployments on Vercel
This concise update emphasizes your use of TypeScript and clarifies the dual AI integrations with **Replicate** and **OpenAI**, as well as the overall modern stack you employed.
