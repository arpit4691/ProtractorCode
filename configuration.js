var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // browserstackUser: 'arpitporwal2',
    // browserstackKey: 'TNQgA7XssMXHUXdtsjwm',
    specs: ['restapitest.js'],

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },
    suites: {
        Smoke: ['ChainLocators.js', 'DropDowns.js'], //to run specific tagged test cases
        Regression: 'ElementBasics.js'
    },

    capabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            args: ["--headless"]
        }
    },

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};