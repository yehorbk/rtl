const { Application } = require('./rtl-components');

class Demo extends Application {
    static main(args) {
        const { argv } = process;
        console.dir({ argv, args });
    }
}

module.exports = Demo;
