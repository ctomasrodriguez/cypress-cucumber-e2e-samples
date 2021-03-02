import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import login from "./functions";

Given("I login with valid credentials", () => {
  login();
});

Then("App greets me", () => {
  cy.get(".dashboard-title").contains("Hola Guillermo");
});
