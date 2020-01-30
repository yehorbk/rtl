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

((dir, args) => {
    const path = `${dir}/${getFileName(args)}`;
    const application = require(path);
    application.main(getApplicationArguments(path, args));
})(process.cwd(), process.argv);
