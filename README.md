# Genius AI

Welcome to **Genius AI**—a SaaS platform designed to showcase cutting-edge AI features built on top of the latest **Next.js 13** App Router. This repository combines powerful modern web technologies such as **React**, **Tailwind**, **Prisma**, **MySQL**, **Clerk**, **Stripe**, and **shadcn** components to deliver a smooth developer experience and a seamless subscription-based solution for your end-users.

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

**Genius AI** is a SaaS application built using Next.js 13’s App Router, which simplifies and optimizes routing within React applications. By leveraging tools like **Stripe** for subscription handling, **Clerk** for robust authentication, and **Prisma** for database interactions, this project demonstrates a streamlined and scalable approach to building AI-driven web applications.

Key highlights of this repository include:

- **Subscription Management**: Integrated **Stripe** billing for seamless subscription flows.
- **Authentication**: **Clerk** handles user sign-ups, logins, password resets, and more.
- **Database ORM**: **Prisma** with MySQL for type-safe, clean database interactions.
- **shadcn components**: Powerful, accessible, and flexible React components.
- **Tailwind CSS**: Utility-first and customizable styling approach.

---

## Features

1. **Next.js 13 App Router**

   - Revolutionary new router from Next.js for nested layouts, server components, and more.

2. **Subscription & Payments**

   - Full integration with **Stripe** to manage subscriptions, handle payments, and generate invoices.

3. **Authentication with Clerk**

   - Secure user accounts, sign-in/sign-up flows, social login, password reset, and more.

4. **Responsive UI**

   - **Tailwind CSS** ensures styles are responsive and consistent across all screen sizes.
   - **shadcn** library for reusable, accessible, and themeable components.

5. **Prisma ORM**

   - Leverage a type-safe database layer with clean and maintainable data models using Prisma.

6. **Scalable Database**
   - Connect to a **MySQL** database for production-ready scalability.

---

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/docs/app)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Auth**: [Clerk](https://clerk.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: MySQL
- **Payments**: [Stripe](https://stripe.com/)
- **Deployment**: Vercel / Other hosting platforms (your choice)

---

## Getting Started

### Prerequisites

- **Node.js** (version 16+ recommended)
- **npm** or **yarn** (latest version recommended)
- A **MySQL** database (local or remote)
- A **Clerk** account for authentication
- A **Stripe** account for payment integration

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/genius-ai.git
   cd genius-ai
   ```

````

2. **Install dependencies**:

   ```bash
   # using npm
   npm install

   # or using yarn
   yarn install
   ```

3. **Configure environment variables** (see [Configuration](#configuration)).

4. **Database Setup**
   Update your `DATABASE_URL` in the `.env` file to point to your MySQL instance.

5. **Run database migrations**:

   ```bash
   npx prisma migrate dev
   ```

---

## Configuration

In the root of the project, you'll find an `.env.example` file. Create a `.env` file and fill in your credentials:

```plaintext
# MySQL database URL
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

# Stripe API keys
STRIPE_SECRET_KEY="sk_test_xxx"
STRIPE_PUBLIC_KEY="pk_test_xxx"

# Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_clerk_xxx"
CLERK_SECRET_KEY="sk_clerk_xxx"

# Other environment variables (if needed)
```

> **Important**: Never commit your real credentials to version control. Use environment variables or secret management solutions for secure handling.

---

## Usage

With all dependencies and configurations in place, start your development server:

```bash
npm run dev
```

- Access the application at **`http://localhost:3000`**.
- Authenticate using Clerk’s built-in pages at **`http://localhost:3000/sign-in`** or **`http://localhost:3000/sign-up`**.
- Explore the subscription flow integrated with Stripe in your app dashboard or dedicated pages.

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use and modify this software according to the terms of the license.

---
````
