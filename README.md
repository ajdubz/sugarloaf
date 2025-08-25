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

Vitest is configured to use jsdom and Testing Library, with custom types from `tsconfig.vitest.json`.
