import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import login from "./functions";

Given("I login with invalid credentials", () => {
  login("notvalid@email.com", "someweirdpassword");
});

Then("I receive a login error message", () => {
  cy.get(".error-bubble").contains("Tus datos introducidos no son correctos");
});
