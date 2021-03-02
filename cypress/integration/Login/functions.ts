export default function login(email: string = Cypress.env("EMAIL"), password: string = Cypress.env("PASSWORD")) {
  cy.visit("https://app.chameleon.vision");

  cy.get("input").first().type(email).should("have.value", email);
  cy.get("[type='password']").type(password, { log: false }).should("have.value", password);
  cy.get("button").click();
}
