# program-entry-point
A library that allows to implement the `main` class of the application and use it to manage the application process.

# Installation
- Run `npm install` to install dependencies
- Run `npm build` to build .ts files into .js

# How to use
1. Run with npm (default): `npm run-script pep-start`
2. Run with pep (custom): `node ./lib/pep.js -f demo.js`
3. Select file: put the file name after the `-f` key
4. Push arguments to application: put the arguments after `-o` key

# Scripts
- `npm start` - build and run application with pep
- `npm test` - run tests
- `npm run-script build` - build .ts files into .js
- `npm run-script eslint` - check for syntax mistakes
