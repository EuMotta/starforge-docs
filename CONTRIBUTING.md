# Contributing to Star Forge

Thanks for helping build Star Forge. This guide covers the development workflow. The component/registry internals are documented on the site under **Advanced**:

- [Architecture](https://starforge-docs.com/docs/architecture)
- [Registry System](https://starforge-docs.com/docs/registry-system)
- [Adding Blocks](https://starforge-docs.com/docs/adding-blocks)
- [Adding Primitives](https://starforge-docs.com/docs/adding-primitives)
- [Adding Base Variants](https://starforge-docs.com/docs/adding-base-variants)

## Setup

```bash
npm install
npm run dev
```

Node.js 20 or later is required.

## Workflow

1. Fork the repository and create a branch from `develop` (e.g. `feat/my-component`).
2. Make your changes following the project conventions below.
3. Run the verification steps and make sure everything passes.
4. Open a Pull Request against `develop` and fill in the PR template.

## Verification

All of these run in CI and must pass before merge:

```bash
npm run lint           # ESLint + Prettier
npm run audit:registry # Registry dependency resolution
npm run test:registry  # Registry install simulation
npm test               # Component tests (vitest)
npm run build          # Next.js production build
```

## Adding a block component

1. Create the source in `src/components/star-forge/<category>/<name>.tsx`.
2. Create the preview in `src/components/star-forge-preview/<category>/<name>.tsx`.
3. Register it in `src/registry/registry-ui.ts`.
4. Rebuild the registry: `npm run build:components`.
5. Validate: `npm run audit:registry` and `npm run test:registry`.
6. Document it in the matching `content/docs/<category>/<name>.mdx` page.

Never edit `public/r/*.json` or `registry.json` by hand — they are generated.

## Adding a dual-engine primitive

1. Radix implementation: `src/components/ui/primitives/radix/<name>.tsx`.
2. Base UI adapter: `src/components/ui/primitives/base/<name>.tsx` — identical public API.
3. Barrel: `src/components/ui/<name>.tsx` re-exports from `primitives/radix/`.
4. Three entries in `src/registry/registry-primitives.ts`: `radix-<name>`, `base-<name>`, `<name>` (alias).
5. If used by blocks, create `-base` block variants in `registry-ui.ts`.
6. `npm run build:components` + `npm run audit:registry`.

Blocks never import `@radix-ui/react-*` or `@base-ui/react` directly — always through `@/components/ui/<primitive>`.

## Conventions

- TypeScript strict: no `any`, `as unknown`, or `@ts-ignore` without documented justification.
- One component per file; filename matches the component name.
- No dead code, no `console.log` in production code (`console.error` for real errors).
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) — enforced by commitlint (`feat:`, `fix:`, `docs:`, `chore:`, ...).

## Reporting issues

Use the issue templates: **Bug report** for broken behavior, **Component request** for new blocks or primitives. Include the registry item name (e.g. `login-dialog`) and the engine you installed (Radix UI or Base UI) when relevant.
