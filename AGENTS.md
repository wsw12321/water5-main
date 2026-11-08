# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro 5 static personal site. `src/pages/index.astro` defines the only route and assembles the homepage. `src/layouts/Layout.astro` provides the HTML shell, metadata, global stylesheet import, and theme behavior. Small reusable components, such as the inline SVG `Icon.astro`, live in `src/components/`. Keep editable profile, project, experience, contact, and SEO content in `src/data/site.ts`; use `content.md` as the source-content brief. Site-wide design tokens and responsive rules live in `src/styles/global.css`. Images processed by Astro belong in `src/assets/`; files that must be copied unchanged belong in `public/`. Generated directories such as `dist/`, `.astro/`, `node_modules/`, and `.pnpm-store/` are not committed.

## Build, Test, and Development Commands

- `pnpm install` installs the locked dependencies using the repository's pinned pnpm version.
- `pnpm dev` starts Astro's development server with live reload.
- `pnpm check` runs Astro and strict TypeScript diagnostics.
- `pnpm build` checks the project and produces the static site in `dist/`.
- `pnpm preview` serves the production build for final browser verification.

Run commands from the repository root. Use `pnpm check` before committing and `pnpm build` before opening a pull request.

## Coding Style & Naming Conventions

Match the existing style: two-space indentation, semicolons, double quotes, and trailing commas in multiline TypeScript objects and arrays. Use PascalCase for interfaces and reusable components, camelCase for variables and functions, and lowercase filenames such as `site.ts` or `index.astro`. CSS classes and custom properties use kebab-case; modifiers follow the existing BEM-like pattern (`button--primary`). No formatter or linter is configured, so keep changes consistent with surrounding code. Preserve semantic HTML, accessible labels, keyboard focus behavior, and descriptive image alt text.

## Testing Guidelines

There is currently no automated test framework or coverage threshold. Treat `pnpm check` and `pnpm build` as the required validation gates. For visual or interaction changes, also run `pnpm preview` and verify desktop/mobile layouts, light/dark themes, navigation, and external links. If substantial client-side behavior is introduced, add an appropriate test setup with clearly named `*.test.ts` or `*.spec.ts` files.

## Commit & Pull Request Guidelines

History favors short, action-oriented subjects, often in Chinese; recent feature commits use `feat:`, for example `feat: 添加个人主页`. Keep each commit focused. Pull requests should describe the change, list validation performed, link relevant issues when applicable, and include before/after screenshots for visual updates. Do not commit secrets or local `.env` files; document any new configuration in `.env.example`.
