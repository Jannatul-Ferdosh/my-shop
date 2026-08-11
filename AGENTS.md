# AGENTS.md

## Stack
React 19 + Vite 8 + TypeScript SPA. Chakra UI v3, TanStack Query v5, Zustand, React Router v7 (import from `react-router`, NOT `react-router-dom`), react-hook-form, axios.

## Commands
- `npm run dev` — dev server (Vite)
- `npm run build` — `tsc -b && vite build` (this is also the typecheck step; there is no separate `typecheck` script)
- `npm run lint` — ESLint (`eslint .`)
- No test framework or test runner exists. Verify with `npm run lint` then `npm run build`.

## Runtime requirement
The app talks to a backend at `http://localhost:8765` (baseURL hardcoded in `src/services/apiClient.ts`). Data fetch/mutation will fail if it's not running.

## Conventions
- Path alias: `@/*` -> `src/*` (set in `tsconfig.app.json` `paths`, resolved natively by Vite 8 via `resolve.tsconfigPaths: true` — do NOT add a `vite-tsconfig-paths` plugin). Always use `@/` imports.
- All HTTP goes through `src/services/apiClient.ts` (axios instance with a Bearer token interceptor reading `localStorage.token`). Each hook creates its own instance: `new APIClient('/products')`. Don't import axios directly.
- Data-fetching logic lives in `src/hooks/useX.ts` as TanStack Query hooks wrapping `APIClient`. React Query + Zustand together: React Query owns server state, `src/store.ts` (Zustand) owns UI/query state.
- `src/entities/` are type-only interfaces — no runtime logic.
- `src/routes.tsx` is the single router definition; pages live in `src/pages/`.
- `src/components/ui/` files are Chakra CLI-generated — treat as generated; put custom components elsewhere.
- `src/components/test.tsx` is an empty leftover file; do not extend it.

## TypeScript quirks
- `verbatimModuleSyntax: true` — use `import type` for type-only imports (this is enforced).
- `erasableSyntaxOnly: true` — no enums or namespaces; use string unions / `as const`.
- `noUnusedLocals` / `noUnusedParameters` are on — the build will fail on unused code.

## Auth state
Login/admin state is derived from localStorage: `token` (logged in) and `role === "admin"` (admin). `store.ts` setters `setLoggedIn`/`setisAdmin` re-read localStorage rather than taking arguments.

## Gotcha
`src/pages/AdminUpadateProductPage.tsx` is intentionally misspelled ("Upadate"); its route path is `/AdminUpdateProductPage/:productId` in `src/routes.tsx`. Don't "fix" the filename without updating the route.
