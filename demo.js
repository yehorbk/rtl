const { Application } = require('./build/application-interface');

class Demo extends Application {
    main(args) {
        console.log(args);
    }
}

module.exports.Demo = Demo;
