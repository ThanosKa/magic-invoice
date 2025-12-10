# Contributing to Magic Invoice

Thank you for your interest in contributing to Magic Invoice! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue using the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md). Include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node.js version)

### Suggesting Features

We welcome feature suggestions! Open an issue using the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and describe:

- The problem you're trying to solve
- Your proposed solution
- Alternative solutions you've considered
- Any additional context

### Pull Requests

1. **Fork the repository** and create a new branch from `main`
2. **Make your changes** following our code style guidelines
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Submit a pull request** using our [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Development Setup

### Prerequisites

- Node.js 20 or higher
- pnpm 9 or higher
- Git

### Installation

1. Clone your fork:

   ```bash
   git clone https://github.com/YourUsername/magic-invoice.git
   cd magic-invoice
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env` (if needed)

5. Run the development server:

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types; use proper types or `unknown`
- Use interfaces for object shapes
- Prefer type inference where possible

### React/Next.js

- Use functional components with hooks
- Keep components focused and small
- Use `react-hook-form` with `zodResolver` for forms
- Follow Next.js App Router conventions
- Use Server Components by default; Client Components when needed

### Styling

- Use Tailwind CSS utility classes
- Use Shadcn UI components from `src/components/ui`
- Use CSS variables for theming (defined in `globals.css`)
- Avoid inline styles unless necessary
- Use the `cn` utility from `src/lib/utils` for conditional classes

### File Naming

- Components: PascalCase (e.g., `InvoiceForm.tsx`)
- Utilities: kebab-case (e.g., `format-currency.ts`)
- Pages: `page.tsx` for Next.js App Router
- Use descriptive, meaningful names

### Code Organization

- Keep related files together
- Use barrel exports (`index.ts`) for cleaner imports
- Separate concerns (UI, logic, data)
- Place shared utilities in `src/lib`

### Commits

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues/PRs when applicable
- Keep commits focused and atomic

Example:

```
feat: add dark mode toggle to settings

- Add ThemeToggle component
- Update ThemeContext to support dark mode
- Add dark mode styles to globals.css

Closes #123
```

## Project Structure

```
magic-invoice/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # React components
│   │   ├── invoice/      # Invoice-related components
│   │   ├── landing/      # Landing page components
│   │   └── ui/           # Shadcn UI primitives
│   ├── contexts/         # React Context providers
│   ├── i18n/             # Internationalization
│   │   └── locales/      # Translation files
│   └── lib/              # Utilities, helpers, schemas
├── public/               # Static assets
├── .github/              # GitHub templates and workflows
└── README.md
```

## Testing

- Write tests for new features and bug fixes
- Run tests before submitting PRs:
  ```bash
  pnpm test
  ```
- Aim for good test coverage
- Use Vitest for unit tests
- Use React Testing Library for component tests

## Questions?

- Open a [GitHub Discussion](https://github.com/ThanosKa/magic-invoice/discussions)
- Check existing [Issues](https://github.com/ThanosKa/magic-invoice/issues)
- Contact maintainers at `kazakis.th@gmail.com`

Thank you for contributing to Magic Invoice! 🎉
