# React-01: React Component Routes

A small React application with three routes that all render the same `PageCard`
component. The component chooses different content based on the active route.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Routes

- `#/greetings`
- `#/profiles`
- `#/my-hobbies`

## Production build

```bash
npm run build
```

The generated `dist` directory can be deployed to GitHub Pages or another static
hosting service. Hash routing means all three routes work without special server
configuration.

## Deploy to GitHub Pages

1. Push this project to the `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as
   the source.
3. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.

Your page will be available at:

```text
https://geordie-og.github.io/React-01/
```
