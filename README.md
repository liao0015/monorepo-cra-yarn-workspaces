# monorepo

A simple monorepo using yarn workspaces with all the packages generated by CRA (create-react-app).  `cracojs` is the key here to make component sharing work by overriding CRA's default config on `babel-loader`.

## `@craco/craco`

you will get the following error message in console when you try to run `yarn start` inside `web-app` package

```sh
../shared-components/src/components/Button.tsx 6:5
Module parse failed: Unexpected token (6:5)
File was processed with these loaders:
 * ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js
You may need an additional loader to handle the result of these loaders.
| import React, {FC} from 'react'
| 
> type Props = {
|   textColor: string;
| }
```

This is error can be resolved by install `@craco` as a dependency in `web-app` package to override `react-scripts` behavior on `babel-loader`.