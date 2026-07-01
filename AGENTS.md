<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Styling Rules
- Do not install or use Tailwind CSS.
- Keep the application's visual aesthetics premium, using curated gradients, subtle glassmorphism, and responsive CSS grids.
- Implement styles globally inside `globals.css` or with CSS Modules.

## Code Conventions
- Use TypeScript for all components and API routes.
- Prefer functional components and React Hooks.
- Write API routes in Next.js App Router format under `frontend/src/app/api/...`.

## State & Dependencies
- Keep dependencies minimal.
- Use `SaaSProvider` React Context in [SaaSProvider.tsx](file:///c:/Users/Hendrick/repositories/flyterial/frontend/src/components/SaaSProvider.tsx) for managing global session, plan, quota, and history states.
- Avoid installing external state libraries unless explicitly requested.

