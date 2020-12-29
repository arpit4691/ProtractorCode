describe('Chain Locators Understanding', function() {
    it('locators', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("7");
        element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
        element(by.id("gobutton")).click();
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            })
            // expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
            // element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
            //     console.log(text);
            // });
    })
})