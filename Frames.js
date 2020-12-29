describe('Protractor Frames Understanding', function() {
    it('frames', function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        browser.switchTo().frame(element(by.css("#courses-iframe")).getWebElement());
        // browser.switchTo().frame(0);
        element(by.css("a[href*='sign_in']")).getText().then(function(text) {
            console.log(text);
        })
    })
})