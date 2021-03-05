import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { contains } from "cypress/types/jquery";

let url = "";

Given("Hdiv url {string}", (value) => {
  url = value;
});

When("I visit Hdiv console", () => {
  cy.visit(url + "/hdiv-console-web");
});

Then("I login as {string} with password {string}", (user, password) => {
  cy.get("#id_username").type(user);
  cy.get("#id_password").type(password, { log: false }).type("{enter}");
});

Then("I do not get in", () => {
  cy.get("#changeApplication").should("not.exist");
});

And("I get inside", (value) => {
  cy.get("#changeApplication option").contains("All applications");
  cy.get("#changeApplication").invoke("attr", "action").should("equal", "/hdiv-console-web/a/0/dashboard");
});
