module.exports = {
    tags: ['iaditya'],
    'iaditya.com test' : function (browser) {
        browser
            .url('http://www.iaditya.com/')
            .assert.title('iAditya.com')
    }
};
