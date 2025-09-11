# Sugarloaf

A small React + TypeScript + Vite demo for a pet rescue site.

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run lint` – run ESLint
- `npm test` – run unit tests with Vitest

## Project structure

- `src/components` – each UI component lives in its own folder alongside its styles and tests
- `src/lib` – shared utilities such as API helpers with colocated tests
- `src/pages` – top-level pages

## Testing

- Runner: Vitest with `jsdom` and Testing Library.
- Types: Editor types for tests come from `tests/tsconfig.json` (extends `tsconfig.vitest.json`). Vitest itself does not read a `tsconfig` setting from `vite.config.ts`.
- Setup file: `vitest.setup.ts` includes `@testing-library/jest-dom` and `globals` are enabled.

Tip: If your editor does not pick up test typings, ensure it recognizes `tests/tsconfig.json` as a project.
