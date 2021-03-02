import { Then } from "cypress-cucumber-preprocessor/steps";

Then("Is {int} equals to {int}", (first: number, second: number) => {
  assert(first === second);
});
