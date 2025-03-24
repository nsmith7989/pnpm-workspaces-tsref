# PnpmMono

Reproduction of issue with pnpm workspaces and ts project references.

On main branch root package.json and apps' package.json does not contain `"@pnpm-mono/mytslib": "workspace:*"` or `"pnpm-mono/mytslib2": "workspace:*"` in dependencies.

## Steps to reproduce

Open apps/myapp/src/app/app.tsx see the error in the editor on lines 8 and 9.

Note that `pnpm nx typecheck myapp` does not show any errors.

## Fix

Two possible fixes:

1. add `"@pnpm-mono/mytslib": "workspace:*"` and `"pnpm-mono/mytslib2": "workspace:*"` to root package.json under devDependencies and run `pnpm install`

2. add `"@pnpm-mono/mytslib": "workspace:*"` and `"pnpm-mono/mytslib2": "workspace:*"` to apps/myapp/package.json under dependencies and run `pnpm install`

Could also add a sync generator to add this automatically.
