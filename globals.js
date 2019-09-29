// globals.js
require('chromedriver');

chromedriver = require('chromedriver');

module.exports = {
    before: (done) => {
        chromedriver.start();
        done();
    },
    after: (done) => {
        chromedriver.stop();
        done();
    },
};