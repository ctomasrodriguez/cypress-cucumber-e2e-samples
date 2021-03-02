import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("Hello World", () => {
  console.log("Hello World! Everything is under control :)");
});

Then("Everything will be fine", () => {
  console.log("As I said, everything is under control :)");
});
