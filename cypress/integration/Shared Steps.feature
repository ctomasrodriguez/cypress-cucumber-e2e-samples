Feature: Shared Steps
    Background: Just a basic feature to show how to test with shared steps.
    All shared steps must be in the common directory

   Scenario: Shared step with numbers
     Then Is 10 equals to 10


   Scenario: Shared step with strings
     Then Is "foo" equals to "foo"