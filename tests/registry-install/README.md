# Registry Validation Tests

Opt-in, fully in-memory checks; nothing is attached to builds, hooks or CI,
and nothing is written to disk or installed.

```bash
npm run test:registry
```

## What is validated

`registry.test.mjs` simulates a `shadcn add` for every published item without
running the CLI:

- Excludes `public/r/registry.json` from installable items and reconciles the
  root and published catalogs (item names, `type`, `dependencies`,
  `registryDependencies`).
- Validates the registry contract: item name matches the file, supported
  item/file types, nonempty file contents, safe relative paths and dependency
  arrays.
- Builds the recursive `registryDependencies` graph; missing items,
  unsupported references and dependency cycles fail explicitly.
- Computes exact install destinations for each file type (`ui`, `lib`,
  `hooks`, `components`, explicit `target`) under default and custom aliases.
- Rejects conflicting payloads targeting the same destination.
- Rewrites dependency imports the way the shadcn CLI does (basename-matched
  specifier → resolved destination).
- Resolves every `@/`, relative and bare import in the installed output:
  aliases must land on a file in the graph or a fixture-provided file,
  relative imports must resolve inside the graph, and bare packages must be
  declared in `dependencies`/`devDependencies` (framework packages like
  `react`, `clsx` and `next` are ambient).
- Verifies imported symbols exist: named and default imports are checked
  against the actual exports of the resolved file.
- Fails on malformed file contents via TypeScript syntax diagnostics.
- Verifies every published `files[].content` is a verbatim copy (sha256) of a
  current source file under `src/` — stale payloads generated before a source
  edit fail with a pointer to `build:components`.

`harness.test.mjs` covers the helpers themselves: schema rejection, unsafe
paths, cycles, destination mapping per file type and alias mode, conflict
detection, unresolved/undeclared imports, missing exports and import
rewriting.

## Out of scope

This suite does not execute npm or the shadcn CLI. Real installation
concerns — package existence on the registry, peer/version resolution, CLI
behavior — are exercised by publishing a prerelease and installing into a
fresh application manually.
