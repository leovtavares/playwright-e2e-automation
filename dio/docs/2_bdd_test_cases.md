# DIO BDD

Feature: Profile Access
  Scenario: Direct URL access
    Given I am a guest
    When I access the profile via direct URL
    Then the static assets should resolve correctly