module.exports = {
   tags: ['yahoo'],
    'Demo test Yahoo' : function (browser) {
       browser.url('https://www.yahoo.com')
           .waitForElementVisible('#uh-search-box', 1000) // wait till page loads
            .assert.title('Yahoo')
           .assert.visible('#uh-search-box')
           .setValue('#uh-search-box', 'nightwatchjs')
           .click('#uh-search-button')
           .pause(1000)
           .end();

    }
};
