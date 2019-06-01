# esm-babel-plugin-module-resolver-issue

## Setup

```bash
npm i && npm run dev
```

## Issue

Either the module alias isn't available or top-level `await` does not work.

1st try (doesn't work):

```bash
nodemon -r esm -r @babel/register src/index.js 
```

2nd try (doesn't work):

```bash
nodemon -r @babel/register -r esm src/index.js 
```

3rd try (works, but no alias possible):

```bash
nodemon -r esm src/index.js 
```

`src/router.js`

```diff
- import user from '@routes/hello-world.route'
+ import user from './routes/hello-world.route'
```
