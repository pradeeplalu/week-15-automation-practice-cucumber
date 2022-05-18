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
  "duration": 76153269700,
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
  "duration": 2024173300,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
