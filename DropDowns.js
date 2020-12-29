describe('All Locator Understanding', function() {
    function numbersOperation(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
    }

    function selectDropDownandGo(operatorName) {
        element(by.model("operator")).element(by.css("option[value='" + operatorName + "']")).click();
        element(by.id("gobutton")).click();
    }

    function getValueandGo() {
        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(values) {
                console.log(values);
            })
        })
        element(by.id("gobutton")).click();
    }

    function calc(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(values) {
                if (values == c) {
                    item.click();
                }
            })
        })
        element(by.id("gobutton")).click();
    }

    it('all locator', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        calc(2, 3, "MULTIPLICATION");
        calc(9, 2, "DIVISION");
        element.all(by.repeater("result in memory")).count().then(function(countvalue) {
            console.log(countvalue);
        })
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            })
        })
    })
})