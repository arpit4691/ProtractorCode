describe('All Locator Understanding', function() {
    function Add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('all locator', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        Add(1, 3);
        Add(5, 6);
        Add(2, 4);
        Add(9, 7);
        Add(3, 6);
        Add(8, 1);
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