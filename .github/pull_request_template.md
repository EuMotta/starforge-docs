## Summary

<!-- Explain what changed and why. Keep it concise and reviewer-focused. -->

## Type of Change

<!-- Select the commit type that best matches this PR. These match commitlint. -->

- [ ] feat: New feature
- [ ] fix: Bug fix
- [ ] tweak: Minor adjustment
- [ ] style: Code style or formatting
- [ ] refactor: Code restructuring without behavior changes
- [ ] perf: Performance improvement
- [ ] test: Test changes
- [ ] docs: Documentation changes
- [ ] chore: Maintenance
- [ ] ci: CI/CD changes
- [ ] build: Build system or dependency changes
- [ ] revert: Revert a previous change
- [ ] hotfix: Urgent production fix
- [ ] init: Initial setup
- [ ] merge: Branch merge
- [ ] wip: Work in progress
- [ ] release: Release preparation

## Related Issue(s)

<!-- Use `Fixes #123`, `Closes #456`, or `N/A`. -->

## Checklist

### Required

- [ ] Self-review completed
- [ ] Changes are minimal and focused
- [ ] No dead code (unused imports, variables, or functions)
- [ ] No `console.log` in production code
- [ ] No `any`, `as unknown`, or `@ts-ignore` without documented justification
- [ ] Naming is intentional and unambiguous
- [ ] Errors are logged or propagated; no empty server-side `catch {}` blocks

### Next.js / React

- [ ] Server Component by default; `'use client'` only when necessary
- [ ] Next.js 15 App Router `params` are awaited before use
- [ ] Effects have complete dependency arrays
- [ ] Client components do not fetch directly without an abstraction
- [ ] Interactive UI includes accessibility support (ARIA and keyboard behavior)

### Star Forge Components (if applicable)

- [ ] Source lives in `src/components/star-forge/<category>/<name>.tsx`
- [ ] Preview lives in `src/components/star-forge-preview/<category>/<name>.tsx`
- [ ] One component per file; filename matches component name
- [ ] Public component API is typed and intentionally named
- [ ] Component uses editable copy-paste code with no hidden runtime abstraction

### Registry & Dual-Engine (if applicable)

- [ ] `src/registry/registry-ui.ts` updated for block changes
- [ ] `src/registry/registry-primitives.ts` updated for primitive changes
- [ ] Radix and Base UI primitive variants expose compatible public APIs
- [ ] Blocks import primitives through `@/components/ui/<primitive>` barrel files only
- [ ] `public/r/*.json` was not edited manually
- [ ] `npm run build:components` executed after registry changes
- [ ] `npm run audit:registry` passes after registry changes

### Documentation / SEO (if applicable)

- [ ] MDX frontmatter includes title and description
- [ ] New docs pages are discoverable in the Fumadocs navigation/meta structure
- [ ] SEO metadata, canonical URL, sitemap, or robots changes were verified when relevant

### Verification

- [ ] `npm run build` passes
- [ ] `npm run lint` passes, or `npm run format` was used to fix lint/format issues
- [ ] Visual changes were checked in light and dark themes where applicable

## Screenshots / Recordings

<!-- Add screenshots or recordings for UI changes. Use `N/A` if not applicable. -->

## Additional Notes

<!-- Add migration notes, known limitations, or reviewer context. Use `N/A` if not applicable. -->
