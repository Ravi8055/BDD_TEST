Feature: Test Smoke scenarios of Insight

Scenario: Test Insight with Valid Credentials
Given Open firefox and start application
When User enters valid UserName and Password
And User should be able to login
Then It should display Dashboard
And User LogOut from the Application