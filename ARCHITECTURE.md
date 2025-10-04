# Design choices, in brief
This exercise was containerised with Docker and written in Node.js/Express (TypeScript).

## Tech stack

- **Runtime:** Node.js (Docker image: node:latest) — containerized runtime with native fetch.
- **Language:** TypeScript — type safety and better DX.
- **Web Framework:** Express — minimal HTTP layer with custom middleware.
- **API Style:** REST + JSON — simple endpoints for CRUD.
- **Middleware:** 
  - Centralized **error handler** (maps custom errors → HTTP codes).
- **Outbound Integrations:** Mock CRM via console JSON log (simulates webhook).
- **Linting/Formatting:** ESLint + Prettier for consistent code.
- **Env Management:** dotenv for local `.env` loading.
- **Logging:** Console for demo.
- **Build/Run:** `ts-node-dev` (dev) and `tsc` (build).
- **Package Manager:** npm

## API Structure

I have 2 big points in mind when creating this exercise.

1. A database schema with a real world situation.
 
- 3 tables for User, Plan and Subscription and each users can subscribe more than once.
- Don't trust the price from API request, always get it from plan table.

2. Structured the API into modules -- modular (feature-based) architecture.

- Each module/feature has its own controller, service, model and route.
- This makes the project easier to maintain and scale.
- This structure prepares the codebase for possible microservice migration in the future.

