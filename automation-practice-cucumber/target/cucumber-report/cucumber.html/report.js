$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "As user i want to create an account on automation practice website",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"\u003cfirstname\u003e\",lastname \"\u003clastname\u003e\"and password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"\u003caddL1\u003e\" city\"\u003ccity\u003e\" state\"\u003cstate\u003e\" zipCd\"\u003czipCd\u003e\" country\"\u003ccountry\u003e\" mobNo.\"\u003cmobNo\u003e\" addAlias\"\u003caddAlias\u003e\" and click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "addL1",
        "city",
        "state",
        "zipCd",
        "country",
        "mobNo",
        "addAlias"
      ],
      "line": 13,
      "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Happy",
        "Life",
        "Always123",
        "1 Nice Building",
        "Maryland",
        "Ohio",
        "12345",
        "United States",
        "0123456789",
        "main home"
      ],
      "line": 14,
      "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10824289000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"Happy\",lastname \"Life\"and password\"Always123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"1 Nice Building\" city\"Maryland\" state\"Ohio\" zipCd\"12345\" country\"United States\" mobNo.\"0123456789\" addAlias\"main home\" and click on register button",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 138261100,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4243353000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iEnterEmailAndClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 295286700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy",
      "offset": 73
    },
    {
      "val": "Life",
      "offset": 90
    },
    {
      "val": "Always123",
      "offset": 108
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfPersonalInformationFormWithFirstnameLastnameAndPassword(String,String,String)"
});
formatter.result({
  "duration": 3947087000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 62
    },
    {
      "val": "Maryland",
      "offset": 84
    },
    {
      "val": "Ohio",
      "offset": 100
    },
    {
      "val": "12345",
      "offset": 112
    },
    {
      "val": "United States",
      "offset": 127
    },
    {
      "val": "0123456789",
      "offset": 149
    },
    {
      "val": "main home",
      "offset": 170
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfAddressDetailsFormWithAddLCityStateZipCdCountryMobNoAddAliasAndClickOnRegisterButton(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13276044100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldNavigateToMyAccountPage()"
});
formatter.result({
  "duration": 75947500,
  "status": "passed"
});
formatter.after({
  "duration": 759202900,
  "status": "passed"
});
formatter.uri("sign.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Page Test",
  "description": "As user I want to sign in to automation practice website",
  "id": "sign-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7067895500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user Should Navigate To SignIn Page SuccessFully",
  "description": "",
  "id": "sign-page-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Sign in Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6488254400,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 66682200,
  "status": "passed"
});
formatter.after({
  "duration": 782524000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"\u003cusername\u003e\" password \"\u003cpassword\u003e\" and see the error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5293828200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"\" password \"123456\" and see the error message \"An email address required.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2465960900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 37
    },
    {
      "val": "An email address required.",
      "offset": 72
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 4378588100,
  "status": "passed"
});
formatter.after({
  "duration": 853398100,
  "status": "passed"
});
formatter.before({
  "duration": 5931259400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"abcd@gmail.com\" password \"\" and see the error message \"Password is required.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2157825800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 25
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "Password is required.",
      "offset": 80
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 2787940000,
  "status": "passed"
});
formatter.after({
  "duration": 858677200,
  "status": "passed"
});
formatter.before({
  "duration": 6182649200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"adfdfgfg\" password \"123456\" and see the error message \"Invalid email address.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2451412300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 45
    },
    {
      "val": "Invalid email address.",
      "offset": 80
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 2345003900,
  "status": "passed"
});
formatter.after({
  "duration": 846647900,
  "status": "passed"
});
formatter.before({
  "duration": 5608457300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"abcd@gmail.com\" password \"123456\" and see the error message \"Authentication failed.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4878603700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 51
    },
    {
      "val": "Authentication failed.",
      "offset": 86
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 2976046500,
  "status": "passed"
});
formatter.after({
  "duration": 926536900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Sign in with username \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see Sign out link is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Georgesmith@gmail.com",
        "acd1234"
      ],
      "line": 33,
      "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2826738400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d101.0.4951.54)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-OS99UNT\u0027, ip: \u0027192.168.68.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6e5a3079fded7240db5e3ca85628d1e9, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\NIRALI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56305}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56305/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6e5a3079fded7240db5e3ca85628d1e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:328)\r\n\tat com.automation.cucumber.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:44)\r\n\tat com.automation.cucumber.Hooks.setUp(Hooks.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Sign in with username \"Georgesmith@gmail.com\" and \"acd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgesmith@gmail.com",
      "offset": 25
    },
    {
      "val": "acd1234",
      "offset": 53
    }
  ],
  "location": "SignSteps.iSignInWithUsernameAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignSteps.iShouldSeeSignOutLinkIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
