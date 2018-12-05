Feature: Find the latest commit date for the puppet show repository on github.

Scenario: Check the latest commit date
  Given User is on "https://github.com/pheonixcoder/puppet-show"
  When click on selector ".numbers-summary .commits a"
  Then display text of first "a.sha"
  Then Notify text of first "a.sha"
