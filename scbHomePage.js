const { browser } = require('protractor');

describe('SCB Home Page Verification', () => {
    var scbHome = require('./JsObjectDemo');

    function clicknTitleVerification(locator, actualtext, message) {
        locator.click().then(function() {
            if (expect(browser.getCurrentUrl()).toContain(actualtext)) {
                console.log(message);
            }
        });
    }

    function browserNavigatebackFunctionality(actualtext, message) {
        browser.navigate().back().then(function() {
            if (expect(browser.getCurrentUrl()).toContain(actualtext)) {
                console.log(message);
            }
        });
    }

    function getTextVerification(locator, actualtext, message) {
        locator.getText().then(function(text) {
            if (text.trim() == actualtext) {
                console.log(message + " " + text.trim());
            }
        });
    }

    function repeaterGetText(mainlocator, sublocator) {
        mainlocator.each(function(item) {
            item.sublocator.getText().then(function(text) {
                console.log(text);
            })
        })
    }

    function repeaterClick(mainlocator, sublocator) {
        mainlocator.each(function(item) {
            clicknTitleVerification(item.sublocator, '/articles/article-listing', "Article Page verified");
            browserNavigatebackFunctionality('http://scb-sme.vmlyrconnectasia.com/content/scb/th/sme-banking.html', 'Navigated back to Home Page');
        })
    }

    beforeEach(function() {
            scbHome.getSCBURL();
        })
        // it('Verify the presence of Header elements', () => {
        //     expect(scbHome.scbLogo.isPresent()).toBe(true);
        //     expect(scbHome.announcementAlertLink.isPresent()).toBe(true);
        //     expect(scbHome.announcementAlertLink.isPresent()).toBe(true);
        // })
        // it('Verify the functionality of logo icon', () => {
        //     scbHome.scbLogo.click().then(function() {
        //         if (expect(browser.getCurrentUrl()).toEqual('http://scb-sme.vmlyrconnectasia.com/content/scb/th/sme-banking.html')) {
        //             console.log("Logo clicked properly");
        //         }
        //     });
        // });
        // it('Verify the tab component functionality', () => {
        //     getTextVerification(scbHome.imageTabComponentMainHeading, 'เราพร้อมดูแลธุรกิจคุณให้เติบโต', 'Image Tab Components main heading fetched ');
        //     scbHome.imageTabComponentTab1.getAttribute('class').then(function(text) {
        //         if (text == 'active') {
        //             console.log('First tab is active');
        //         }
        //     })
        //     scbHome.imageTabComponentTab2.click();
        //     expect(scbHome.imageTabComponentBusinessLoansCTA.isPresent()).toBe(true);
        //     expect(scbHome.imageTabComponentBusinessLoansCTA.isPresent()).toBe(true);
        //     expect(scbHome.imageTabComponentTiles.count()).toBe(4);
        //     expect(scbHome.imageTabComponentBusinessLoansHeading.getText()).toEqual('สินเชื่อเพื่อธุรกิจ');
        //     clicknTitleVerification(scbHome.imageTabComponentTile1, 'unsecured-loan', 'Navigated to Unsecured Loan Url');
        //     browserNavigatebackFunctionality('#business-loans', 'Navigated back to the Home Page Url');

    // });
    it('Verify the functionality of four tiles component', () => {
        getTextVerification(scbHome.fourtilesComponentMainHeading, 'เราอยู่ในแวดวงธุรกิจเดียวกัน', 'Four Tiles Components main heading fetched ');
        repeaterGetText(scbHome.fourtilesComponentMainLocator, scbHome.fourtilesComponentHeading);
        repeaterGetText(scbHome.fourtilesComponentMainLocator, scbHome.fourtilesComponentPara);
        repeaterClick(scbHome.fourtilesComponentMainLocator, scbHome.fourtilesComponentReadMoreLink);
    })

})