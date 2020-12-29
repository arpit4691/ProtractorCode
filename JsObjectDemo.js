const { browser, element } = require("protractor");

function car() {
    this.firstinput = element(by.model("first"));
    this.secondinput = element(by.model("second"));
    this.gobutton = element(by.id("gobutton"));
    this.getresult = element(by.css("h2[class='ng-binding']"));
    this.colour = "red";
    this.engine = "turbo";
    this.brand = "Fiat";
    this.search = "by.css('input')";
    this.getURL = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    //SCB HomePage
    this.getSCBURL = function() {
        browser.get("http://scb-sme.vmlyrconnectasia.com/content/scb/th/sme-banking.html");
    }
    this.scbLogo = element(by.css(".logo > .probg"));
    this.announcementAlertCloseIcon = element(by.css("div[role='alert'] > .alert-close.icon-close"));
    this.announcementAlertLink = element(by.css(".white-link"));
    this.imageTabComponentMainHeading = element(by.css("div:nth-of-type(2) > div > .box.contain .rte-d > h2"));
    this.imageTabComponentTab1 = element(by.css(".tabmenu li:nth-of-type(1) [data-toggle]"));
    this.imageTabComponentTab2 = element(by.css(".tabmenu li:nth-of-type(2) [data-toggle]"));
    this.imageTabComponentTab3 = element(by.css(".tabmenu li:nth-of-type(3) [data-toggle]"));
    this.imageTabComponentTab4 = element(by.css(".tabmenu li:nth-of-type(4) [data-toggle]"));
    this.imageTabComponentBusinessLoansCTA = element(by.css("#business-loans .description [target]"));
    this.imageTabComponentTiles = element.all(by.css("div#business-loans .imgTextTile-content.row  .row > li"));
    this.imageTabComponentTile1 = element.all(by.css("div#business-loans .imgTextTile-content.row  .row > li:nth-of-type(1)"));
    this.imageTabComponentBusinessLoansHeading = element(by.xpath("//div[@id='business-loans']//div[@class='imgTextTile-content row']/div[2]//h3"));
    this.fourtilesComponentMainHeading = element(by.css("div:nth-of-type(6) > div > .box.contain .rte-d > h2"));
    this.fourtilesComponentMainLocator = element.all(by.css(".fourTiles-content ul li"));
    this.fourtilesComponentImages = element(by.css(".tileContent > .thumb"));
    this.fourtilesComponentHeading = element(by.css(".tileContent > h6 > .secondary"));
    this.fourtilesComponentPara = element(by.css("p"));
    this.fourtilesComponentReadMoreLink = element(by.css("li > .tileContent > a"));
};

//exporting the object to use across all projects
module.exports = new car();