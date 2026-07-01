# Flyterial Monorepo

Welcome to the Flyterial monorepo! This repository is organized as a Turborepo-managed workspace.

## Repository Structure

The project has been split into workspaces:

* **[frontend/](./frontend)**: The Next.js frontend web application, built with React, TypeScript, and standard Tailwind-free CSS. Contains the educational AI material generator, the markdown editor, Stripe checkouts simulation, and usage quotas logic.
* **Root Configuration**: Manages workspaces, task pipelines, and global configurations.

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* `npm` (v9 or higher recommended)

### Installation

To install all workspace dependencies from the root, run:

```bash
npm install
```

---

## Development

Turborepo handles task orchestration and caching across the monorepo.

### Run Development Servers

To spin up all workspaces in development mode (which starts the frontend at `http://localhost:3000`):

```bash
npm run dev
```

### Build for Production

To compile all applications for production (and benefit from Turborepo's caching pipeline):

```bash
npm run build
```

### Code Quality (Linting)

To run the ESLint rules across the workspaces:

```bash
npm run lint
```
