# React Component Routes

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

1. Create a GitHub repository named `react-component`.
2. Push this project to its `main` branch.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as
   the source.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.

Your page will be available at:

```text
https://YOUR-USERNAME.github.io/react-component/
```
