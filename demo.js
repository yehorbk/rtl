const { Application } = require('./build/application');

class Demo extends Application {
    static main(args) {
        console.log(args);
    }
}

module.exports = Demo;
