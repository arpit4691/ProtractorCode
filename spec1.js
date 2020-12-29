describe('Protractor Learning', function() {
    it('Open Angular js website', function() {
        browser.get('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
            console.log('Execute the last step');
        })
    })
    it('Close Browser', function() {})
})