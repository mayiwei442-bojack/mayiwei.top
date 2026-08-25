# Mayiwei — Portfolio

A lightweight, single-page portfolio built with Next.js App Router, TypeScript,
and CSS Modules.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

- Projects live in `data/projects.ts`. Add or edit items there instead of
  changing the card component.
- Add project screenshots to `public/projects/`, then set the matching
  project's `image` value, for example `/projects/campus-connect.webp`.
- Replace the temporary biography in `components/Hero.tsx`.
- Replace the email placeholder in `components/Footer.tsx` when a contact
  address is ready.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```
