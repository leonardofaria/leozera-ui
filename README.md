# leozera-ui

[![Greenkeeper badge](https://badges.greenkeeper.io/leonardofaria/leozera-ui.svg)](https://greenkeeper.io/) [![Build Status](https://circleci.com/gh/leonardofaria/leozera-ui/tree/master.svg?style=shield)](https://circleci.com/gh/leonardofaria/leozera-ui/) [![codecov](https://codecov.io/gh/leonardofaria/leozera-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/leonardofaria/leozera-ui) [![NPM Package](https://badge.fury.io/js/leozera-ui.svg)](https://npm.im/leozera-ui) [![Dependencies](https://david-dm.org/leonardofaria/leozera-ui.svg)](https://david-dm.org/leonardofaria/leozera-ui.svg) [![Dev Dependencies](https://david-dm.org/leonardofaria/leozera-ui/dev-status.svg)](https://david-dm.org/leonardofaria/leozera-ui/dev-status.svg) ![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://leozera-ui.leonardofaria.net) [![license](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/leonardofaria/leozera-ui/blob/master/LICENSE)

> This is my experimental WIP React UI library. The goal here is playing with NPM, React, Webpack (and its multiple loaders), Storybook, Jest, Husky and others in order to create a modular library.

## Installing

Yarn:
```sh
yarn add leozera-ui
```
npm:
````sh
npm i --save leozera-ui
````

## Using

````javascript
// Import for the compiled file
import { Button } from 'leozera-ui'

// Somewhere in your code:
return (<Button>Test</Button>)
````

## Developing

````sh
# Part 1: getting the project
git clone git@github.com:leonardofaria/leozera-ui.git
cd leozera-ui
yarn install # get dependencies
yarn build:lib # build the library when ready

# Part 2: installing the built version in your project
cd /path/to/your/project
yarn add file:/path/to/leozera-ui/dist
````

## Todo

I have created a [Github project](https://github.com/leonardofaria/leozera-ui/projects/1) to list what is next.
