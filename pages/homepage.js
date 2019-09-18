let homepage = function() {
  var firstNumber_input = element(by.model("first"));
  var secondNumber_input = element(by.model("second"));
  var goButton = element(by.css('[ng-click="doAddition()"]'));

  this.get = function(url) {
    browser.get(url);
  };

  this.enterFirstNumber = function(firstNo) {
    firstNumber_input.sendKeys(firstNo);
  };

  this.enterSecondNumber = function(secondNo) {
    secondNumber_input.sendKeys(secondNo);
  };

  this.clickGo = function() {
    goButton.click();
  };

  this.verifyResult = function(result) {
    let output = element(by.cssContainingText(".ng-binding", result));
    expect(output.getText(0)).toEqual(result);
  };

  this.wait = function(period) {
    browser.sleep(period);
  };
};

module.exports = new homepage();