import { Then } from "cypress-cucumber-preprocessor/steps";

Then("Is {string} equals to {string}", (first: string, second: string) => {
  assert(first === second);
});
