import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let counter: number = 0;

Given("counter has been reset", () => {
  counter = 0;
});

When("counter is incremented", () => {
  counter += 1;
});

When("counter is incremented by {int}", (number: number) => {
  counter += number;
});

Then("counter equals {int}", (value) => {
  expect(counter).to.equal(value);
});
