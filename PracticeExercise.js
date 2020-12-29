describe('Protractor Alert steps', function() {
    function selectItems(product) {
        element.all(by.tagName("app-card")).each(function(item) {
            item.element(by.css("h4[class='card-title'] a")).getText().then(function(text) {
                if (text == product) {
                    console.log(text);
                    item.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })
    }

    it('Open NonAngular js website Alerts', function() {

        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("Mystudents");
        element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function() {
            element(by.css("div[class*='success']")).getText().then(function(text) {
                console.log(text);
            })
        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M").then(function() {
            element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
                console.log(text);
            })
        });
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("MA").then(function() {
            element.all(by.css("[class='alert alert-danger']")).count().then(function(value) {
                console.log(value);
                if (value == 0) {
                    console.log("Correct value is entered");
                }
            })
        });
        element(by.linkText("Shop")).click();


        selectItems("Samsung Note 8");
        selectItems("iphone X");
        element(by.partialLinkText("Checkout")).getText().then(function(text) {
            console.log(text);
            var res = text.split("(");
            var x = Number(res[1].trim().charAt(0));
            // var y = x + 1;
            // console.log(y);
            expect(x).toBe(2);
            // expect(y).toBe("2");
        })
    })
})