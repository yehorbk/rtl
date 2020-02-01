'use strict';

const KEYS = { file: '-f', options: '-o' };

const getFileName = args => args[args.indexOf(KEYS.file) + 1];

const getApplicationArguments = (path, args) => {
    const applicationArguments = [args[0], path];
    const index = args.indexOf(KEYS.options);
    const options = index === -1 ? null : args.slice(index + 1);
    if (options) {
        applicationArguments.push(...options);
    }
    return applicationArguments;
};

const validateApplication = application => {
    if (application.prototype.main) {
        throw Error('the function \'main\' must be a static!');
    }
    if (!application.main) {
        throw Error('there is no function \'main\'!');
    }
    if (typeof application.main !== 'function') {
        throw Error('\'main\' must be a function!');
    }
};

const bootstrap = (dir, args) => {
    const path = `${dir}/${getFileName(args)}`;
    const application = require(path);
    validateApplication(application);
    application.main(getApplicationArguments(path, args));
};

module.exports = { bootstrap };
