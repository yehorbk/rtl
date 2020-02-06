# Runtime Library
A library that provides bootstrap functionality and process management tools for JavaScript applications.
It allows to extend and `Application` class and implement the `main` function in JavaScript.

# NPM Installation
```
$ npm install --save @genericst/rtl
```

# GitHub Installation
- Run `npm install` to install dependencies
- Run `npm build` to build .ts files into .js
- Run `npm link` to create a temporary link to library cli  
If you have a troubles with that commands try to run with `sudo`.

# How to use
## Syntax
```
$ rtl [options]
```

## Command Line Arguments
- `-f`: select file
- `-o`: push arguments to application

## Run
1. Run with **rtl** (default): `rtl -f demo.js`
2. Run with **node** (custom): `node ./bin/cli.js -f demo.js`

## Demo
```
const { Application } = require('./rtl-components');

class Demo extends Application {
    static main(args) {
        const { argv } = process;
        console.dir({ argv, args });
    }
}

module.exports = Demo;
```

# Requirements
- Entry class must be extended of `Application`
- Entry class must be exported from the file
- `Main` must be a **static function**
- Only **`use strict`**, **imports/exports**, **global variables** and **classes** allowed in the file


# Scripts
- `npm start` - build and run application with rtl
- `npm test` - run tests
- `npm run-script rtl-run` - run application with rtl
- `npm run-script build` - build .ts files into .js
- `npm run-script eslint` - check for syntax mistakes

# Author
**Yehor Bublyk**: [GitHub](https://github.com/yehorbk) • [Twitter](https://twitter.com/thisisyehorbk)
