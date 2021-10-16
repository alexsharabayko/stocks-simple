# tiny-notes

Stocks homework project

Project written on React + Redux Toolkit + Chakra UI


## Available commands

`npm run + <COMMAND>` or `yarn <COMMAND>`

- `start:index` - start dev server on port 6001
- `run build` - builds app to a dist folder
- `run build:analyze` - build with outputting ifo to `app-stats.json` file which can be  seen in https://chrisbateman.github.io/webpack-visualizer/
- `g` - generate component
- `test` - run tests

## How to run the app

 - Clone the project
 - Go to the project folder
 - Run `yarn install`
 - Run `yarn start:index`
 
 ## Project Structure
 
 ## Root folder
 
 - `src` - app code folder
 - `webpack.config.js` - bundler config file
 - `tsconfig.js` - ts config file
 - `babel.config.js` - babel config for Jest
 - `.generator` - helpers to quickly generate components
 
 ### Src folder:

- `apis` - folder which contains all calls to APIs (something is emulated)
- `components` - common reusable components, which depend only on their props
- `domains` - shared interfaces, types, constants
- `pages` - pages components (this folder could be merged with `screens`, it was separated just to keep structure a bit cleaner)
- `screens` - components which are connected to business logic and can influence on global state
- `store` - folder with global state management for the app (currently it relies on redux)
- `utils` - helpers functions/methods for routine tasks: formatting, updating, some calculating, etc.
- `App.tsx` - root component for the app (mostly contains various global configs)
- `globals.d.ts` - file contains some global declarations for correct ts work
- `index.html` - pattern file for index file in dist
- `index.js` - main entry js file

### A component folder:

- main .tsx file
- additional .ts(x) files (also they could be placed in `components` folder)
- assets folder (if it's required)

## What need to be added to extend the app

- Prettier: to make formatting the same across the app
- EsLint: to make code style the same across the app
- It's better increase test coverage (now it's very low, just for presentation)

## What should be clarified if it wasn't just a homework task

- What we should to show if portfolio is empty
- What we should to show if a stock details is not loaded
- Loading states: on portfolio load, on details load, add adding a stock, on removing a stock
- Do we need to show any confirmation on remove click?
- Consider ability of bulk removing
