$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Smoke scenarios of Insight",
  "description": "",
  "id": "test-smoke-scenarios-of-insight",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test Insight with Valid Credentials",
  "description": "",
  "id": "test-smoke-scenarios-of-insight;test-insight-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid UserName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "It should display Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User LogOut from the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 45112806799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_enters_valid_UserName_and_Password()"
});
formatter.result({
  "duration": 161552713,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_should_be_able_to_login()"
});
formatter.result({
  "duration": 10261565563,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.It_should_display_Dashboard()"
});
formatter.result({
  "duration": 10020385342,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 28648759,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #logout\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027PRAKAT-L-051-PC\u0027, ip: \u0027172.16.8.22\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\PRAKAT~1\\AppData\\Local\\Temp\\rust_mozprofile.qcds2AOPHkK9, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, platform\u003dXP, specificationLevel\u003d0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d55.0.3, platformVersion\u003d6.1, moz:processID\u003d6376, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP}]\nSession ID: 9ef2e7c9-9aa1-47aa-b387-8f56c935f478\n*** Element info: {Using\u003did, value\u003dlogout}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefination.LoginStepDefinition.User_LogOut_from_the_Application(LoginStepDefinition.java:61)\r\n\tat ✽.And User LogOut from the Application(Login.feature:8)\r\n",
  "status": "failed"
});
});