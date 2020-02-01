# Runtime Library
A library that provides bootstrap functionality and process management tools for JavaScript applications.
It allows to extend and `Application` class and implement the `main` function in JavaScript.

# Installation
- Run `npm install` to install dependencies
- Run `npm build` to build .ts files into .js
- Run `npm link` to create a temporary link to library cli  
If you have a troubles with that commands try to run with `sudo`.

# How to use
## Syntax
> $ rtl [options] file

## Run
1. Run with **rtl** (default): `rtl -f demo.js`
2. Run with **node** (custom): `node ./bin/cli.js -f demo.js`

## Command Line Arguments
- `-f`: select file
- `-o`: push arguments to application

# Requirements
- Entry class must be extended of `Application`
- `Main` must be a **static function**
- Only **`use strict`**, **imports/exports**, **global variables** and **classes** allowed in the file


# Scripts
- `npm start` - build and run application with rtl
- `npm test` - run tests
- `npm run-script rtl-run` - run application with rtl
- `npm run-script build` - build .ts files into .js
- `npm run-script eslint` - check for syntax mistakes

# Author
**Yehor Bublyk**: [GitHub](https://duckduckgo.com "The best search engine for privacy") • [Twitter](https://duckduckgo.com "The best search engine for privacy")
