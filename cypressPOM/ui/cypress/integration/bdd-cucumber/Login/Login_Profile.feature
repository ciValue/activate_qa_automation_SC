Feature: Login
--Scenario: Login user with different profiles
--Given I navigate to supply chain application
--When I enter  login credentials
--Then I should  be logged in


@smoke@regression
Scenario Outline: Login with different profile
Given I navigate to supply chain application
When I login with  <profile>
Then I should  be logged in
Examples:
    | profile |
    | Admin Role |