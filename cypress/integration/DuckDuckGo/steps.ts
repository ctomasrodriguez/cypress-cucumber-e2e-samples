import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { contains } from "cypress/types/jquery";

When("I visit DuckDuckGo", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I query {string}", (value) => {
  cy.get("#search_form_input_homepage").type(value).type("{enter}");
});

And("{string} appears", (value) => {
  cy.get("body").contains(value);
});
