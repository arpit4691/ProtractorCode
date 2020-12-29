describe('Protractor Element Basics', function() {
    var obj = require("./JsObjectDemo.js");
    var using = require("jasmine-data-provider");
    var d = require("./data.js");

    beforeEach(function() {
        obj.getURL();
    })

    //data stores actual data
    //description stores sub object name
    //for every iteration one data set is picked
    using(d.Datadriven, function(data, description) {
        it('Test Calculator ' + description, function() {
            // browser.waitForAngularEnabled(false);
            // browser.get('http://google.com'); //non angular apps
            obj.firstinput.sendKeys(data.firstinput);
            obj.secondinput.sendKeys(data.secondinput);
            obj.gobutton.click();
            expect(obj.getresult.getText()).toBe(data.result);
            obj.getresult.getText().then(function(text) {
                console.log(text);
            });
        })
    });
    it('Close Browser ', function() {
        obj.gobutton.click().then(function() {
            browser.sleep(1000);
        });
    });
    afterEach(function() {
        console.log("Test Completed");
    })
});