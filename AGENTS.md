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

## Internationalization & Language Rules
- The application dynamically supports both English and Brazilian Portuguese (pt-BR).
- Every AI agent working on this codebase must support and implement changes in both languages:
  - All user-facing UI elements, titles, placeholders, and action labels must be localized using `t` dictionary tokens.
  - Corresponding keys and translated texts must be updated in both [en.ts](file:///c:/Users/Hendrick/repositories/flyterial/frontend/src/locales/en.ts) and [pt.ts](file:///c:/Users/Hendrick/repositories/flyterial/frontend/src/locales/pt.ts) under a shared TypeScript type schema.
  - Prompts in AI generation routes (such as [route.ts](file:///c:/Users/Hendrick/repositories/flyterial/frontend/src/app/api/generate/route.ts)) must pass and respect the target language request.


