module.exports = {
   tags: ['google'],
   'Demo test Google' : function (browser) {
        browser 
        .url('http://www.google.com') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        .assert.title('Google') // Make sure Site title matches
        .assert.visible('[name="q"]') 
        .setValue('[name="q"]', 'nightwatchjs') // send values 
        .click('div.FPdoLc.VlcLAe > center > input:nth-of-type(1)') // click on search box
        .pause(1000)
        .end();
      },
    'Test iaditya.com' : function (browser) {
        browser
            .url('http://www.google.com') // Go to a url
            .waitForElementVisible('body', 1000) // wait till page loads
            .assert.title('Google') // Make sure Site title matches
            .assert.visible('[name="q"]')
            .setValue('[name="q"]', 'iaditya.com') // send values
            .click('div.FPdoLc.VlcLAe > center > input:nth-of-type(1)') // click on search box
            .pause(1000)
            .end();
    }

};
