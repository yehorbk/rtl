const { Application } = require('./build/application');

class Demo extends Application {
    static main(args) {
        const { argv } = process;
        console.dir({ argv, args });
    }
}

module.exports = Demo;
