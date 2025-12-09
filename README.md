# Magic Invoice

Magic Invoice is a modern, real-time invoice editor built with Next.js, Shadcn UI, and Tailwind CSS. It allows you to create beautiful, professional invoices instantly and export them as PDFs—all directly in your browser without any sign-up required.

## Features

- **Real-Time Editing**: See your changes instantly as you type.
- **Privacy First**: All data is processed locally in your browser; no financial information is stored on servers.
- **Modern Design**: Built with a premium monochrome aesthetic using Shadcn UI and Framer Motion.
- **PDF Export**: Generate pixel-perfect PDFs of your invoices.
- **Multilingual Support**: Supports multiple languages via i18n.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI, OKLCH colors
- **Form Handling**: React Hook Form, Zod
- **Animations**: Framer Motion
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

Ensure you have Node.js and `pnpm` installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd magic-invoice
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Run the development server:
    ```bash
    pnpm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `pnpm run dev`: Runs the app in development mode.
- `pnpm run build`: Builds the app for production.
- `pnpm run start`: Starts the production server.
- `pnpm run lint`: Runs ESLint to check for code quality issues.
- `pnpm run type-check`: Runs TypeScript compiler to check for type errors.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: React components (UI, invoice, landing page).
- `src/lib`: Helper functions and utilities.
- `src/hooks`: Custom React hooks.
- `src/contexts`: React Context providers (e.g., TranslationContext).
- `src/i18n`: Internationalization locales and configuration.
