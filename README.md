# stormant-designs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

## Troubleshooting

### Vite Dependency Optimization Issues

If you encounter 504 errors with "Outdated Optimize Dep" messages when loading dependencies (particularly with tsparticles), you can resolve this by running:

```sh
npm run clean-dev
```

This command forces Vite to clear its dependency cache and re-optimize all dependencies. Use this command whenever you:

- Update dependencies in package.json
- Experience dependency loading errors
- See "Outdated Optimize Dep" errors in the console

### Particles Rendering Issues

If you encounter errors related to particles rendering, such as:
- "drawer.validTypes is not iterable"
- Shape loading errors

Make sure you're using the correct component from @tsparticles/vue3:
- Use `<Particles>` component (not `<vue-particles>`)
- Connect the initialization function with `@init="particlesInit"`
- Ensure your particle options are compatible with the current version
