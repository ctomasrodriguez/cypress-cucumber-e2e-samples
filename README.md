# Summary

This project consist on some gherkin Cypress tests written in Typescript with the help of cypress-cucumber-preprocessor

# VSCode Plugins

It's recomended to install this plugin from Visual Studio market since it will help us to autocomplete steps in the features files:

```
Name: Cucumber (Gherkin) Full Support
Id: alexkrechik.cucumberautocomplete
Description: VSCode Cucumber (Gherkin) Full Language Support + Formatting + Autocomplete
Publisher: Alexander Krechik
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
```

# Folder and files structure

- .vscode/settings.json: configuration for _cucumberautocomplete_ plugin
- tsconfig.json: Typescript configuration
- cypress.json: Cypress configuration
- cypress/integration: where we are going to place our Gherkin features, steps, etc.

# Defined Features

In case you don't know about Gherkin keywords you can read about them [here](https://cucumber.io/docs/gherkin/reference/)

## Hello World

In this basic example, we have this _Hello World.feature_ where we have defined a very basic feature consisting in only two basic steps that assert nothing. That steps are located in a folder with the same name as the feature _cypress/integration/Hello World/helloWorld.ts_ . Inside the folder typescript file names doesn't really matters.

## Counter

A basic example with Given - When - Then and showing how to pass data to the steps

## Shared Steps

An example showing how to build features using shared steps.

All shared by default must be included in the _common_ subfolder, in this example _cypress/integration/common_

## Login

I have this example where I have one feature with two scenarios: valid login and invalid login.

I have divided this "feature" in 3 files:

- invalid login.ts: with the steps for Gherkin for the invalid login scenario
- valid login.ts: with the steps for Gherkin for the valid login scenario
- functions.ts: functions that will be used in both scenarios

Probably there are much better ways to organize this files, but this is just for the purpose of making this example clear.

If you see function login, you can see that it takes the values from environment variables, and for that reason unless you have an account in [Chameleon](https://chameleon.vision/en/index.html) this test will fail :)

# How to run this tests

Execute:

- npm ci
- npm run cypress

# How to write more tests

Easy, if you only want to do more features just write another _.feature_ file inside _cypress/integration_ folder and create the steps required (Cucumber Autocomplete will help you with that)

If you want to share behaviours maybe you have to extract that behaviour to a functions like I did in _cypress/integration/Login/functions.ts_
