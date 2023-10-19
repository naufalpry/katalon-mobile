Feature: Open Default App
  Scenario: Open SwagLabs System App
    Given I open default app
    
  Scenario: Open SwagLabs App to login App
    When I should see 'Login/android.widget.EditText - Username'
    When I type 'standard_user' on 'Login/android.widget.EditText - Username'
    Then I wait for 1 seconds
    And I should see 'Login/android.widget.EditText - Password'
    And I type 'secret_sauce' on 'Login/android.widget.EditText - Password'
    Then I wait for 1 seconds
    And I should see 'Login/android.view.ViewGroup - LoginBtn'
    And I click 'Login/android.view.ViewGroup - LoginBtn'
    Then I wait for 2 seconds
    
   Scenario: Pick One Product using contains xpath
    Then I should see 'Items/android.view.ViewGroup - Pick one item'
    Then I click 'Items/android.view.ViewGroup - Pick one item'
    Then I wait for 1 seconds
    Then I should see 'Items/android.view.ViewGroup - Item start-with'
    Then I click 'Items/android.view.ViewGroup - Item start-with'
    Then I wait for 1 seconds
    
    Scenario: Logout App
    And I should see 'Items/android.view.ViewGroup - BurgerBtn'
    And I click 'Items/android.view.ViewGroup - BurgerBtn'
    Then I wait for 2 seconds
    And I should see 'Logout/android.view.ViewGroup - LogoutBtn'
    And I click 'Logout/android.view.ViewGroup - LogoutBtn'
    Then I wait for 1 seconds