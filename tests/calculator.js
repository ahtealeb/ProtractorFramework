let homepage = require("../pages/homepage");

describe("Demo calculator tests", function() {
  it("Addition test", function() {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    homepage.get("http://juliemr.github.io/protractor-demo/");

    //var first = element(by.model('first'));
    //first.sendKeys('5');
    homepage.enterFirstNumber("5");

    //var second = element(by.model('second'));
    //second.sendKeys('7');
    homepage.enterSecondNumber("7");

    //element(by.id('gobutton')).click();
    //element(by.css('[ng-click="doAddition()"]')).click();

    homepage.clickGo();

    //let result = element(by.cssContainingText('.ng-binding', '12'));
    //expect(result.getText(0)).toEqual('12');
    homepage.verifyResult("12");

    browser.sleep(2000);

  });

  it("Subtraction test", function() {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    homepage.get("http://juliemr.github.io/protractor-demo/");

    //var first = element(by.model('first'));
    //first.sendKeys('5');
    homepage.enterFirstNumber("5");

    //var second = element(by.model('second'));
    //second.sendKeys('7');
    homepage.enterSecondNumber("7");

    //element(by.id('gobutton')).click();
    //element(by.css('[ng-click="doAddition()"]')).click();

    homepage.clickGo1();

    //let result = element(by.cssContainingText('.ng-binding', '12'));
    //expect(result.getText(0)).toEqual('12');
    homepage.verifyResult("12");

    browser.sleep(2000);

  });

  /* it('Subtraction test', function(){


    }); */
});
