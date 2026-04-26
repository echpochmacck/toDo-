# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server
npm run build        # type-check + build
npm test             # vitest watch mode
npm test -- --run    # run tests once
npm test -- --run src/entities/task/model/store.test.ts  # run single test file
npm run test:ui      # vitest browser UI
npm run test:coverage
```

## Architecture

This project uses **Feature-Sliced Design (FSD)** under `src/`. Imports must only flow downward through the layers — a layer may only import from layers below it:

```
app → pages → widgets → features → entities → shared
```

Each slice (e.g. `entities/task`) exposes a single public API via its `index.ts`. Always import from the slice root (`@/entities/task`), never from internal paths like `@/entities/task/model/store`.

### Layers

| Layer | Purpose |
|-------|---------|
| `app/` | App bootstrap (`main.ts`, `App.vue`), plugin registration (Vuetify, Router, Pinia), and app-wide stores |
| `pages/` | Route-level components. Each page is a folder with `index.ts` + `ui/` subfolder |
| `widgets/` | Self-contained UI blocks composed from features/entities |
| `features/` | User interactions and business actions |
| `entities/` | Business domain models, their types, and Pinia stores |
| `shared/` | Framework-agnostic utilities: `api/`, `config/`, `lib/`, `ui/` |

### Conventions

- **Pinia stores** live inside the entity's `model/` folder (`entities/<name>/model/store.ts`) and are exported through `index.ts`. App-wide stores (not tied to a domain) live in `app/stores/`.
- **New routes** are added in `src/app/plugins/router.ts` and point to a `pages/<name>/index.ts` barrel.
- **Vuetify** is auto-imported via `vite-plugin-vuetify` — no manual component imports needed.
- The `@` alias maps to `src/`.
- Vitest uses `globals: true`, so `describe`/`it`/`expect` are available without importing. Test files sit next to the code they test.
